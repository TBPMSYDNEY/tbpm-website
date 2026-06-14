import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { services, whyChoose, testimonial, site } from "@/data/site";
import Cta from "@/components/Cta";
import HomePopup from "@/components/HomePopup";
import Hero3D from "@/components/Hero3D";
import Reveal from "@/components/Reveal";
import Stat from "@/components/Stat";

export const metadata: Metadata = {
  title: "Building Management Sydney | TBPM — Total Building & Property Management",
  description:
    "Sydney's trusted partner for building management, cleaning, gardening, concierge services and project management. We protect property assets and enhance resident satisfaction.",
};

const serviceTeasers: Record<string, { blurb: string; fit?: string }> = {
  "on-site-building-management": {
    blurb: "A dedicated manager on-site 5 days a week, with 24/7 emergency support.",
    fit: "Typical fit: 100+ lot residential and mixed-use buildings",
  },
  "remote-building-management": {
    blurb: "A structured weekly roster (8–20 hours) with remote office backup.",
    fit: "Typical fit: 30–100 lot buildings with active committees",
  },
  "concierge-services": {
    blurb: "Professional front-of-house presence and parcel management.",
    fit: "Standalone, or integrated with full-time management",
  },
  "cleaning-services": {
    blurb: "Programs up to 7 days a week for common areas, waste rooms and fire stairs.",
  },
  "gardening-services": {
    blurb: "Lawns, hedges, irrigation and horticultural advisory, year-round.",
  },
  "project-management": {
    blurb: "Capital works coordination and defect rectification management.",
  },
};

const valueProps = [
  {
    title: "Free Energy & Financial Audit",
    description:
      "We review your building's energy use and service contracts to find savings — included with every management engagement.",
  },
  {
    title: "Free Dedicated Building Website",
    description:
      "A professionally hosted website for your building, with domain and hosting included, for resident notices and information.",
  },
  {
    title: "8 Hours Free Handyman Service",
    description:
      "Monthly minor maintenance on common property, included for 100+ lot buildings.",
  },
];

const trustPills = [
  "30+ years combined experience",
  "Fully insured & police-vetted",
  "Sydney-wide coverage",
];

export default function HomePage() {
  return (
    <>
      <HomePopup />

      {/* Hero with live 3D motion backdrop */}
      <section className="relative overflow-hidden bg-ink grain">
        <div className="absolute inset-0">
          <Hero3D />
        </div>
        {/* legibility + depth overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

        <div className="container-site relative flex min-h-[40rem] flex-col justify-center py-28">
          <span className="animate-fade-up inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Total Building &amp; Property Management
          </span>
          <h1
            className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white animate-fade-up sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Managed with Care.
            <br />
            <span className="text-gradient-brand">Maintained with Pride.</span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            {site.tagline}
          </p>
          <div
            className="mt-9 flex flex-col gap-4 animate-fade-up sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/contact" className="btn-primary">
              Request a Proposal
            </Link>
            <Link href="/services" className="btn-ghost-light">
              Explore Our Services
            </Link>
          </div>

          <div
            className="mt-12 flex flex-wrap gap-x-6 gap-y-3 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {trustPills.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70"
              >
                <svg
                  className="h-4 w-4 text-brand"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4l3.3 3.29 6.8-6.8a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center sm:flex">
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
            <span className="h-2 w-1 animate-float rounded-full bg-white/70" />
          </span>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative overflow-hidden bg-surface-sand">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
        <div className="container-site relative grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
          <Stat value={30} suffix="+" label="Years combined experience" />
          <Stat staticValue="24/7" label="Emergency response" />
          <Stat value={6} label="Specialist service lines" />
          <Stat value={100} suffix="%" label="Insured & vetted staff" />
        </div>
      </section>

      {/* About strip */}
      <section className="py-16 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_40px_80px_-40px_rgba(15,23,42,0.4)]">
            <Image
              src="/images/three-construction-workers-sitting-on-concrete-at-construction-site-discussing-building-plans.jpg"
              alt="TBPM team reviewing building plans on site"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 36rem, 100vw"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="section-label">About TBPM</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your Building. Our Commitment.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-mute">
              TBPM is a Sydney-based building management company founded by professionals with more
              than 30 years of combined experience in building management and construction. We
              service residential, commercial and mixed-use strata properties — bringing real
              construction knowledge to the day-to-day care of your building.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-mute">
              That construction background matters: when defects appear or contractors quote, your
              committee gets advice from people who know what the work should actually cost.
            </p>
            <Link href="/about-us" className="btn-secondary mt-8">
              More About Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface-mid py-16 sm:py-24">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <span className="section-label">Our Services</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Tailored to your building. Scaled to your budget.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => {
              const teaser = serviceTeasers[s.slug];
              return (
                <Reveal key={s.slug} className="reveal-scale h-full" delay={(idx % 3) * 90}>
                  <Link
                    href={`/${s.slug}`}
                    className="card-premium group flex h-full flex-col overflow-hidden"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={s.cardImage}
                        alt={s.navLabel}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 transition group-hover:opacity-100" />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="text-lg font-bold transition group-hover:text-brand">
                        {s.navLabel}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-mute">
                        {teaser?.blurb}
                      </p>
                      {teaser?.fit && (
                        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink-mute/70">
                          {teaser.fit}
                        </p>
                      )}
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-text">
                        Learn more
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <span className="section-label">The TBPM Difference</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Choose TBPM?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} className="flex gap-5" delay={(i % 3) * 80}>
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-brand-light text-sm font-extrabold text-brand-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-surface-sage py-16 sm:py-20">
        <Reveal className="container-site max-w-3xl text-center">
          <span className="section-label justify-center">What Our Clients Say</span>
          <blockquote className="text-2xl font-semibold leading-snug tracking-tight text-ink">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-bold uppercase tracking-wider text-ink-mute">
            {testimonial.author} · {testimonial.location}
          </p>
        </Reveal>
      </section>

      {/* Value props */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <span className="section-label">Included with management engagements</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Make your management fee pay for itself.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} className="card-premium p-8" delay={(i % 3) * 90}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light">
                  <svg
                    className="h-6 w-6 text-brand"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
