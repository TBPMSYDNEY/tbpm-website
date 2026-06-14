import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services — Comprehensive Building Management Solutions",
  description:
    "TBPM delivers a full suite of building management services: on-site and hybrid building management, cleaning, gardening, concierge and project management across Sydney.",
};

const blurbs: Record<string, string> = {
  "on-site-building-management":
    "Your building deserves a dedicated professional on the ground. TBPM places an experienced Building Manager at your property, responsible for the efficient day-to-day operation of your building and the satisfaction of its residents.",
  "remote-building-management":
    "Not every building requires a full-time on-site presence. Our part-time and hybrid service provides the same professional oversight, compliance management and contractor coordination — delivered through a structured model with scheduled site visits.",
  "concierge-services":
    "First impressions matter. TBPM's concierge teams provide a professional, welcoming presence in your building's lobby, enhancing the daily experience for residents, visitors and tenants alike.",
  "cleaning-services":
    "A clean building is a well-managed building. Our trained cleaning teams maintain consistently high standards throughout every common area, entrance and facility — tailored to your building's specific requirements.",
  "gardening-services":
    "Our gardening services keep all landscaped areas maintained to a high standard, improving the presentation, value and environmental quality of your property — with expert horticultural advice year-round.",
  "project-management":
    "With a co-founder bringing more than 20 years of specialist building and construction experience, TBPM manages defect rectifications, capital works and property upgrades from conception to completion.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle="TBPM delivers a full suite of building management services designed to maintain, protect and enhance your property. Whether you need a full-time on-site manager, a hybrid solution, or specialised cleaning and gardening services, we tailor our approach to your building and its community."
        image="/images/9d5725a8eb6e84ecabf7710a18b30484.jpg"
      />

      <section className="py-16 sm:py-24">
        <div className="container-site grid gap-8">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="grid items-center gap-8 overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-sm lg:grid-cols-2"
            >
              <div className={`relative aspect-[16/10] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={s.cardImage}
                  alt={s.navLabel}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 36rem, 100vw"
                />
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl font-extrabold tracking-tight">{s.navLabel}</h2>
                <p className="mt-4 leading-relaxed text-ink-mute">{blurbs[s.slug]}</p>
                <Link href={`/${s.slug}`} className="btn-secondary mt-7">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
