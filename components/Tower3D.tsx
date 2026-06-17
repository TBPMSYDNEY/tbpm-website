"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Tower3D — a premium, "motion-video" style 3D centrepiece for the homepage body.
 *
 * Renders a slowly rotating glass-and-light skyscraper assembled from stacked,
 * tapering floor slabs, each outlined with a glowing brand-green edge. A cluster
 * of smaller satellite towers, a reflective ground plane and a drifting field of
 * emerald particles complete the scene. The whole assembly rotates on its own and
 * is gently nudged by both the pointer and the page scroll position, so it reads
 * like a looping architectural showreel rather than a static render.
 *
 * Performance & accessibility:
 *  - Caps device pixel ratio at 1.5
 *  - Pauses the render loop when the tab is hidden or the canvas scrolls off
 *  - Renders a single static frame when the user prefers reduced motion
 */
export default function Tower3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const INK = new THREE.Color("#16140f");
    const BRAND = new THREE.Color("#00bf63");
    const EMERALD = new THREE.Color("#34d399");
    const GLASS = new THREE.Color("#0e3b2a");

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(INK.getHex(), 22, 60);

    let width = mount.clientWidth || 1;
    let height = mount.clientHeight || 1;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 120);
    camera.position.set(0, 7, 26);
    camera.lookAt(0, 5, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";

    // ---- Lighting -------------------------------------------------------
    scene.add(new THREE.AmbientLight(0x2a2719, 0.7));

    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(6, 20, 12);
    scene.add(key);

    const rimA = new THREE.PointLight(BRAND.getHex(), 120, 60, 2);
    rimA.position.set(-10, 9, 8);
    scene.add(rimA);

    const rimB = new THREE.PointLight(EMERALD.getHex(), 80, 60, 2);
    rimB.position.set(11, 6, -6);
    scene.add(rimB);

    const topGlow = new THREE.PointLight(BRAND.getHex(), 60, 40, 2);
    topGlow.position.set(0, 18, 4);
    scene.add(topGlow);

    // ---- Rotating tower assembly ---------------------------------------
    const world = new THREE.Group();
    scene.add(world);

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: GLASS,
      metalness: 0.35,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.25,
      transparent: true,
      opacity: 0.9,
      emissive: new THREE.Color("#042018"),
      emissiveIntensity: 0.6,
    });

    const edgeMat = new THREE.LineBasicMaterial({
      color: BRAND,
      transparent: true,
      opacity: 0.85,
    });
    const edgeMatSoft = new THREE.LineBasicMaterial({
      color: EMERALD,
      transparent: true,
      opacity: 0.5,
    });

    /** Build a tapering tower of stacked slabs at a given position. */
    const buildTower = (
      group: THREE.Group,
      ox: number,
      oz: number,
      floors: number,
      baseW: number,
      floorH: number,
      soft = false
    ) => {
      let y = 0;
      for (let f = 0; f < floors; f++) {
        const t = f / floors;
        const w = baseW * (1 - t * 0.45);
        const d = baseW * (1 - t * 0.45);
        const geo = new THREE.BoxGeometry(w, floorH * 0.82, d);

        const slab = new THREE.Mesh(geo, glassMat);
        slab.position.set(ox, y + floorH / 2, oz);
        group.add(slab);

        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(geo),
          soft ? edgeMatSoft : edgeMat
        );
        edges.position.copy(slab.position);
        group.add(edges);

        y += floorH;
      }
      // crowning spire
      const spire = new THREE.Mesh(
        new THREE.ConeGeometry(baseW * 0.12, floorH * 2.4, 4),
        new THREE.MeshStandardMaterial({
          color: BRAND,
          emissive: BRAND,
          emissiveIntensity: 1.4,
          metalness: 0.5,
          roughness: 0.3,
        })
      );
      spire.position.set(ox, y + floorH * 1.2, oz);
      spire.rotation.y = Math.PI / 4;
      group.add(spire);
      return y;
    };

    const towerGroup = new THREE.Group();
    const topY = buildTower(towerGroup, 0, 0, 18, 5, 0.62);
    buildTower(towerGroup, -7.5, -3, 10, 3.2, 0.6, true);
    buildTower(towerGroup, 7, -4.5, 12, 2.8, 0.58, true);
    buildTower(towerGroup, -4.5, 6, 7, 2.4, 0.56, true);
    // centre the assembly vertically in view
    towerGroup.position.y = -topY * 0.42;
    world.add(towerGroup);

    // Reflective ground plane to catch the brand glow
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(120, 120),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#100e0a"),
        metalness: 0.85,
        roughness: 0.45,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -topY * 0.42 - 0.02;
    world.add(floor);

    // ---- Orbiting / drifting particles ---------------------------------
    const pCount = 260;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let p = 0; p < pCount; p++) {
      const ring = 6 + Math.random() * 16;
      const ang = Math.random() * Math.PI * 2;
      pPos[p * 3] = Math.cos(ang) * ring;
      pPos[p * 3 + 1] = Math.random() * 20 - topY * 0.42;
      pPos[p * 3 + 2] = Math.sin(ang) * ring;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        color: EMERALD.getHex(),
        size: 0.08,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(particles);

    // ---- Interaction: pointer parallax + scroll-coupled spin -----------
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const r = mount.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let scrollSpin = 0;
    const onScroll = () => {
      const r = mount.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress of the section through the viewport: -1 .. 1
      const progress = (vh / 2 - (r.top + r.height / 2)) / (vh / 2 + r.height / 2);
      scrollSpin = progress * Math.PI * 0.6;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const clock = new THREE.Clock();
    let raf = 0;
    let running = true;
    let spin = 0;

    const renderFrame = () => {
      const t = clock.getElapsedTime();

      if (!prefersReduced) {
        spin += 0.0016;
        particles.rotation.y = t * 0.05;
        const pp = pGeo.attributes.position as THREE.BufferAttribute;
        for (let p = 0; p < pCount; p++) {
          let y = pp.getY(p) + 0.01;
          if (y > 20 - topY * 0.42) y = -topY * 0.42;
          pp.setY(p, y);
        }
        pp.needsUpdate = true;
      }

      // pointer parallax (smooth)
      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;

      world.rotation.y = spin + scrollSpin + pointer.x * 0.4;
      world.rotation.x = pointer.y * 0.08;

      camera.position.x = pointer.x * 2.2;
      camera.position.y = 7 - pointer.y * 1.4;
      camera.lookAt(0, 5 + towerGroup.position.y * 0.3, 0);

      renderer.render(scene, camera);
    };

    const animate = () => {
      if (!running) return;
      renderFrame();
      raf = requestAnimationFrame(animate);
    };

    if (prefersReduced) {
      renderFrame();
    } else {
      animate();
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!prefersReduced) {
        running = true;
        clock.getDelta();
        animate();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!running && !prefersReduced && !document.hidden) {
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
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);

      world.traverse((obj) => {
        const anyObj = obj as THREE.Mesh | THREE.LineSegments;
        if ((anyObj as THREE.Mesh).geometry) (anyObj as THREE.Mesh).geometry.dispose();
      });
      glassMat.dispose();
      edgeMat.dispose();
      edgeMatSoft.dispose();
      pGeo.dispose();
      (particles.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
