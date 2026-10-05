import Link from "next/link";
import GuideLayout, { Example, guideMetadata } from "@/components/GuideLayout";
import { getGuide } from "@/data/guides";

const guide = getGuide("building-manager-vs-strata-manager-nsw");

export const metadata = guideMetadata(guide);

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        Committees ask us this more than any other question, usually because something has gone
        wrong and nobody is sure whose job it was to fix it. The short answer: a{" "}
        <strong>strata manager</strong> runs the scheme’s administration, money and meetings. A{" "}
        <strong>building manager</strong> looks after the physical building, the contractors who
        work on it and the people who live in it. Most well-run buildings of any size have both,
        and the two roles work best when each knows exactly where the other’s job starts.
      </p>

      <h2>What a strata manager does</h2>
      <p>
        A strata manager (formally a <em>strata managing agent</em>) is appointed by the owners
        corporation to carry out administrative functions that the owners corporation delegates to
        them. In NSW they must be licensed under the Property and Stock Agents Act 2002 and act
        within the Strata Schemes Management Act 2015. Their work is mostly office-based, and a
        strata manager typically looks after many schemes at once.
      </p>
      <p>Typical strata manager responsibilities include:</p>
      <ul>
        <li>Issuing levy notices, collecting levies and following up arrears</li>
        <li>Preparing budgets for the administrative and capital works funds</li>
        <li>Calling and minuting general meetings and committee meetings</li>
        <li>Keeping the strata roll and the scheme’s records</li>
        <li>Arranging and renewing building insurance, and managing claims</li>
        <li>Paying invoices from the scheme’s trust account and preparing financial statements</li>
        <li>Annual reporting to the NSW Strata Hub</li>
      </ul>

      <h2>What a building manager does</h2>
      <p>
        A building manager (sometimes called a caretaker or facilities manager) is engaged under a
        building management agreement with the owners corporation. Their focus is the building
        itself: making sure common property is safe, working and maintained, and that contractors
        turn up, do the job properly and leave the site in order. A building manager is either on
        site full time or attends on a structured roster.
      </p>
      <p>Typical building manager responsibilities include:</p>
      <ul>
        <li>Regular inspections of common property to find maintenance and safety issues early</li>
        <li>Obtaining quotes, coordinating contractors and supervising work on site</li>
        <li>
          Coordinating essential services contractors — fire safety, lifts, pumps, access control
        </li>
        <li>Tracking defects and maintenance requests through to completion</li>
        <li>Managing keys, fobs, move-ins, move-outs and lift bookings</li>
        <li>Being the day-to-day contact for residents about the building</li>
        <li>Reporting to the strata committee on works completed and issues found</li>
      </ul>
      <p>
        Building managers now also carry statutory conduct duties in NSW — including acting in the
        best interests of the owners corporation and disclosing commissions and conflicts of
        interest. The NSW Government’s{" "}
        <a
          href="https://www.nsw.gov.au/housing-and-construction/strata/guide-to-strata-law-changes-for-strata-committees-and-owners"
          target="_blank"
          rel="noopener noreferrer"
        >
          guide to recent strata law changes
        </a>{" "}
        sets out what changed.
      </p>

      <h2>Side-by-side comparison</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Strata manager</th>
              <th scope="col">Building manager</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Main focus</th>
              <td>Administration, finances, governance</td>
              <td>The physical building, contractors and residents</td>
            </tr>
            <tr>
              <th scope="row">Where they work</th>
              <td>Office-based, across many schemes</td>
              <td>On site, full-time or on a weekly roster</td>
            </tr>
            <tr>
              <th scope="row">Engaged under</th>
              <td>A strata management agency agreement</td>
              <td>A building management agreement</td>
            </tr>
            <tr>
              <th scope="row">Licensing</th>
              <td>Licensed strata managing agent (NSW)</td>
              <td>Bound by the agreement and statutory conduct duties</td>
            </tr>
            <tr>
              <th scope="row">Residents contact them about</th>
              <td>Levies, by-laws, meetings, records</td>
              <td>Leaks, lifts, lights, access, noise, contractors</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Where the two roles meet</h2>
      <p>
        The roles overlap most on repairs, compliance and money. The clearest way to see the split
        is to follow one ordinary problem from start to finish.
      </p>
      <Example title="A leak from a balcony into the lot below">
        <p>
          A resident reports water coming through their ceiling after rain. The{" "}
          <strong>building manager</strong> inspects both lots, arranges a plumber or leak
          detection specialist, and identifies whether the source is common property (a failed
          balcony membrane, for instance) or something inside the lot above. They get quotes,
          supervise the repair and update the committee.
        </p>
        <p>
          The <strong>strata manager</strong> checks whether the damage should go to the building
          insurer, lodges any claim, issues the purchase order the committee approves, pays the
          invoice from the scheme’s funds and records the decision in the minutes.
        </p>
        <p>
          Without a building manager, the committee member who happens to live nearby usually ends
          up doing the first half of that job for free.
        </p>
      </Example>
      <p>
        Fire safety works the same way. The strata manager makes sure the Annual Fire Safety
        Statement is arranged and lodged on time. The building manager gives the fire contractor
        access, makes sure every item in the fire safety schedule is actually inspected, and chases
        the defects the inspection turns up so the next statement isn’t a repeat of the last one.
      </p>

      <h2>How to tell which one your building is missing</h2>
      <p>You probably need a building manager, or more building manager hours, if:</p>
      <ul>
        <li>Committee members are meeting contractors, holding keys or chasing quotes themselves</li>
        <li>The same defects keep coming back after being “fixed”</li>
        <li>Residents email the strata manager about blown lights and blocked drains</li>
        <li>Nobody can say when common property was last inspected, or what was found</li>
        <li>Contractors attend without anyone checking the work before the invoice is paid</li>
      </ul>
      <p>
        If the problems are late levy notices, missing minutes, insurance or financial reporting,
        that’s a strata management question — a building manager won’t fix it and shouldn’t try.
      </p>
      <p>
        Not sure how many hours your building needs? Our guide to{" "}
        <Link href="/knowledge/full-time-vs-part-time-building-management">
          full-time vs part-time building management
        </Link>{" "}
        walks through the factors.
      </p>

      <h2>How TBPM works alongside your strata manager</h2>
      <p>
        TBPM is a building management company. We don’t replace your strata manager — we work with
        them. In practice that means our building manager is the single point of contact for
        contractors and residents on building matters, passes quotes to the committee with a
        recommendation, and provides monthly reports documenting completed works and open issues,
        with quarterly committee review meetings. The strata manager keeps the finances, meetings
        and records.
      </p>
      <p>
        For larger buildings that means a{" "}
        <Link href="/on-site-building-management">full-time on-site building manager</Link>; for
        mid-sized schemes, a{" "}
        <Link href="/part-time-building-management">part-time or hybrid roster</Link>. If you’d like
        to talk through which fits, <Link href="/contact">request a free site assessment</Link>.
      </p>

      <h2>Official sources</h2>
      <ul>
        <li>
          <a
            href="https://www.nsw.gov.au/housing-and-construction/strata/roles"
            target="_blank"
            rel="noopener noreferrer"
          >
            NSW Government — Strata roles and responsibilities
          </a>
        </li>
        <li>
          <a
            href="https://legislation.nsw.gov.au/view/html/inforce/current/act-2015-050"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strata Schemes Management Act 2015
          </a>
        </li>
        <li>
          <a
            href="https://www.nsw.gov.au/housing-and-construction/strata/guide-to-strata-law-changes-for-strata-committees-and-owners"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guide to strata law changes for committees and owners
          </a>
        </li>
      </ul>
    </GuideLayout>
  );
}
