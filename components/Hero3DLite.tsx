"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hero3DLite — a performant live WebGL motion backdrop for interior page heroes.
 *
 * Renders an animated "topographic" wireframe terrain that ripples in a slow
 * wave, lit in TBPM green, over a drifting field of ambient particles. It gives
 * every page the same premium, motion-rich feel as the home hero, but is far
 * lighter than the full instanced skyline so it sits comfortably behind short
 * page headers.
 *
 * A `variant` string (e.g. the page slug) deterministically varies the wave
 * speed, amplitude, density and camera framing so no two page heroes move the
 * same way.
 *
 * Performance & accessibility:
 *  - Caps device pixel ratio at 1.5
 *  - Pauses the render loop when the tab is hidden or the canvas scrolls off
 *  - Renders a single static frame when the user prefers reduced motion
 */
export default function Hero3DLite({ variant = "default" }: { variant?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Static single frame on reduced-motion or small screens — avoids the
    // continuous render loop's main-thread cost on mobile.
    const staticMode =
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(max-width: 768px)").matches);

    // ---- Deterministic per-variant parameters --------------------------
    let seed = 0;
    for (let i = 0; i < variant.length; i++) seed = (seed * 31 + variant.charCodeAt(i)) >>> 0;
    const rand = (min: number, max: number, salt: number) => {
      const v = ((seed ^ (salt * 2654435761)) >>> 0) / 0xffffffff;
      return min + v * (max - min);
    };

    const speed = rand(0.55, 0.95, 1);
    const amplitude = rand(1.4, 2.3, 2);
    const freq = rand(0.16, 0.26, 3);
    const camX = rand(-2.2, 2.2, 4);
    const hueShift = rand(-0.04, 0.04, 5); // small hue wander around brand green

    const INK = new THREE.Color("#2a271f");
    const BRAND = new THREE.Color("#00bf63").offsetHSL(hueShift, 0, 0);
    const EMERALD = new THREE.Color("#34d399").offsetHSL(hueShift, 0, 0);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(INK.getHex(), 18, 52);

    let width = mount.clientWidth || 1;
    let height = mount.clientHeight || 1;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 120);
    camera.position.set(camX, 7.5, 16);
    camera.lookAt(0, 0.5, -4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";

    // ---- Lighting -------------------------------------------------------
    scene.add(new THREE.AmbientLight(0x332e22, 0.8));
    const glowA = new THREE.PointLight(BRAND.getHex(), 70, 50, 2);
    glowA.position.set(-9, 7, 4);
    scene.add(glowA);
    const glowB = new THREE.PointLight(EMERALD.getHex(), 45, 50, 2);
    glowB.position.set(10, 5, -6);
    scene.add(glowB);

    // ---- Topographic wave terrain (wireframe) --------------------------
    const SEG = 72;
    const SIZE = 64;
    const geometry = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
    geometry.rotateX(-Math.PI / 2); // lie flat; local +z displacement -> world height

    const baseY = geometry.attributes.position.clone();

    const material = new THREE.MeshBasicMaterial({
      color: BRAND,
      wireframe: true,
      transparent: true,
      opacity: 0.42,
    });
    const terrain = new THREE.Mesh(geometry, material);
    terrain.position.set(0, -1.5, -6);
    scene.add(terrain);

    // A faint solid underlay to catch the glow and add depth
    const underlay = new THREE.Mesh(
      new THREE.PlaneGeometry(SIZE, SIZE),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#211f18"),
        metalness: 0.6,
        roughness: 0.6,
        transparent: true,
        opacity: 0.55,
      })
    );
    underlay.rotation.x = -Math.PI / 2;
    underlay.position.set(0, -1.9, -6);
    scene.add(underlay);

    // ---- Drifting ambient particles ------------------------------------
    const pCount = 160;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let p = 0; p < pCount; p++) {
      pPos[p * 3] = (Math.random() - 0.5) * 44;
      pPos[p * 3 + 1] = Math.random() * 14;
      pPos[p * 3 + 2] = (Math.random() - 0.5) * 30 - 6;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        color: EMERALD.getHex(),
        size: 0.07,
        transparent: true,
        opacity: 0.55,
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

    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const writeWave = (t: number) => {
      for (let i = 0; i < pos.count; i++) {
        const x = baseY.getX(i);
        const z = baseY.getZ(i);
        const h =
          Math.sin(x * freq + t) * Math.cos(z * freq * 0.9 - t * 0.7) * amplitude +
          Math.sin((x + z) * freq * 0.5 + t * 0.5) * (amplitude * 0.4);
        pos.setY(i, h);
      }
      pos.needsUpdate = true;
    };

    writeWave(0);

    const clock = new THREE.Clock();
    let raf = 0;
    let running = true;

    const renderFrame = () => {
      const t = clock.getElapsedTime() * speed;
      if (!staticMode) {
        writeWave(t);
        particles.rotation.y = -t * 0.03;
        const pp = pGeo.attributes.position as THREE.BufferAttribute;
        for (let p = 0; p < pCount; p++) {
          let y = pp.getY(p) + 0.01;
          if (y > 14) y = 0;
          pp.setY(p, y);
        }
        pp.needsUpdate = true;
      }

      pointer.x += (target.x - pointer.x) * 0.04;
      pointer.y += (target.y - pointer.y) * 0.04;
      camera.position.x = camX + pointer.x * 2.4;
      camera.position.y = 7.5 - pointer.y * 1.2;
      camera.lookAt(0, 0.5, -4);

      renderer.render(scene, camera);
    };

    const animate = () => {
      if (!running) return;
      renderFrame();
      raf = requestAnimationFrame(animate);
    };

    if (staticMode) {
      renderFrame();
    } else {
      animate();
    }

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
      underlay.geometry.dispose();
      (underlay.material as THREE.Material).dispose();
      pGeo.dispose();
      (particles.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  return <div ref={mountRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
