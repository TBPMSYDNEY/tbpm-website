"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Stat — an animated count-up figure that triggers when scrolled into view.
 * Supports a numeric target with optional prefix/suffix, or a static label
 * (e.g. "24/7") via the `staticValue` prop.
 */
export default function Stat({
  value,
  suffix = "",
  prefix = "",
  label,
  staticValue,
  duration = 1600,
}: {
  value?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  staticValue?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (value === undefined) return;
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          io.disconnect();
          if (prefersReduced) {
            setDisplay(value);
            return;
          }
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration, started]);

  return (
    <div ref={ref}>
      <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {staticValue ?? `${prefix}${display.toLocaleString()}${suffix}`}
      </div>
      <div className="mt-2 text-sm font-medium text-white/60">{label}</div>
    </div>
  );
}
