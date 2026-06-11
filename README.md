# TBPM Website — Next.js rebuild of tbpm.com.au

Rebuild of the WordPress site as a static Next.js 15 site, ready to deploy on Vercel.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about-us` | About Us (founders, story) |
| `/services` | Services overview |
| `/on-site-building-management` | Full-time on-site building management |
| `/remote-building-management` | Part-time / hybrid building management |
| `/cleaning-services` | Cleaning |
| `/gardening-services` | Gardening |
| `/concierge-services` | Concierge |
| `/project-management` | Project management |
| `/knowledge` | Strata Knowledge Hub (NSW strata FAQ) |
| `/contact` | Contact / Request a Proposal |

Service page URLs match the old WordPress URLs, so existing Google rankings and links carry over. `sitemap.xml` and `robots.txt` are generated automatically.

## Where to edit content

Nearly all copy lives in **`data/site.ts`**:

- `site` — phone, email, address, hours, tagline, social links, MYBOS/BuildingLink URLs
- `services` — the six service pages (titles, intro, what's included, process, etc.)
- `whyChoose` — the six differentiators on the home page
- `knowledgeItems` — the strata knowledge accordion articles
- `testimonial` — the home page quote

Images are in `public/images/`. Page layouts are in `app/`, shared components in `components/`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verifies everything compiles)
```

Requires Node 18.18+ (20+ recommended).

## Deploy to Vercel

1. Push this folder to a GitHub repository (e.g. `tbpm-website`).
2. Go to https://vercel.com → Add New Project → Import the repo. Vercel auto-detects Next.js — no settings needed. Deploy.
3. Test the `*.vercel.app` preview URL thoroughly.
4. Point the domain: in Vercel → Project → Settings → Domains, add `tbpm.com.au` and `www.tbpm.com.au`. At your DNS provider set:
   - `A` record for `tbpm.com.au` → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
5. **Keep the WordPress site and hosting live until DNS has switched and you've confirmed the new site is serving on tbpm.com.au.** Only then cancel the old hosting.
6. After cutover, submit `https://tbpm.com.au/sitemap.xml` in Google Search Console.

## Known gaps — fix before launch

- **Contact form sends via `mailto:`** (opens the visitor's email client). This is unreliable — many visitors won't have a mail client configured, and you get no record if they abandon it. Before launch, wire it to [Resend](https://resend.com), [Formspree](https://formspree.io), or a Vercel serverless function so submissions email you directly. The form is in `components/ContactForm.tsx`.
- **Social links are placeholders** — update the URLs in `data/site.ts` (`site.socials`).
- **Capability Statement PDF** from the old site was not migrated — add it to `public/` and link it if you still want it.
