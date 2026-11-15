"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-mute/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

const roles = [
  "Strata Committee",
  "Strata Manager",
  "Owners Corp Member",
  "Property Developer",
  "Resident",
  "Other",
];

const lotOptions = ["1–25", "26–50", "51–100", "100+", "Not yet built"];

const enquiryTypes = [
  "Full-Time On-Site Building Management",
  "Part-Time / Hybrid Building Management",
  "Cleaning Services",
  "Gardening Services",
  "Concierge Services",
  "Project Management",
  "Other",
];

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "2a33db22-26b6-4214-a03e-d43b5bd0ac8d";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Optional follow-up asked after the enquiry is sent, so it never stands
  // between a visitor and submitting the form.
  const [enquirer, setEnquirer] = useState("");
  const [sourceState, setSourceState] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSource(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const source = `${new FormData(e.currentTarget).get("source") || ""}`.trim();
    if (!source) return;
    setSourceState("sending");
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Referral source — ${enquirer}`,
          from_name: enquirer,
          message: `How ${enquirer} heard about us: ${source}`,
        }),
      });
    } catch {
      /* optional detail — never show an error for it */
    }
    setSourceState("sent");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const data = new FormData(e.currentTarget);
    const message = [
      `Name: ${data.get("name")}`,
      `Role: ${data.get("role") || "Not provided"}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Building: ${data.get("building")}`,
      `Number of lots: ${data.get("lots")}`,
      `Enquiry type: ${data.get("enquiry")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Proposal request — ${data.get("building") || data.get("name")}`,
      from_name: `${data.get("name")}`,
      replyto: `${data.get("email")}`,
      botcheck: data.get("botcheck") ? true : false,
      message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result.success) {
        setEnquirer(`${data.get("building") || data.get("name")}`);
        setSubmitted(true);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("We couldn't send your message. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-brand/30 bg-brand-light p-10 text-center">
        <h3 className="text-xl font-extrabold">Thanks — your message has been sent.</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-mute">
          We&rsquo;ve received your enquiry and will reply within one business day to arrange a
          time to assess your building. Your proposal follows the assessment. You can also reach
          us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand-text">
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </p>
        {sourceState === "sent" ? (
          <p className="mt-6 text-sm font-semibold text-ink" role="status">
            Thanks — noted.
          </p>
        ) : (
          <form onSubmit={handleSource} className="mx-auto mt-8 max-w-md text-left">
            <label htmlFor="source" className="mb-1.5 block text-sm font-semibold">
              One optional question: how did you hear about us?
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input id="source" name="source" className={inputCls} placeholder="Google, referral, …" />
              <button
                type="submit"
                disabled={sourceState === "sending"}
                className="btn-secondary flex-none disabled:opacity-60"
              >
                {sourceState === "sending" ? "Sending…" : "Send"}
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
          Name *
        </label>
        <input id="name" name="name" required className={inputCls} placeholder="Your full name" />
      </div>
      <div>
        <label htmlFor="role" className="mb-1.5 block text-sm font-semibold">
          Your role <span className="font-normal text-ink-mute">(optional)</span>
        </label>
        <select id="role" name="role" className={inputCls} defaultValue="">
          <option value="">Select your role</option>
          {roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputCls}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={inputCls} placeholder="04xx xxx xxx" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="building" className="mb-1.5 block text-sm font-semibold">
          Building name / address
        </label>
        <input
          id="building"
          name="building"
          className={inputCls}
          placeholder="e.g. 12 Example St, Parramatta"
        />
      </div>
      <div>
        <label htmlFor="lots" className="mb-1.5 block text-sm font-semibold">
          Number of lots
        </label>
        <select id="lots" name="lots" className={inputCls} defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {lotOptions.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="enquiry" className="mb-1.5 block text-sm font-semibold">
          Type of enquiry
        </label>
        <select id="enquiry" name="enquiry" className={inputCls} defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {enquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputCls}
          placeholder="Tell us about your building and what you need."
        />
      </div>
      {error && (
        <div className="sm:col-span-2">
          <p className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error} You can also email us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      )}
      <div className="sm:col-span-2">
        <p id="collection-notice" className="rounded-xl bg-surface-mid px-4 py-3 text-xs leading-relaxed text-ink-mute">
          <strong className="text-ink">How we use this information:</strong> {site.legalName}{" "}
          collects the details above to respond to your enquiry and prepare an assessment or
          proposal. The form is sent to us through Web3Forms, a third-party form-processing
          service, and the site uses Google Analytics; both may process information outside
          Australia. To ask about, correct or delete your information, email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand-text underline">
            {site.email}
          </a>
          . Full details are in our{" "}
          <Link href="/privacy" className="font-semibold text-brand-text underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          aria-describedby="collection-notice"
          className="btn-primary w-full disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Sending…" : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
}
