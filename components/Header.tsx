"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ease-premium ${
        scrolled
          ? "border-ink/10 bg-white/90 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div
        className={`container-site flex items-center justify-between gap-6 transition-all duration-300 ease-premium ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="TBPM — Total Building & Property Management"
            width={56}
            height={56}
            className={`object-contain transition-all duration-300 ease-premium ${
              scrolled ? "h-11 w-11" : "h-14 w-14"
            }`}
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-lg font-extrabold tracking-tight text-ink">TBPM</span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-ink-mute">
              Total Building & Property Management
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-semibold transition hover:text-brand ${
                    pathname.startsWith("/services") ||
                    item.children.some((c) => pathname === c.href)
                      ? "text-brand-text"
                      : "text-ink"
                  }`}
                >
                  {item.label}
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 ease-premium group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-ink/5 bg-white p-2 shadow-lift">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition hover:bg-brand-light hover:text-brand ${
                          pathname === child.href ? "text-brand-text" : "text-ink-soft"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold transition hover:text-brand ${
                  pathname === item.href ? "text-brand-text" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-bold text-ink transition hover:text-brand"
          >
            {site.phone}
          </a>
          <Link href="/contact" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink/5 bg-white lg:hidden">
          <div className="container-site flex flex-col gap-1 py-4">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold text-ink"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
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
                  </button>
                  {servicesOpen && (
                    <div className="ml-3 flex flex-col border-l border-ink/10 pl-3">
                      <Link
                        href={item.href}
                        className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft"
                        onClick={() => setOpen(false)}
                      >
                        All Services
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn-primary mt-3" onClick={() => setOpen(false)}>
              Get a Free Quote
            </Link>
            <a href={site.phoneHref} className="mt-2 px-3 text-center text-sm font-bold text-ink">
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
