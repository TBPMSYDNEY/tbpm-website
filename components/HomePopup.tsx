"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const offers = [
  {
    title: "Free Energy & Financial Audit",
    text: "We audit your building's energy use, service contracts and recurring costs to find savings — so your management fee partly pays for itself.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Free Dedicated Building Website",
    text: "A professional website on your building's own domain, hosting all notices, contacts and building information — set up and maintained by TBPM for the life of the agreement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M8 22h8M12 18v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "8 Hours Free Handyman Service — 100+ Lot Buildings",
    text: "Buildings with 100+ lots receive 8 hours of general experienced trade work on us — ideal for chasing defect liability items at handover or knocking over a backlog of ongoing maintenance jobs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("tbpm-popup-seen")) return;
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem("tbpm-popup-seen", "1");
    } catch {
      /* private browsing — ignore */
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="home-popup-heading"
      onClick={close}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-md border border-slate-300 p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-ink"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex justify-center">
          <Image src="/images/logo.png" alt="TBPM" width={88} height={88} className="h-20 w-20 object-contain" />
        </div>

        <h2 id="home-popup-heading" className="mt-4 text-center text-2xl font-bold text-ink sm:text-3xl">
          Make your management
          <br className="hidden sm:block" /> fee pay for itself.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-slate-600">
          Every new building that engages TBPM starts with a free Energy and Financial Audit.
        </p>

        <div className="mt-6 space-y-4">
          {offers.map((offer) => (
            <div key={offer.title} className="flex gap-4 rounded-xl bg-brand-light p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-brand">
                {offer.icon}
              </div>
              <div>
                <h3 className="font-bold text-ink">{offer.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{offer.text}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          onClick={close}
          className="mt-6 block w-full rounded-md bg-brand px-6 py-3.5 text-center font-semibold text-white transition hover:bg-brand-dark"
        >
          Request A Proposal
        </Link>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-slate-500">
          <span>tbpm.com.au</span>
          <a href={site.phoneHref} className="hover:text-brand">
            {site.phone}
          </a>
          <span>Managed with Care. Maintained with Pride.</span>
        </div>
      </div>
    </div>
  );
}
