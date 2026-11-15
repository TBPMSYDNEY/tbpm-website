import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site, afterHours } from "@/data/site";
import { pageOpenGraph } from "@/data/seo";

const title = "Contact TBPM | Request a Site Assessment";
const description =
  "Tell us about your building. We'll reply within one business day to arrange a complimentary site assessment, with a tailored proposal to follow — or call (02) 7240 1700.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: pageOpenGraph({ path: "/contact", title, description }),
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Tell us about your building."
        subtitle="We'll reply within one business day to arrange a complimentary site assessment. Your tailored proposal follows the assessment."
        image="/images/office-building.jpg"
        imageAlt="Sydney office and residential building exterior"
      />

      <section className="py-16 sm:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_22rem]">
          <div>
            <span className="section-label">Enquire</span>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Request a Site Assessment
            </h2>
            <ol className="mt-5 grid gap-3 text-sm text-ink-mute sm:grid-cols-3">
              <li className="rounded-2xl bg-surface-mid p-4">
                <span className="block font-bold text-ink">1. We reply</span>
                Within one business day of your enquiry.
              </li>
              <li className="rounded-2xl bg-surface-mid p-4">
                <span className="block font-bold text-ink">2. We assess</span>
                A complimentary site visit at a time that suits your committee.
              </li>
              <li className="rounded-2xl bg-surface-mid p-4">
                <span className="block font-bold text-ink">3. We propose</span>
                A tailored proposal after the assessment — timing confirmed at the visit.
              </li>
            </ol>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-ink/5 bg-surface-sand p-8">
              <h3 className="text-lg font-extrabold">Contact Details</h3>
              <ul className="mt-5 space-y-4 text-sm text-ink-soft">
                <li>
                  <p className="font-semibold text-ink-mute">Email</p>
                  <a href={`mailto:${site.email}`} className="font-bold text-brand-text">
                    {site.email}
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-ink-mute">Phone</p>
                  <a href={site.phoneHref} className="font-bold text-brand-text">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-ink-mute">Hours</p>
                  <p>{site.hours}</p>
                </li>
                <li>
                  <p className="font-semibold text-ink-mute">Office</p>
                  <p>{site.address}</p>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-ink p-8 text-white">
              <h3 className="text-lg font-extrabold">{afterHours.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{afterHours.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{afterHours.detail}</p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-white">
                {afterHours.safety}
              </p>
              <a href={site.phoneHref} className="btn-primary mt-6 w-full">
                Call {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
