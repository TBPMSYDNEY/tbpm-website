import Link from "next/link";
import { site } from "@/data/site";

export default function Cta({
  heading = "Ready to elevate your building management?",
  text = "Book a free site assessment and we'll come back with a tailored proposal for your building — no cost, no obligation.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink">
      <div className="container-site flex flex-col items-center gap-8 py-20 text-center">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/70">{text}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Book Your Free Site Assessment
          </Link>
          <a href={site.phoneHref} className="btn-ghost-light">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
