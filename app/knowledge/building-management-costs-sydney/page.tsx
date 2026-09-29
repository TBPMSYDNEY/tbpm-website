import Link from "next/link";
import GuideLayout, { Example, guideMetadata } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const guide = getGuide("building-management-costs-sydney");

export const metadata = guideMetadata(guide);

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        “How much does building management cost?” is a fair question, and the honest answer is
        that it depends on a handful of things you can identify in advance. This guide explains
        what those drivers are, what a quote should include, what is usually charged separately,
        and how to compare two quotes that look nothing alike.
      </p>
      <p>
        We don’t publish a price list. Two buildings with the same lot count can need very
        different levels of service, and a figure without that context would mislead more
        committees than it helped. Every TBPM proposal is built from a site assessment instead.
      </p>

      <h2>What you are actually paying for</h2>
      <p>
        The biggest single cost in building management is the building manager’s time on your
        site. Almost everything else scales from that. Around it sit the costs that separate a
        professional provider from an individual caretaker:
      </p>
      <ul>
        <li>Office support that handles requests and contractors between visits</li>
        <li>Cover when your manager is on leave or sick, so service doesn’t stop</li>
        <li>After-hours emergency phone support</li>
        <li>Public liability and workers compensation insurance</li>
        <li>Reporting to the committee and the systems used to track work</li>
      </ul>

      <h2>The main cost drivers</h2>
      <h3>Hours on site</h3>
      <p>
        A full-time manager on site five days a week costs more than a part-time roster, which at
        TBPM typically runs 8 to 20 hours a week. Choosing the right model is the single biggest
        decision affecting price — see{" "}
        <Link href="/knowledge/full-time-vs-part-time-building-management">
          full-time vs part-time building management
        </Link>
        .
      </p>
      <h3>Size and complexity</h3>
      <p>
        More lots, more floors, more lifts and more plant mean more inspections, more contractor
        attendances and more resident contact. Mixed-use buildings add commercial tenants, trade
        waste and deliveries.
      </p>
      <h3>Amenities</h3>
      <p>
        Pools, gyms, BBQ areas, car parks and loading docks each need routine checks and
        coordination of their own service contractors.
      </p>
      <h3>After-hours expectations</h3>
      <p>
        Emergency phone support is standard. Regular evening or weekend attendance on site is a
        different level of service and priced accordingly.
      </p>
      <h3>Scope and bundling</h3>
      <p>
        Some buildings combine management with{" "}
        <Link href="/cleaning-services">cleaning</Link>,{" "}
        <Link href="/gardening-services">gardening</Link> or{" "}
        <Link href="/concierge-services">concierge</Link> services. Bundling can simplify
        coordination, but each service should still be priced clearly so the committee can see
        what it is paying for.
      </p>
      <h3>Building stage</h3>
      <p>
        A new building in its defect period, or an older one going through remedial works, may
        need more hours for a period than it will in steady state.
      </p>

      <h2>What a quote should include</h2>
      <p>A clear building management quote should state, at minimum:</p>
      <ul>
        <li>Hours on site per week, and which days</li>
        <li>How leave and sick cover works</li>
        <li>What after-hours support is included and how emergencies are handled</li>
        <li>Reporting frequency and committee meeting attendance</li>
        <li>Whether the price includes GST</li>
        <li>How and when the price is reviewed during the agreement</li>
        <li>The agreement term and termination conditions</li>
      </ul>

      <h2>What is normally charged separately</h2>
      <p>
        Building management fees pay for management. The work being managed is paid for
        separately by the owners corporation. Expect these to sit outside the management fee:
      </p>
      <ul>
        <li>Contractor and trade costs — plumbers, electricians, fire and lift contractors</li>
        <li>Materials and parts for repairs</li>
        <li>Capital works and major projects</li>
        <li>Specialist consultants, such as engineers or building surveyors</li>
        <li>Work inside individual lots, which is the lot owner’s responsibility</li>
      </ul>
      <p>
        Watch for items that should be clear but often aren’t: call-out fees for after-hours
        attendance, administration fees added to contractor invoices, and commissions or rebates
        from suppliers. Building managers in NSW must now disclose commissions and conflicts of
        interest — ask how any provider handles this before you sign.
      </p>

      <h2>How to compare two quotes fairly</h2>
      <p>
        The annual fee is the least useful number for comparison on its own. Convert each quote
        into what you actually get: hours on site, cover when the manager is away, and what the
        committee will still have to do itself.
      </p>
      <Example title="Two quotes for the same 60-lot building">
        <p>
          <strong>Quote A</strong> is the cheaper annual figure. It offers 8 hours a week, one
          visit, no stated leave cover and quarterly reporting.
        </p>
        <p>
          <strong>Quote B</strong> costs more per year. It offers 12 hours across two visits, a
          named relief manager during leave, an after-hours emergency line and monthly reporting.
        </p>
        <p>
          Per hour on site, the two may be close. But under Quote A the building has no manager for
          several weeks a year, contractors attending on non-visit days go unsupervised, and the
          committee finds out about problems once a quarter. The cheaper quote isn’t necessarily the
          lower cost once the committee’s own time is counted.
        </p>
      </Example>

      <h2>How building management fees are funded</h2>
      <p>
        Building management is a recurring running cost, so it is normally paid from the
        administrative fund and included in the budget the owners corporation adopts at its annual
        general meeting. If you’re changing the level of service mid-year, speak to your strata
        manager about how the change fits the current budget.
      </p>

      <h2>Where good management pays for itself</h2>
      <p>
        The cheapest building management is rarely the lowest-cost building. The savings come from
        problems found early and money not wasted:
      </p>
      <ul>
        <li>
          A blocked balcony drain found on inspection costs a plumber’s visit. Found after water
          has entered the slab and the lot below, it can become a remedial project.
        </li>
        <li>
          Contractor quotes reviewed by someone who knows what the work should cost — TBPM’s
          founders come from building and remedial construction.
        </li>
        <li>
          Service contracts and energy use reviewed for savings. TBPM includes a complimentary
          energy and financial audit with every management engagement.
        </li>
      </ul>

      <h2>Get a proposal for your building</h2>
      <p>
        The fastest way to get a real number is a site assessment. We’ll inspect the building, meet
        your committee and send a proposal that sets out hours, inclusions and exclusions in
        writing. <Link href="/contact">Request your free site assessment and proposal</Link>, or
        read more about{" "}
        <Link href="/on-site-building-management">full-time on-site management</Link> and{" "}
        <Link href="/remote-building-management">part-time and hybrid management</Link>.
      </p>
    </GuideLayout>
  );
}
