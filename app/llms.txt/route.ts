import { services, site } from "@/data/site";
import { guides, guideHref } from "@/data/guides";

// llms.txt (https://llmstxt.org) — a plain-Markdown map of the site for AI
// assistants and answer engines. Built from the same data as the pages, so
// new services and guides appear here automatically.
export const dynamic = "force-static";

const base = "https://tbpm.com.au";

export function GET() {
  const body = `# ${site.legalName} (${site.name})

> Sydney building management company for residential, commercial and mixed-use strata properties: full-time on-site and part-time/hybrid building management, strata cleaning, gardening, concierge and project management. Founded by directors with 30+ years combined experience in building management and construction.

- Phone: ${site.phone}
- Email: ${site.email}
- Address: ${site.address}
- Service area: Sydney metropolitan area, NSW, Australia
- Hours: ${site.hours}

## Services

${services.map((s) => `- [${s.navLabel}](${base}/${s.slug}): ${s.metaDescription}`).join("\n")}

## Guides

${guides.map((g) => `- [${g.title}](${base}${guideHref(g.slug)}): ${g.description}`).join("\n")}
- [Strata Knowledge Hub](${base}/knowledge): Plain-English answers on NSW strata — Owners Corporations, levies, fire safety (AFSS), building defects, cladding, WHS, by-laws and building vs strata managers.

## Company

- [About TBPM](${base}/about-us): Company background and founders.
- [All services](${base}/services): Overview of every TBPM service.
- [Contact and proposal requests](${base}/contact): Request a free site assessment and proposal.
- [Capability Statement 2026 (PDF)](${base}/docs/TBPM-Capability-Statement-2026.pdf): Company capability statement.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
