// In-depth Knowledge Hub guides. Each guide has its own static route under
// app/knowledge/<slug>/page.tsx; this file holds the shared metadata used by
// those pages, the Knowledge Hub listing, service-page cross-links and the
// sitemap. Bump `reviewed` whenever a guide's content is re-checked.

export type Author = {
  name: string;
  role: string;
  bio: string;
  href: string;
};

export const authors = {
  ajit: {
    name: "Ajit Shrestha",
    role: "Director, Building Operations",
    bio: "Ajit has 10+ years managing residential and mixed-use strata buildings across Sydney, and leads TBPM's building operations — contractor coordination, preventive maintenance, AFSS and WHS compliance, and committee reporting.",
    href: "/about-us",
  },
} satisfies Record<string, Author>;

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  author: Author;
  published: string;
  reviewed: string;
  readingMinutes: number;
  /** Service page slugs this guide supports — used for reverse links. */
  services: string[];
};

export const guides: Guide[] = [
  {
    slug: "building-manager-vs-strata-manager-nsw",
    title: "Building Manager vs Strata Manager in NSW: Who Does What?",
    metaTitle: "Building Manager vs Strata Manager in NSW",
    description:
      "The difference between a building manager and a strata manager in NSW — who handles levies, meetings and records, who looks after the building, and how to tell which one your scheme is missing.",
    author: authors.ajit,
    published: "2026-09-29",
    reviewed: "2026-09-29",
    readingMinutes: 7,
    services: ["on-site-building-management", "remote-building-management"],
  },
  {
    slug: "full-time-vs-part-time-building-management",
    title: "Full-Time vs Part-Time Building Management: Which Does Your Building Need?",
    metaTitle: "Full-Time vs Part-Time Building Management",
    description:
      "How to choose between a full-time on-site building manager and a part-time or hybrid roster — comparing building size, amenities, resident contact and after-hours coverage.",
    author: authors.ajit,
    published: "2026-09-29",
    reviewed: "2026-09-29",
    readingMinutes: 8,
    services: ["on-site-building-management", "remote-building-management"],
  },
  {
    slug: "building-management-costs-sydney",
    title: "Building Management Costs in Sydney: What Drives the Price",
    metaTitle: "Building Management Costs in Sydney",
    description:
      "What actually drives the cost of building management for a Sydney strata building — hours on site, amenities, after-hours cover and scope — plus what should and shouldn't be included in a quote.",
    author: authors.ajit,
    published: "2026-09-29",
    reviewed: "2026-09-29",
    readingMinutes: 8,
    services: ["on-site-building-management", "remote-building-management"],
  },
  {
    slug: "changing-building-management-provider",
    title: "Changing Your Building Management Provider: A Step-by-Step Guide",
    metaTitle: "Changing Your Building Management Provider",
    description:
      "How a strata committee can change building management providers without losing records, keys or service continuity — from reviewing your current agreement to the first 90 days with a new manager.",
    author: authors.ajit,
    published: "2026-09-29",
    reviewed: "2026-09-29",
    readingMinutes: 8,
    services: ["on-site-building-management", "remote-building-management"],
  },
];

export function getGuide(slug: string): Guide {
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) throw new Error(`Unknown guide: ${slug}`);
  return guide;
}

export function guideHref(slug: string) {
  return `/knowledge/${slug}`;
}
