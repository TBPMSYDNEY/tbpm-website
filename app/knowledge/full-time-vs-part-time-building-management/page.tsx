import Link from "next/link";
import GuideLayout, { Example, guideMetadata } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const guide = getGuide("full-time-vs-part-time-building-management");

export const metadata = guideMetadata(guide);

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        Lot count is the usual starting point, but it isn’t the whole answer. Two 80-lot buildings
        can need very different levels of management: one with a single lift and a car park, the
        other with a pool, gym, retail tenants and a steady stream of move-ins. This guide explains
        what each model looks like day to day and the factors we weigh when recommending one.
      </p>

      <h2>The two models at a glance</h2>
      <p>
        <strong>Full-time on-site management</strong> places a dedicated building manager at your
        property five days a week. They supervise common property daily, meet contractors on
        arrival, and are the face of the building for residents. At TBPM this is backed by office
        support and an after-hours emergency line.
      </p>
      <p>
        <strong>Part-time or hybrid management</strong> gives your building a dedicated manager on a
        structured weekly roster — typically 8 to 20 hours at TBPM — with a remote office team
        handling requests, quotes and contractor scheduling between visits. Visits are planned
        around inspections, contractor attendances and building routines rather than spread evenly.
        For small schemes, a fully remote option is also possible.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Full-time on-site</th>
              <th scope="col">Part-time / hybrid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Presence</th>
              <td>On site five days a week</td>
              <td>Scheduled visits, typically 8–20 hours a week</td>
            </tr>
            <tr>
              <th scope="row">Walk-up resident contact</th>
              <td>Daily, face to face</td>
              <td>During visits; otherwise by phone or email</td>
            </tr>
            <tr>
              <th scope="row">Contractor supervision</th>
              <td>Any day, including unplanned call-outs</td>
              <td>Planned attendances booked into visit days</td>
            </tr>
            <tr>
              <th scope="row">Common-property checks</th>
              <td>Daily</td>
              <td>Each visit, on a set inspection routine</td>
            </tr>
            <tr>
              <th scope="row">After-hours emergencies</th>
              <td>Emergency phone support</td>
              <td>Emergency phone support</td>
            </tr>
            <tr>
              <th scope="row">Typical fit</th>
              <td>100+ lots, mixed-use or premium amenities</td>
              <td>30–100 lots, moderate amenities, active committee</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Those lot ranges are a guide, not a rule. The factors below usually decide it.
      </p>

      <h2>Six factors that decide the right level of cover</h2>
      <h3>1. Amenities and plant</h3>
      <p>
        Pools, gyms, saunas, multiple lifts, basement car parks with exhaust fans and pumps, and
        loading docks all need regular checking and generate contractor visits. Every amenity adds
        routine work and another thing that can break on a Saturday.
      </p>
      <h3>2. Resident turnover</h3>
      <p>
        Buildings with many tenanted lots see frequent move-ins and move-outs. Each one means lift
        protection, booking management, fob handling and a check for damage to common property.
        High turnover pushes a building towards more hours on site.
      </p>
      <h3>3. Mixed use and commercial tenants</h3>
      <p>
        Retail or commercial lots bring deliveries, trade waste, different operating hours and
        separate stakeholders. A daily presence is often what keeps residential and commercial
        users from rubbing each other the wrong way.
      </p>
      <h3>4. Building age and defect profile</h3>
      <p>
        A newly completed building in its defect period needs someone logging and chasing defects
        with the builder. An older building with remedial works under way needs someone watching
        the contractors. Both situations can justify more hours for a period, even in a mid-sized
        scheme.
      </p>
      <h3>5. Committee capacity</h3>
      <p>
        A small, experienced committee that meets regularly can work well with a part-time
        manager. If committee members are already stretched, or turnover on the committee is high,
        more of the load needs to sit with the building manager.
      </p>
      <h3>6. Security and access expectations</h3>
      <p>
        Frequent parcel deliveries, visitor management and access control issues are easier to
        handle with someone on site every day — or with{" "}
        <Link href="/concierge-services">concierge services</Link> alongside management.
      </p>

      <h2>What happens between visits on a part-time roster</h2>
      <p>
        The most common worry about part-time management is what happens when the manager isn’t
        there. In a well-run hybrid model, the answer is: most things carry on as planned.
      </p>
      <ul>
        <li>Residents report issues to the office team, who log and triage them</li>
        <li>Urgent repairs are dispatched to contractors without waiting for the next visit</li>
        <li>
          Contractor attendances — fire inspections, lift servicing, pump maintenance — are booked
          into visit days wherever possible so the manager is there to supervise
        </li>
        <li>After-hours emergencies go to the emergency phone line</li>
        <li>The committee gets the same monthly reporting as a full-time building</li>
      </ul>

      <h2>Worked examples</h2>
      <Example title="A 55-lot residential building, one lift, no pool">
        <p>
          The committee is active and meets monthly. Most issues are routine: bins, lights, a
          handful of leaks a year and the annual fire safety cycle. A roster of around 10–12 hours
          across two visits a week — timed to match bin days and scheduled contractor attendances —
          usually covers it, with the office team handling everything in between.
        </p>
      </Example>
      <Example title="A 180-lot mixed-use building with pool, gym and ground-floor retail">
        <p>
          Daily move-ins, parcel volume, retail deliveries and amenity supervision generate work
          every day of the week. A part-time roster would leave residents waiting and contractors
          unsupervised. This is a full-time on-site building.
        </p>
      </Example>
      <Example title="A 70-lot building in its first two years after completion">
        <p>
          Lot count alone suggests part-time, but the builder’s defect period means defects must be
          identified, documented and chased before deadlines pass. A higher roster during the defect
          period, reviewed at a quarterly committee meeting, often makes more sense than locking in
          one level of cover for the life of the agreement.
        </p>
      </Example>

      <h2>You can change the level of cover later</h2>
      <p>
        The right answer today may not be right in two years. A good provider will review hours
        with the committee as the building’s needs change — scaling up during remedial works or a
        defect period, and back down once things settle. Ask any provider how the roster is
        reviewed and what notice is needed to change it.
      </p>
      <p>
        Cost is the other half of this decision. Our guide to{" "}
        <Link href="/knowledge/building-management-costs-sydney">
          building management costs in Sydney
        </Link>{" "}
        explains what drives the price of each model.
      </p>

      <h2>Talk it through with us</h2>
      <p>
        See how each model works at TBPM:{" "}
        <Link href="/on-site-building-management">full-time on-site building management</Link> or{" "}
        <Link href="/remote-building-management">part-time and hybrid building management</Link>.
        If you’re unsure which your building needs,{" "}
        <Link href="/contact">book a free site assessment</Link> — we’ll walk the building with
        your committee and recommend a level of cover based on what we find.
      </p>
    </GuideLayout>
  );
}
