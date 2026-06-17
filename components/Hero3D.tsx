"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hero3D — a live WebGL "living skyline" rendered with Three.js.
 *
 * Renders an animated grid of extruded building-like blocks that gently
 * rise and fall, lit with TBPM-green accent lighting, with subtle mouse
 * parallax and drifting ambient particles. Designed to evoke a premium,
 * architectural feel without shipping heavy video assets.
 *
 * Performance & accessibility:
 *  - Caps device pixel ratio at 1.5
 *  - Pauses the render loop when the tab is hidden or the canvas scrolls off
 *  - Renders a single static frame when the user prefers reduced motion
 */
export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Render a single static frame (no continuous render loop) when the user
    // prefers reduced motion OR is on a small screen — the animation loop is
    // the main mobile performance cost (INP/TBT) on the most important page.
    const staticMode =
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(max-width: 768px)").matches);

    const INK = new THREE.Color("#2a271f");
    const BRAND = new THREE.Color("#00bf63");
    const EMERALD = new THREE.Color("#34d399");

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(INK.getHex(), 16, 46);

    let width = mount.clientWidth || 1;
    let height = mount.clientHeight || 1;

    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 100);
    camera.position.set(0, 9.5, 18);
    camera.lookAt(0, 1.5, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";

    // ---- Lighting -------------------------------------------------------
    scene.add(new THREE.AmbientLight(0x332e22, 0.9));

    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(8, 18, 10);
    scene.add(key);

    const glowA = new THREE.PointLight(BRAND.getHex(), 90, 40, 2);
    glowA.position.set(-8, 6, 6);
    scene.add(glowA);

    const glowB = new THREE.PointLight(EMERALD.getHex(), 55, 40, 2);
    glowB.position.set(10, 4, -4);
    scene.add(glowB);

    // ---- The "living skyline" ------------------------------------------
    const group = new THREE.Group();
    scene.add(group);

    const GRID = 16;
    const GAP = 1.55;
    const count = GRID * GRID;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    geometry.translate(0, 0.5, 0); // grow upward from the floor

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#3a352b"),
      metalness: 0.55,
      roughness: 0.35,
    });

    const mesh = new THREE.InstancedMesh(geometry, material, count);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    type Cell = { x: number; z: number; base: number; phase: number; dist: number };
    const cells: Cell[] = [];
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    const half = (GRID - 1) / 2;

    let i = 0;
    for (let gx = 0; gx < GRID; gx++) {
      for (let gz = 0; gz < GRID; gz++) {
        const x = (gx - half) * GAP;
        const z = (gz - half) * GAP;
        const dist = Math.hypot(x, z);
        const base = 0.6 + Math.max(0, 5.5 - dist * 0.45) + Math.random() * 1.6;
        const phase = dist * 0.5 + Math.random() * Math.PI * 2;
        cells.push({ x, z, base, phase, dist });

        // colour: mostly cool slate, a scatter of brand-green "lit windows"
        const lit = Math.random() > 0.82;
        color.copy(lit ? BRAND : INK).lerp(new THREE.Color("#423c30"), lit ? 0.15 : 0.55);
        mesh.setColorAt(i, color);
        i++;
      }
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    group.add(mesh);

    // Reflective floor plane to catch the green glow
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 80),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#1d1b15"),
        metalness: 0.7,
        roughness: 0.5,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.01;
    group.add(floor);

    // ---- Drifting ambient particles ------------------------------------
    const pCount = 220;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let p = 0; p < pCount; p++) {
      pPos[p * 3] = (Math.random() - 0.5) * 40;
      pPos[p * 3 + 1] = Math.random() * 16;
      pPos[p * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        color: EMERALD.getHex(),
        size: 0.06,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(particles);

    // ---- Interaction & loop --------------------------------------------
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const r = mount.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const writeInstances = (t: number) => {
      for (let c = 0; c < cells.length; c++) {
        const cell = cells[c];
        const wobble = staticMode ? 0 : Math.sin(t * 1.1 + cell.phase) * 0.5 + 0.5;
        const h = cell.base + wobble * (1.4 + cell.dist * 0.12);
        dummy.position.set(cell.x, 0, cell.z);
        dummy.scale.set(0.86, h, 0.86);
        dummy.updateMatrix();
        mesh.setMatrixAt(c, dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    };

    const clock = new THREE.Clock();
    let raf = 0;
    let running = true;

    const renderFrame = () => {
      const t = clock.getElapsedTime();
      writeInstances(t);

      if (!staticMode) {
        group.rotation.y = t * 0.05;
        particles.rotation.y = -t * 0.02;
        const pos = pGeo.attributes.position as THREE.BufferAttribute;
        for (let p = 0; p < pCount; p++) {
          let y = pos.getY(p) + 0.012;
          if (y > 16) y = 0;
          pos.setY(p, y);
        }
        pos.needsUpdate = true;
      }

      // smooth mouse parallax
      pointer.x += (target.x - pointer.x) * 0.04;
      pointer.y += (target.y - pointer.y) * 0.04;
      camera.position.x = pointer.x * 3.2;
      camera.position.y = 9.5 - pointer.y * 1.6;
      camera.lookAt(0, 1.5, 0);

      renderer.render(scene, camera);
    };

    const animate = () => {
      if (!running) return;
      renderFrame();
      raf = requestAnimationFrame(animate);
    };

    if (staticMode) {
      renderFrame(); // single static frame
    } else {
      animate();
    }

    // Pause when tab hidden
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!staticMode) {
        running = true;
        clock.getDelta();
        animate();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Pause when scrolled out of view
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!running && !staticMode && !document.hidden) {
            running = true;
            animate();
          }
        } else {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(mount);

    const onResize = () => {
      width = mount.clientWidth || 1;
      height = mount.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // ---- Cleanup --------------------------------------------------------
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
      geometry.dispose();
      material.dispose();
      mesh.dispose();
      pGeo.dispose();
      (particles.material as THREE.Material).dispose();
      floor.geometry.dispose();
      (floor.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
