import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import Cta from "@/components/Cta";
import { knowledgeItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Strata Knowledge & Resources | Sydney Buildings",
  description:
    "Plain-English guides to strata living in NSW — Owners Corporations, levies, fire safety, building defects, WHS, by-laws and the difference between building and strata managers.",
};

export default function KnowledgePage() {
  return (
    <>
      <PageHero
        eyebrow="Strata Insights"
        title="Strata Knowledge Hub"
        subtitle="Plain-English answers to the questions strata committees and owners ask us most — grounded in NSW legislation and day-to-day practice."
        image="/images/BG3.png"
      />

      <section className="py-16 sm:py-24">
        <div className="container-site max-w-4xl">
          <p className="mb-12 text-lg leading-relaxed text-ink-mute">
            Strata living comes with a lot of obligations — and a lot of confusing terminology.
            This Knowledge Hub brings together plain-English explanations of the topics that matter
            most to strata committees and owners in NSW, alongside links to the official government
            resources where you can confirm the detail.
          </p>
          <Accordion items={knowledgeItems} />
          <p className="mt-8 text-sm leading-relaxed text-ink-mute">
            This information is general in nature and is intended to help you ask better questions
            and understand your building's responsibilities — it is not legal advice. For specific
            matters, seek advice from a qualified professional or contact NSW Fair Trading.
          </p>
        </div>
      </section>

      <Cta
        heading="Still Have a Question?"
        text="If this page hasn't answered your question, the TBPM team is happy to help — whether you're a committee member weighing up your options or an owner trying to understand your building."
      />
    </>
  );
}
