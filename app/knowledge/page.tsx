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
        title="Strata Knowledge Hub"
        subtitle="Plain-English answers to the questions strata committees and owners ask us most — grounded in NSW legislation and day-to-day practice."
        image="/images/BG3.png"
      />

      <section className="py-16 sm:py-24">
        <div className="container-site max-w-4xl">
          <Accordion items={knowledgeItems} />
          <p className="mt-8 text-sm leading-relaxed text-ink-mute">
            This information is general in nature and reflects NSW strata legislation as at the
            time of writing. It is not legal advice — for specific matters, seek advice from a
            qualified professional or contact NSW Fair Trading.
          </p>
        </div>
      </section>

      <Cta
        heading="Have a question about your building?"
        text="Talk to a team that manages these issues every day. We'll give you a straight answer."
      />
    </>
  );
}
