import Link from "next/link";

export type AccordionItem = {
  title: string;
  body: string;
  links: { label: string; href: string }[];
  /** Optional in-depth guide on this site that expands on the answer. */
  guide?: { label: string; href: string };
};

/**
 * Accordion — built on native <details>/<summary> so every answer is part of
 * the server-rendered HTML. Crawlers don't click, so content must never
 * depend on JavaScript to appear. The shared `name` makes the panels
 * mutually exclusive in modern browsers (one open at a time), with no JS.
 */
export default function Accordion({
  items,
  name = "accordion",
}: {
  items: AccordionItem[];
  name?: string;
}) {
  return (
    <div className="divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white">
      {items.map((item, i) => (
        <details key={item.title} name={name} open={i === 0} className="group">
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 [&::-webkit-details-marker]:hidden">
            <h3 className="text-base font-bold sm:text-lg">
              {item.title}
            </h3>
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-slate-100 text-ink transition group-open:bg-brand group-open:text-white">
              <svg
                className="h-4 w-4 transition-transform group-open:rotate-180"
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
          </summary>
          <div className="px-6 pb-6 sm:px-8">
            <p className="leading-relaxed text-ink-mute">{item.body}</p>
            {item.guide && (
              <Link
                href={item.guide.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-text hover:underline"
              >
                {item.guide.label} →
              </Link>
            )}
            {item.links.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-brand-text hover:underline"
                    >
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
