export type LeadershipRole = {
  /** Role title as it appears on the card. */
  title: string;
  /** Team, board or duty station the role sits in. */
  group: string;
  /** Short description of the responsibilities attached to the role. */
  body: string;
};

/** Accra secretariat — board and national executive roles. */
export const nationalRoles: LeadershipRole[] = [
  {
    title: "Board Chairperson",
    group: "Board of Directors",
    body: "Chairs the governing board, safeguards the mandate of the Foundation and leads board oversight of strategy and risk.",
  },
  {
    title: "Executive Director",
    group: "National Secretariat, Accra",
    body: "Holds overall responsibility for strategy, institutional partnerships and the performance of all programmes.",
  },
  {
    title: "Deputy Executive Director",
    group: "National Secretariat, Accra",
    body: "Supports the Executive Director and oversees day-to-day coordination between the national office and the zones.",
  },
  {
    title: "Director of Programmes",
    group: "Programmes",
    body: "Leads design, delivery and evaluation across the five focus areas and line-manages programme coordinators.",
  },
  {
    title: "Director of Finance & Administration",
    group: "Finance & Operations",
    body: "Responsible for financial controls, donor reporting, procurement, audit readiness and staff administration.",
  },
  {
    title: "National Secretary",
    group: "Governance",
    body: "Keeps the records of the Foundation, minutes of the board and statutory filings under the Companies Act.",
  },
  {
    title: "Communications & Partnerships Lead",
    group: "External Relations",
    body: "Manages the Foundation\u2019s voice, media engagement, donor relations and volunteer recruitment.",
  },
  {
    title: "Monitoring, Evaluation & Learning Lead",
    group: "MEL",
    body: "Builds the evidence base \u2014 baselines, indicators, field verification and learning reviews.",
  },
];

/** Regional executives across Accra, Tamale and Daboya. */
export const regionalRoles: LeadershipRole[] = [
  {
    title: "Regional Coordinator \u2014 Greater Accra",
    group: "Accra",
    body: "Leads advocacy, urban youth programming and partner engagement in the Greater Accra Region.",
  },
  {
    title: "Regional Coordinator \u2014 Northern Region",
    group: "Tamale",
    body: "Oversees education and empowerment programming and district relationships from the Tamale office.",
  },
  {
    title: "Regional Coordinator \u2014 Savannah Region",
    group: "Daboya",
    body: "Leads community delivery in North Gonja, working directly with chiefs, women\u2019s groups and WASH committees.",
  },
  {
    title: "Regional Organiser \u2014 Women\u2019s Wing",
    group: "All regions",
    body: "Mobilises women\u2019s groups, savings collectives and female mentors within each operational region.",
  },
  {
    title: "Regional Organiser \u2014 Youth Wing",
    group: "All regions",
    body: "Coordinates youth volunteers, school clubs and campus chapters across the regions.",
  },
  {
    title: "Regional Field Officers",
    group: "District level",
    body: "Front-line staff and volunteers who run activities, collect data and stay accountable to communities.",
  },
];

/** The three governance tiers summarised at the top of the leadership page. */
export const governanceTiers = [
  {
    title: "Board of Directors",
    body: "Provides oversight, approves strategy and budgets, and safeguards the non-political, non-profit mandate set out in our incorporation documents.",
  },
  {
    title: "National Executives",
    body: "Based at the Accra secretariat. Responsible for strategy, programme quality, finance, communications and monitoring across the whole Foundation.",
  },
  {
    title: "Regional Executives",
    body: "Based in Accra, Tamale and Daboya. Responsible for delivery, district relationships and accountability to the communities they serve.",
  },
];
