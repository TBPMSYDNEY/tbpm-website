import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "About TBPM | Sydney Strata Building Management Specialists",
  description:
    "TBPM combines professional building management with real construction expertise. Founded by two directors with 30+ years combined experience across Sydney strata buildings.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About TBPM"
        subtitle="Professional building management, backed by real construction expertise."
        image="/images/construction-workers.jpg"
      />

      {/* Our story */}
      <section className="py-16 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-label">Our Story</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Built to protect strata assets for the long term.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-mute">
              TBPM was founded to combine professional building management with the construction
              expertise that protects strata assets long-term. We specialise in residential,
              commercial and mixed-use strata buildings, and work with property developers from
              settlement through the defect liability period.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-mute">
              The firm was established by two professionals who bring together complementary
              strengths: hands-on building operations expertise, and deep building construction
              knowledge. The result is a management partner that doesn&rsquo;t just log issues —
              it understands what causes them and what fixing them should cost.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/sydney-skyline.png"
              alt="Sydney city skyline"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 36rem, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container-site">
          <span className="section-label">Leadership</span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Founders</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Ajit */}
            <div className="overflow-hidden rounded-3xl border border-ink/5 bg-white">
              <div className="grid sm:grid-cols-[14rem_1fr]">
                <div className="relative aspect-[3/4] sm:aspect-auto">
                  <Image
                    src="/images/Ajit-.png"
                    alt="Ajit Shrestha — Director, Building Operations"
                    fill
                    className="object-cover object-top"
                    sizes="14rem"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-extrabold">Ajit Shrestha</h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wider text-brand">
                    Director, Building Operations
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-mute">
                    10+ years managing residential and mixed-use strata buildings across Sydney.
                    Ajit leads building operations — contractor coordination, preventive
                    maintenance, compliance reporting and resident management — and is the primary
                    contact for strata committees and managing agents.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                    Focus areas: service delivery, manager performance, contractor oversight, AFSS
                    and WHS compliance, and monthly reporting.
                  </p>
                </div>
              </div>
            </div>

            {/* Steven */}
            <div className="overflow-hidden rounded-3xl border border-ink/5 bg-white">
              <div className="grid sm:grid-cols-[14rem_1fr]">
                <div className="relative aspect-[3/4] sm:aspect-auto">
                  <Image
                    src="/images/Untitled-design-1.png"
                    alt="Steven — Director, Construction & Project Management"
                    fill
                    className="object-cover object-top"
                    sizes="14rem"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-extrabold">Steven</h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wider text-brand">
                    Director, Construction &amp; Project Management
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-mute">
                    20+ years as a specialist builder focused on residential developments and
                    remedial works across Sydney. Steven&rsquo;s expertise covers new construction,
                    defect rectification, façade and waterproofing repairs, concrete remediation
                    and capital works planning.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                    NSW Licensed Builder and NSW BP registration. Steven leads construction and
                    project management — scope reviews, contractor vetting and remedial project
                    supervision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / commitment */}
      <section className="py-16 sm:py-24">
        <div className="container-site grid gap-10 text-center sm:grid-cols-3">
          <div>
            <p className="text-5xl font-extrabold text-brand">30+</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink-mute">
              Years combined experience
            </p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-brand">24/7</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink-mute">
              Emergency support
            </p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-brand">100%</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink-mute">
              Sydney-based team
            </p>
          </div>
        </div>
        <div className="container-site mt-14 text-center">
          <Link href="/services" className="btn-primary">
            Explore Our Services
          </Link>
        </div>
      </section>

      <Cta />
    </>
  );
}
