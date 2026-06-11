import type { MetadataRoute } from "next";
import { services } from "@/data/site";

const base = "https://tbpm.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about-us", "/services", "/knowledge", "/contact"];
  return [
    ...staticPages.map((p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
      priority: p === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/${s.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
  ];
}
