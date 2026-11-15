import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";
import { pageOpenGraph } from "@/data/seo";

const title = "Privacy Policy";
const description =
  "How TBPM collects, uses and stores personal information from website enquiries, phone and email contact, and website analytics — and how to access or correct it.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: pageOpenGraph({ path: "/privacy", title: `${title} | TBPM`, description }),
};

const updated = "16 November 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Your Information"
        title="Privacy Policy"
        subtitle="What we collect when you contact us or use this website, who helps us process it, and how to reach us about it."
      />

      <section className="py-12 sm:py-16">
        <div className="container-site max-w-3xl">
          <p className="text-sm text-ink-mute">Last updated {updated}</p>

          <div className="guide-prose mt-8">
            <h2>Who we are</h2>
            <p>
              This website is operated by {site.legalName} (&ldquo;TBPM&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;), a building management company based in Sydney, NSW. This policy
              explains how we handle personal information collected through tbpm.com.au and when
              you contact us directly.
            </p>

            <h2>What we collect</h2>
            <ul>
              <li>
                <strong>Enquiry details you give us</strong> — your name, email address, phone
                number, your role (if you choose to tell us), the building name or address, number
                of lots, the type of service you are asking about, your message and, if you tell
                us, how you heard about us.
              </li>
              <li>
                <strong>Contact by phone or email</strong> — the details you provide when you call
                or email us, and our record of the conversation.
              </li>
              <li>
                <strong>Website usage information</strong> — pages visited, approximate location
                (city or region), device and browser type, and how you arrived at the site,
                collected through cookies and similar technology.
              </li>
            </ul>
            <p>
              Please don&rsquo;t include sensitive information (such as health details) or
              information about other people in the enquiry form unless it is needed for us to
              help you.
            </p>

            <h2>Why we collect it</h2>
            <p>We use your information to:</p>
            <ul>
              <li>respond to your enquiry and contact you about it;</li>
              <li>arrange a site assessment and prepare a proposal for your building;</li>
              <li>provide and manage our services if you engage us; and</li>
              <li>understand how the website is used so we can improve it.</li>
            </ul>
            <p>
              If you choose not to provide your name and a way to contact you, we won&rsquo;t be
              able to respond to an enquiry.
            </p>

            <h2>Service providers that process your information</h2>
            <p>We use third-party providers to run the website and handle enquiries:</p>
            <ul>
              <li>
                <strong>Web3Forms</strong> — when you submit the enquiry form, your browser sends
                the form contents to Web3Forms (api.web3forms.com), a form-processing service that
                forwards the submission to our email inbox.
              </li>
              <li>
                <strong>Google Analytics</strong> — we use Google Analytics 4 to measure website
                usage. It sets cookies and sends usage information to Google. You can block it
                with your browser&rsquo;s cookie settings or Google&rsquo;s{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                  Analytics opt-out browser add-on
                </a>
                ; the website works the same without it.
              </li>
              <li>
                <strong>Email and website hosting providers</strong> — enquiries are received and
                stored in our business email system, and the website is served by a hosting
                provider.
              </li>
            </ul>
            <p>
              These providers may store or process information on servers outside Australia. Their
              handling of information is also governed by their own privacy policies.
            </p>

            <h2>Who else we share it with</h2>
            <p>
              We don&rsquo;t sell personal information. We share it only where needed to respond
              to you or deliver our services — for example with our staff, with contractors
              involved in work at your building, or with your strata manager or committee where
              that is part of the engagement — or where the law requires it.
            </p>

            <h2>Storage and security</h2>
            <p>
              We keep enquiry information in our business email and records systems, with access
              limited to TBPM staff who need it. We keep it for as long as needed to deal with your
              enquiry and for our business and legal record-keeping, then delete or de-identify it.
            </p>

            <h2>Accessing or correcting your information</h2>
            <p>
              You can ask us what personal information we hold about you, ask for it to be
              corrected, or ask us to delete an enquiry you have sent. Contact us using the details
              below and we will respond within a reasonable time.
            </p>

            <h2>Questions and complaints</h2>
            <p>
              If you have a question or a concern about how we have handled your information,
              contact us first so we can try to resolve it:
            </p>
            <ul>
              <li>
                Email: <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                Phone: <a href={site.phoneHref}>{site.phone}</a> ({site.hours})
              </li>
              <li>Post: {site.legalName}, 39 Taunton Rd, Hurstville NSW 2220</li>
            </ul>
            <p>
              If you are not satisfied with our response, you can contact the Office of the
              Australian Information Commissioner at{" "}
              <a href="https://www.oaic.gov.au/privacy/privacy-complaints" target="_blank" rel="noopener noreferrer">
                oaic.gov.au
              </a>
              .
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The current version is always on this
              page, with the date it was last updated shown at the top.
            </p>
          </div>

          <p className="mt-10">
            <Link href="/contact" className="btn-secondary">
              Contact TBPM
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
