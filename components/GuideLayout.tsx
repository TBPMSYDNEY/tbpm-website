import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { guides, guideHref, type Guide } from "@/data/guides";
import { services } from "@/data/site";

const base = "https://tbpm.com.au";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00+10:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });
}

export function guideMetadata(guide: Guide): Metadata {
  const url = `${base}${guideHref(guide.slug)}`;
  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical: guideHref(guide.slug) },
    authors: [{ name: guide.author.name, url: `${base}${guide.author.href}` }],
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url,
      publishedTime: guide.published,
      modifiedTime: guide.reviewed,
      authors: [guide.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

/** Inline "example" callout for illustrative scenarios within a guide. */
export function Example({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="guide-example">
      <p className="guide-example-label">Illustrative example</p>
      <p className="guide-example-title">{title}</p>
      {children}
    </aside>
  );
}

export default function GuideLayout({
  guide,
  children,
}: {
  guide: Guide;
  children: ReactNode;
}) {
  const url = `${base}${guideHref(guide.slug)}`;
  const relatedServices = services.filter((s) => guide.services.includes(s.slug));
  const relatedGuides = guides.filter((g) => g.slug !== guide.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url,
    mainEntityOfPage: url,
    datePublished: guide.published,
    dateModified: guide.reviewed,
    inLanguage: "en-AU",
    author: {
      "@type": "Person",
      name: guide.author.name,
      jobTitle: guide.author.role,
      url: `${base}${guide.author.href}`,
      worksFor: { "@id": `${base}/#organization` },
    },
    publisher: { "@id": `${base}/#organization` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Knowledge Hub", item: `${base}/knowledge` },
      { "@type": "ListItem", position: 3, name: guide.metaTitle, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero eyebrow="Strata Guide" title={guide.title} subtitle={guide.description} variant={guide.slug} />

      <article className="py-12 sm:py-16">
        <div className="container-site max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-mute">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-text">Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/knowledge" className="hover:text-brand-text">Knowledge Hub</Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="font-semibold text-ink">{guide.metaTitle}</li>
            </ol>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink/10 py-4 text-sm text-ink-mute">
            <span>
              By{" "}
              <Link href={guide.author.href} className="font-semibold text-ink hover:text-brand-text">
                {guide.author.name}
              </Link>
              , {guide.author.role}
            </span>
            <span>
              Last reviewed <time dateTime={guide.reviewed}>{formatDate(guide.reviewed)}</time>
            </span>
            <span>{guide.readingMinutes} min read</span>
          </div>

          <div className="guide-prose mt-10">{children}</div>

          <p className="mt-12 rounded-2xl bg-surface-mid p-5 text-sm leading-relaxed text-ink-mute">
            General information only, current as at the review date above. It is not legal advice.
            For specific matters, contact NSW Fair Trading or a qualified strata lawyer.
          </p>

          <div className="mt-10 flex gap-5 rounded-3xl border border-ink/10 bg-white p-6 sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text">About the author</p>
              <p className="mt-2 font-bold">
                {guide.author.name} — {guide.author.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-mute">{guide.author.bio}</p>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-surface-mid py-14 sm:py-16">
        <div className="container-site max-w-5xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Related TBPM services</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {relatedServices.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="card-premium group block p-7">
                <h3 className="font-bold transition group-hover:text-brand">{s.navLabel}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{s.metaDescription}</p>
                <span className="mt-3 inline-flex text-sm font-semibold text-brand-text">Learn more →</span>
              </Link>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-extrabold tracking-tight sm:text-3xl">More strata guides</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedGuides.map((g) => (
              <li key={g.slug}>
                <Link href={guideHref(g.slug)} className="card-premium group block h-full p-6">
                  <span className="font-bold transition group-hover:text-brand">{g.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Cta
        heading="Want advice for your building?"
        text="Book a free site assessment. We'll walk the building with your committee and come back with a proposal sized to what your building actually needs."
      />
    </>
  );
}
