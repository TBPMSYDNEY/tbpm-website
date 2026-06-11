"use client";

import { useState } from "react";
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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Role: ${data.get("role")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Building: ${data.get("building")}`,
      `Number of lots: ${data.get("lots")}`,
      `Enquiry type: ${data.get("enquiry")}`,
      `How they heard about us: ${data.get("source")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    const subject = encodeURIComponent(`Proposal request — ${data.get("building") || data.get("name")}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(lines)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-brand/30 bg-brand-light p-10 text-center">
        <h3 className="text-xl font-extrabold">Thanks — your email client should now be open.</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-mute">
          If it didn&rsquo;t open, email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand">
            {site.email}
          </a>{" "}
          or call {site.phone}. We&rsquo;ll respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
          Name *
        </label>
        <input id="name" name="name" required className={inputCls} placeholder="Your full name" />
      </div>
      <div>
        <label htmlFor="role" className="mb-1.5 block text-sm font-semibold">
          Role *
        </label>
        <select id="role" name="role" required className={inputCls} defaultValue="">
          <option value="" disabled>
            Select your role
          </option>
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
      <div className="sm:col-span-2">
        <label htmlFor="source" className="mb-1.5 block text-sm font-semibold">
          How did you hear about us?
        </label>
        <input id="source" name="source" className={inputCls} placeholder="Google, referral, …" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Request a Proposal
        </button>
      </div>
    </form>
  );
}
