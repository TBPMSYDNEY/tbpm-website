import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import { pageOpenGraph } from "@/data/seo";

const title = "About TBPM | Sydney Strata Building Management Specialists";
const description =
  "TBPM combines professional building management with real construction expertise. Founded by two directors with 30+ years combined experience across Sydney strata buildings.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about-us",
  },
  openGraph: pageOpenGraph({ path: "/about-us", title, description }),
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About TBPM"
        subtitle="Professional building management, backed by real construction expertise."
        image="/images/tbpm-about-hero.jpg"
        imageAlt="TBPM building management team servicing a Sydney strata property"
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
      <section className="bg-surface-mid py-16 sm:py-24">
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
                  <p className="mt-1 text-sm font-bold uppercase tracking-wider text-brand-text">
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
                  <p className="mt-1 text-sm font-bold uppercase tracking-wider text-brand-text">
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

      {/* Related-party disclosure */}
      <section id="related-parties" className="scroll-mt-24 py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <span className="section-label">Transparency</span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Related parties and contractor quotes
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-mute">
            <a
              href="https://www.allbuildingservices.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-text underline"
            >
              ALL Building and Property Services
            </a>{" "}
            is a related party of TBPM. Because we also help Owners Corporations source and compare
            contractor quotes, we want committees to know exactly how that relationship is handled.
          </p>
          <ul className="mt-6 space-y-4 text-ink-mute">
            <li>
              <strong className="text-ink">Disclosure first.</strong> If a related party is invited
              to quote on work at a building we manage, we tell the committee about the
              relationship in writing before the quote is considered.
            </li>
            <li>
              <strong className="text-ink">Compared like for like.</strong> A related-party quote
              is presented alongside quotes from independent contractors against the same scope,
              so the committee can compare price and inclusions directly.
            </li>
            <li>
              <strong className="text-ink">The committee decides.</strong> The Owners Corporation
              or its Strata Committee chooses the contractor and approves the spend. TBPM does not
              award work to a related party on a building&rsquo;s behalf.
            </li>
            <li>
              <strong className="text-ink">You can say no.</strong> A committee can ask us not to
              seek related-party quotes at all, and we will source independent contractors only.
            </li>
          </ul>
        </div>
      </section>

      {/* Stats / commitment */}
      <section className="bg-surface-mid py-16 sm:py-24">
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
              After-hours emergency phone line
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
