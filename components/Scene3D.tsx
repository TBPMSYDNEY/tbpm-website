"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Heavy Three.js scenes are code-split into their own chunks and only fetched
// when actually rendered — never during SSR or the initial page load.
const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });
const Tower3D = dynamic(() => import("@/components/Tower3D"), { ssr: false });
const Hero3DLite = dynamic(() => import("@/components/Hero3DLite"), { ssr: false });

/**
 * Scene3D — gates the WebGL/Three.js backdrops behind a client-side check so
 * they never touch the critical rendering path.
 *
 *  - Skipped entirely on small screens (<= 768px) and when the user prefers
 *    reduced motion, so mobile devices never download or parse Three.js.
 *  - On desktop, mounting is deferred to browser idle time so it doesn't
 *    compete with hydration or LCP.
 *  - The parent sections all have a solid `bg-ink` fallback, so nothing shifts
 *    or flashes when the scene is absent.
 */
export default function Scene3D({
  kind,
  variant,
}: {
  kind: "hero" | "tower" | "lite";
  variant?: string;
}) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const desktop = window.matchMedia("(min-width: 769px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!desktop || reduce) return;

    const start = () => setEnabled(true);
    const win = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    if (typeof win.requestIdleCallback === "function") {
      win.requestIdleCallback(start, { timeout: 2500 });
    } else {
      const t = setTimeout(start, 1500);
      return () => clearTimeout(t);
    }
  }, []);

  if (!enabled) return null;
  if (kind === "tower") return <Tower3D />;
  if (kind === "lite") return <Hero3DLite variant={variant} />;
  return <Hero3D />;
}
