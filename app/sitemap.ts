import type { MetadataRoute } from "next";
import { services } from "@/data/site";
import { guides, guideHref } from "@/data/guides";

const base = "https://tbpm.com.au";

// Bump when page content materially changes so crawlers can prioritise
// genuinely updated pages instead of seeing every URL as freshly modified.
const lastModified = new Date("2026-09-29");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about-us", "/services", "/knowledge", "/contact"];
  return [
    ...staticPages.map((p) => ({
      url: `${base}${p}`,
      lastModified,
      priority: p === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/${s.slug}`,
      lastModified,
      priority: 0.7,
    })),
    ...guides.map((g) => ({
      url: `${base}${guideHref(g.slug)}`,
      lastModified: new Date(g.reviewed),
      priority: 0.6,
    })),
  ];
}
