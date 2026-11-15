import type { Metadata } from "next";

export const baseUrl = "https://tbpm.com.au";

type OpenGraph = NonNullable<Metadata["openGraph"]>;

/**
 * Open Graph block for a page. Next.js replaces (does not merge) the parent
 * layout's `openGraph` when a page sets its own, so every page must restate
 * the shared fields — otherwise og:url silently falls back to the homepage.
 */
export function pageOpenGraph({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): OpenGraph {
  return {
    siteName: "TBPM — Total Building & Property Management",
    locale: "en_AU",
    type: "website",
    url: `${baseUrl}${path}`,
    title,
    description,
    images: [
      {
        url: "/images/tbpm-building-manager-hero.jpg",
        width: 1456,
        height: 816,
        alt: "TBPM — Total Building & Property Management, Sydney",
      },
    ],
  };
}
