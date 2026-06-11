"use client";

import { useState } from "react";

export type AccordionItem = {
  title: string;
  body: string;
  links: { label: string; href: string }[];
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.title}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
            >
              <span className="text-base font-bold sm:text-lg">{item.title}</span>
              <span
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition ${
                  open ? "bg-brand text-white" : "bg-slate-100 text-ink"
                }`}
              >
                <svg
                  className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {open && (
              <div className="px-6 pb-6 sm:px-8">
                <p className="leading-relaxed text-ink-mute">{item.body}</p>
                {item.links.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {item.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-brand hover:underline"
                        >
                          {l.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
