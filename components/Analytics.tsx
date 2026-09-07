"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * Google Analytics 4, loaded lazily to protect mobile performance.
 *
 * The gtag bundle (~100 KiB) is not requested until the user first interacts
 * with the page (scroll, tap, key or pointer) or, as a fallback for passive
 * readers, after a short idle delay. This keeps GA off the critical path so it
 * no longer contributes to Total Blocking Time on first load.
 *
 * Renders nothing unless NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!id || load) return;

    const events: (keyof WindowEventMap)[] = [
      "scroll",
      "pointerdown",
      "keydown",
      "touchstart",
    ];

    let fired = false;
    const trigger = () => {
      if (fired) return;
      fired = true;
      cleanup();
      setLoad(true);
    };

    function cleanup() {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, trigger));
    }

    events.forEach((e) =>
      window.addEventListener(e, trigger, { once: true, passive: true })
    );
    // Fallback: still fire for users who never interact.
    const timer = setTimeout(trigger, 5000);

    return cleanup;
  }, [id, load]);

  if (!id || !load) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
