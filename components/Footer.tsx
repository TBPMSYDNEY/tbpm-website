import Link from "next/link";
import Image from "next/image";
import { site, services } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/services" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="TBPM logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-lg bg-white/95 object-contain p-1"
            />
            <span className="text-lg font-extrabold tracking-tight">TBPM</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Sydney&rsquo;s trusted partner for building management, cleaning, gardening, concierge
            and project management. Protecting strata assets and enhancing resident satisfaction.
          </p>
          <div className="mt-5 flex gap-3">
            <a aria-label="Facebook" href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z"/></svg>
            </a>
            <a aria-label="Instagram" href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 01-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 01-1.4-.9 3.8 3.8 0 01-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.9.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.3.8-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1.8.3 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.9-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.3-.8.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.9a2 2 0 00-.7-1.1 2 2 0 00-1.1-.7c-.4-.1-.8-.3-1.9-.3-1.3-.1-1.7-.1-4.8-.1zm0 3.1a5 5 0 110 9.9 5 5 0 010-9.9zm0 1.8a3.1 3.1 0 100 6.3 3.1 3.1 0 000-6.3zm6.4-2.1a1.2 1.2 0 11-2.3 0 1.2 1.2 0 012.3 0z"/></svg>
            </a>
            <a aria-label="LinkedIn" href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.4H3.5V9h3.6v11.4z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 transition hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.external.mybos} target="_blank" rel="noopener noreferrer" className="text-white/70 transition hover:text-brand">
                MYBOS Login
              </a>
            </li>
            <li>
              <a href={site.external.buildingLink} target="_blank" rel="noopener noreferrer" className="text-white/70 transition hover:text-brand">
                Building Link Login
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">Our Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-white/70 transition hover:text-brand">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-brand">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="transition hover:text-brand">
                {site.phone}
              </a>
            </li>
            <li>{site.location}</li>
            <li className="text-white/50">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName} · All rights reserved
          </p>
          <p>Sydney, NSW, Australia</p>
        </div>
      </div>
    </footer>
  );
}
