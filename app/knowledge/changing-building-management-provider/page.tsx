import Link from "next/link";
import GuideLayout, { Example, guideMetadata } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const guide = getGuide("changing-building-management-provider");

export const metadata = guideMetadata(guide);

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        Most committees that want to change building managers put it off for the same reason: they
        worry that keys, records and contractor arrangements will get lost in the gap between the
        old provider and the new one. That risk is real, but it’s manageable if the handover is
        planned. This guide sets out the steps in order.
      </p>

      <h2>Step 1: Read your current agreement</h2>
      <p>Before anything else, find the current building management agreement and check:</p>
      <ul>
        <li>The start date, term and expiry date</li>
        <li>The notice period and how notice must be given</li>
        <li>Any termination conditions or fees</li>
        <li>What the outgoing provider must hand over at the end of the agreement</li>
        <li>Who owns records, data and building software accounts</li>
      </ul>
      <p>
        If the agreement is unclear, or you’re considering ending it before expiry, get advice
        before acting. Your strata manager can help, and a strata lawyer can advise on specific
        terms.
      </p>

      <h2>Step 2: Decide what you need</h2>
      <p>
        Changing providers is a chance to fix whatever wasn’t working. Write down the problems with
        the current arrangement and what the building actually needs: hours on site, response
        times, reporting, and any extra services such as cleaning or concierge. Our guides to{" "}
        <Link href="/knowledge/full-time-vs-part-time-building-management">
          choosing the right level of cover
        </Link>{" "}
        and <Link href="/knowledge/building-management-costs-sydney">what drives cost</Link> can
        help frame this.
      </p>

      <h2>Step 3: Get proposals and follow the right approval process</h2>
      <p>
        Ask shortlisted providers to inspect the building before quoting — a proposal written
        without a site visit is a guess. Compare them on the same basis: hours, leave cover,
        after-hours support, reporting and exclusions.
      </p>
      <p>
        Check with your strata manager which decision-maker needs to approve the new appointment
        for your scheme — the committee or the owners corporation at a general meeting — and allow
        time for any meeting notice periods in your timeline.
      </p>

      <h2>Step 4: Plan the handover</h2>
      <p>
        This is where continuity is won or lost. Agree a handover date with the outgoing provider,
        and ideally a joint walk-through of the building with both managers present. Use a
        checklist so nothing depends on memory.
      </p>
      <h3>Handover checklist</h3>
      <ul>
        <li>
          <strong>Keys and access:</strong> a counted key register, spare fobs and remotes, and
          administrator access to the access control system in the owners corporation’s name
        </li>
        <li>
          <strong>Contractors:</strong> current service contracts, contact details and schedules
          for fire safety, lifts, pumps, cleaning, gardening and pest control
        </li>
        <li>
          <strong>Compliance records:</strong> the fire safety schedule, past Annual Fire Safety
          Statements and open fire safety defects
        </li>
        <li>
          <strong>Open work:</strong> outstanding work orders, quotes awaiting approval and the
          defect register
        </li>
        <li>
          <strong>Building information:</strong> asset registers, operation and maintenance
          manuals, warranties and as-built drawings where they exist
        </li>
        <li>
          <strong>Systems and data:</strong> an export of the building’s records from any building
          management software, CCTV system access, and the building portal or website
        </li>
        <li>
          <strong>Routines:</strong> bin schedules, move-in procedures, lift booking rules and
          emergency contact lists
        </li>
      </ul>
      <Example title="The access system nobody could administer">
        <p>
          A building changes providers at the end of its agreement. Two weeks later a resident
          loses their fob — and it turns out the access control software is registered under the
          outgoing provider’s account. No one on site can cancel the lost fob or issue a new one
          until the old provider transfers the account.
        </p>
        <p>
          The fix is simple if it’s done before the changeover: confirm that every system the
          building relies on is held in the owners corporation’s name, with admin access
          transferred on handover day.
        </p>
      </Example>

      <h2>Step 5: Tell residents and contractors</h2>
      <p>
        Send residents a short notice before the changeover: who the new building manager is, how
        to report issues, and the emergency number. Contractors need the same information so they
        know who to call on arrival and who approves their work. A gap here is how jobs end up
        unsupervised in the first weeks.
      </p>

      <h2>Step 6: The first months with a new provider</h2>
      <p>A new building manager’s early priorities should include:</p>
      <ul>
        <li>A full inspection of common property to establish a baseline</li>
        <li>Reviewing every open work order and defect inherited from the previous provider</li>
        <li>Meeting each regular contractor and confirming schedules</li>
        <li>Checking where the building stands in its fire safety and compliance cycle</li>
        <li>An early report to the committee on what was found and what comes first</li>
      </ul>

      <h2>How TBPM handles a changeover</h2>
      <p>Our process for buildings moving to TBPM is:</p>
      <ol>
        <li>
          <strong>Complimentary site assessment.</strong> We inspect the building and meet your
          committee, at no cost and with no obligation.
        </li>
        <li>
          <strong>Tailored proposal.</strong> Hours, scope and pricing built around what we found.
        </li>
        <li>
          <strong>Managed handover.</strong> We take over records, keys, contractor relationships
          and resident communications, working through the handover with your outgoing provider.
        </li>
      </ol>
      <p>
        New engagements also include a complimentary energy and financial audit and a dedicated
        building website for resident notices. Part-time and hybrid engagements include a building
        asset register documenting plant, equipment and major components.
      </p>
      <p>
        Read more about{" "}
        <Link href="/on-site-building-management">full-time on-site building management</Link> or{" "}
        <Link href="/part-time-building-management">part-time and hybrid building management</Link>,
        or <Link href="/contact">request a free site assessment</Link> to start the conversation.
      </p>
    </GuideLayout>
  );
}
