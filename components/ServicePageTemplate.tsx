import Link from "next/link";
import Image from "next/image";
import type { ServicePage } from "@/data/site";
import { services } from "@/data/site";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

function Check() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-none text-brand"
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
  );
}

export default function ServicePageTemplate({ service }: { service: ServicePage }) {
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero title={service.title} image={service.heroImage} />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            {service.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-mute">
                {p}
              </p>
            ))}
            <Link href="/contact" className="btn-primary !mt-8">
              Book Your Free Site Assessment
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={service.cardImage}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 36rem, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Onboarding package */}
      {service.onboarding && (
        <section className="bg-brand-light py-16 sm:py-20">
          <div className="container-site">
            <span className="section-label">Included at no cost</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your Free Onboarding Package
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {service.onboarding.map((o) => (
                <div key={o.title} className="rounded-3xl bg-white p-8 shadow-sm">
                  <h3 className="text-lg font-bold">{o.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mute">{o.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="pb-4">
          <div className="container-site grid grid-cols-2 gap-4 md:grid-cols-3">
            {service.gallery.map((img, i) => (
              <div
                key={img}
                className={`relative aspect-[3/2] overflow-hidden rounded-2xl ${
                  i === 0 && service.gallery!.length === 2 ? "md:col-span-2" : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`${service.title} — TBPM`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 24rem, 50vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* What's included */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <span className="section-label">Service inclusions</span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What&rsquo;s Included
          </h2>
          <ul className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-soft">
                <Check />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-site">
          <span className="section-label">Getting started</span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">How It Works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.process.map((step, i) => (
              <div key={step.title} className="rounded-3xl border border-ink/5 bg-white p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best suited + Why TBPM */}
      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <div>
            <span className="section-label">Is this right for your building?</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Best Suited For</h2>
            <ul className="mt-8 space-y-4">
              {service.bestSuited.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink-soft">
                  <Check />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="section-label">The TBPM difference</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Why TBPM?</h2>
            <div className="mt-8 space-y-6">
              {service.whyTbpm.map((w) => (
                <div key={w.title}>
                  <h3 className="font-bold">{w.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-mute">{w.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-site">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Other TBPM Services
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group overflow-hidden rounded-3xl border border-ink/5 bg-white transition hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.cardImage}
                    alt={s.navLabel}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(min-width: 768px) 24rem, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold transition group-hover:text-brand">{s.navLabel}</h3>
                  <span className="mt-2 inline-block text-sm font-semibold text-brand">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
