import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact TBPM | Request a Proposal",
  description:
    "Tell us about your building. We'll respond within one business day with a tailored proposal — or call (02) 7240 1700 if it's urgent.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Tell us about your building."
        subtitle="We'll respond within one business day with a tailored proposal — or call the number below if it's urgent."
        image="/images/office-building.jpg"
      />

      <section className="py-16 sm:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_22rem]">
          <div>
            <span className="section-label">Request a proposal</span>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Request a Proposal
            </h2>
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
              <h3 className="text-lg font-extrabold">After-Hours Emergencies</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                24/7 support for existing buildings covering water, fire, security and lift
                entrapment issues.
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
