"use client";

import { useEffect, useState } from "react";

/**
 * ScrollProgress — a slim brand-gradient bar fixed to the very top of the
 * viewport that tracks how far the page has been scrolled. Provides a subtle
 * sense of progress and polish. Uses transform (scaleX) for GPU-friendly
 * motion and respects prefers-reduced-motion by simply not animating width.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      const next = scrollable > 0 ? el.scrollTop / scrollable : 0;
      setProgress(next);
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand via-emerald-400 to-brand"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
