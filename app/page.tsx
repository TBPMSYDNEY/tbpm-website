import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { services, whyChoose, testimonial, site } from "@/data/site";
import Cta from "@/components/Cta";
import HomePopup from "@/components/HomePopup";

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

export default function HomePage() {
  return (
    <>
      <HomePopup />
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="/images/9d5725a8eb6e84ecabf7710a18b30484.jpg"
          alt="Sydney residential apartment building managed by TBPM"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="container-site relative flex min-h-[34rem] flex-col justify-center py-24">
          <span className="section-label">Total Building &amp; Property Management</span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Managed with Care.
            <br />
            <span className="text-brand">Maintained with Pride.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{site.tagline}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Request a Proposal
            </Link>
            <Link href="/services" className="btn-ghost-light">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-16 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/three-construction-workers-sitting-on-concrete-at-construction-site-discussing-building-plans.jpg"
              alt="TBPM team reviewing building plans on site"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 36rem, 100vw"
            />
          </div>
          <div>
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
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="section-label">Our Services</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Tailored to your building. Scaled to your budget.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const teaser = serviceTeasers[s.slug];
              return (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={s.cardImage}
                      alt={s.navLabel}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 100vw"
                    />
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
                    <span className="mt-4 text-sm font-semibold text-brand">Learn more →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="section-label">The TBPM Difference</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Choose TBPM?
            </h2>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => (
              <div key={w.title} className="flex gap-5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-brand-light text-sm font-extrabold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-brand-light py-16 sm:py-20">
        <div className="container-site max-w-3xl text-center">
          <span className="section-label">What Our Clients Say</span>
          <blockquote className="text-2xl font-semibold leading-snug tracking-tight text-ink">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-bold uppercase tracking-wider text-ink-mute">
            {testimonial.author} · {testimonial.location}
          </p>
        </div>
      </section>

      {/* Value props */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="section-label">Included with management engagements</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Make your management fee pay for itself.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valueProps.map((v) => (
              <div key={v.title} className="rounded-3xl border border-ink/5 bg-white p-8 shadow-sm">
                <svg className="h-8 w-8 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
