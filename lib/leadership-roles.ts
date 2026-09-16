/**
 * Executive role profiles — the Board of Directors and the National Executives.
 *
 * Each entry describes a post rather than a person, so a profile page exists
 * whether or not the secretariat has confirmed the office holder. When a name,
 * portrait or direct address is supplied, set `name`, `photo` and `email` and
 * the cards and profile pages pick them up automatically.
 */

export type LeadershipRole = {
  /** URL segment for the profile page at `/leadership/<slug>/`. */
  slug: string;
  /** Role title as it appears on the card and profile page. */
  title: string;
  /** Team, board or duty station the role sits in. */
  group: string;
  /** Governance tier the role belongs to. */
  tier: "board" | "national";
  /** One-sentence summary used on the leadership listing. */
  body: string;
  /** Long-form paragraphs for the profile page. */
  about: string[];
  /** Standing duties attached to the post. */
  responsibilities: string[];
  /** Who the post answers to. */
  reportsTo: string;
  /** How the post is filled and for how long. */
  appointment: string;
  /** Roles and bodies the post works alongside. */
  worksWith: string[];
  /** Focus-area slugs the post carries direct responsibility for. */
  focus: string[];
  /** Person holding the role. Omit until the secretariat confirms the name. */
  name?: string;
  /** Direct address for the role. Falls back to the secretariat inbox. */
  email?: string;
  /** Direct line for the role. Falls back to the switchboard. */
  phone?: string;
  /** Portrait path under `public/images`. Omit to show the crest placeholder. */
  photo?: string;
};

/** Tier 1 — the governing board. */
export const boardRoles: LeadershipRole[] = [
  {
    slug: "board-chairperson",
    title: "Board Chairperson",
    group: "Board of Directors",
    tier: "board",
    body: "Chairs the governing board, safeguards the mandate of the Foundation and leads board oversight of strategy and risk.",
    about: [
      "The Board Chairperson leads the governing body of Better Dream Foundation Ghana. The post carries responsibility for the integrity of the board itself — its composition, its calendar, the quality of the papers it considers and the decisions it records.",
      "The chairperson holds the Executive Director to account against the strategy the board approves, and is the final internal escalation point on questions of mandate: whether a proposed programme, partnership or funding source sits inside the non-political, non-profit purpose set out in our incorporation documents.",
    ],
    responsibilities: [
      "Chairs quarterly board meetings and the annual general meeting",
      "Agrees the board agenda, papers and annual work plan with the Board Secretary",
      "Leads the appointment, appraisal and succession planning of the Executive Director",
      "Signs off the annual report, audited accounts and statutory returns on behalf of the board",
      "Represents the Foundation to funders, government and traditional authorities at the most senior level",
    ],
    reportsTo: "The board and the members of the Foundation",
    appointment: "Elected by the board for a renewable three-year term",
    worksWith: [
      "Vice Board Chairperson",
      "Board Secretary",
      "Executive Director",
    ],
    focus: [],
  },
  {
    slug: "vice-board-chairperson",
    title: "Vice Board Chairperson",
    group: "Board of Directors",
    tier: "board",
    body: "Deputises for the chairperson, and leads on board development and the induction of new directors.",
    about: [
      "The Vice Board Chairperson carries the chairperson's authority whenever that office is vacant or the chairperson is unavailable, and chairs any session in which the chairperson has declared an interest.",
      "Beyond deputising, the post owns board development: recruiting directors with the skills the board is missing, inducting them properly, and running the annual review of how the board performs as a body.",
    ],
    responsibilities: [
      "Chairs board meetings in the chairperson's absence or where a conflict is declared",
      "Leads recruitment, induction and mentoring of new directors",
      "Runs the annual board effectiveness review and skills audit",
      "Deputises on external representation as the chairperson delegates",
      "Supports the chairperson on sensitive governance and disciplinary matters",
    ],
    reportsTo: "Board Chairperson",
    appointment: "Elected by the board for a renewable three-year term",
    worksWith: ["Board Chairperson", "Board Secretary", "All directors"],
    focus: [],
  },
  {
    slug: "board-secretary",
    title: "Board Secretary",
    group: "Board of Directors",
    tier: "board",
    body: "Keeps the records of the Foundation, minutes of the board and statutory filings under the Companies Act.",
    about: [
      "The Board Secretary is the custodian of the Foundation's corporate record: the constitution, the register of directors and members, board and committee minutes, and the resolutions that give management its authority.",
      "The post is also our compliance calendar. Annual returns, changes of officers and any amendment to the constitution are filed on time and in the correct form with the Registrar-General and the Department of Social Welfare.",
    ],
    responsibilities: [
      "Issues notices, agendas and papers for board and general meetings",
      "Records and circulates minutes and board resolutions",
      "Maintains the constitution, statutory registers and the corporate seal",
      "Files annual returns and officer changes with the Registrar-General",
      "Advises the board on procedure, quorum and conflict-of-interest declarations",
    ],
    reportsTo: "Board Chairperson",
    appointment: "Appointed by the board; statutory officer of the Foundation",
    worksWith: [
      "Board Chairperson",
      "Director — Governance & Compliance",
      "National Secretary",
    ],
    focus: [],
  },
  {
    slug: "board-treasurer",
    title: "Board Treasurer",
    group: "Board of Directors",
    tier: "board",
    body: "Oversees financial stewardship, approves the annual budget and presents accounts to the board and auditors.",
    about: [
      "The Board Treasurer leads the board's financial stewardship. The post scrutinises the annual budget before it goes to the board, monitors performance against it through the year, and satisfies the board that restricted funds have been used only for the purposes the donor agreed.",
      "The treasurer is also the board's link to the external auditors, chairs the audit conversation and reports the results — including any management letter — to the full board.",
    ],
    responsibilities: [
      "Reviews and recommends the annual budget for board approval",
      "Monitors income, expenditure and reserves against budget each quarter",
      "Oversees the annual audit and presents the audited accounts to the board",
      "Assures the board that restricted grants are spent on the agreed purposes",
      "Approves the finance, procurement and asset-disposal policies",
    ],
    reportsTo: "The board",
    appointment: "Elected by the board for a renewable three-year term",
    worksWith: [
      "National Treasurer",
      "Executive Director",
      "External auditors",
    ],
    focus: [],
  },
  {
    slug: "director-governance-compliance",
    title: "Director — Governance & Compliance",
    group: "Board of Directors",
    tier: "board",
    body: "Maintains the constitution, conflict-of-interest register, safeguarding policy and regulatory compliance.",
    about: [
      "This directorship holds the board's assurance function for everything other than money: safeguarding, data protection, conflicts of interest, and compliance with the laws and regulations that govern non-profit work in Ghana.",
      "The post keeps our policy library current and enforceable, tests that the policies are actually followed in the regions, and is the board-level recipient of any whistleblowing or safeguarding report.",
    ],
    responsibilities: [
      "Maintains the policy library, including safeguarding and data protection",
      "Keeps the register of interests and manages declared conflicts",
      "Reviews regulatory and donor compliance across all regions",
      "Receives and oversees investigation of safeguarding and whistleblowing reports",
      "Reports the Foundation's risk register to the board each quarter",
    ],
    reportsTo: "The board",
    appointment: "Appointed by the board for a renewable three-year term",
    worksWith: [
      "Board Secretary",
      "Human Rights, Drug Abuse & Peace Building Committee",
      "Executive Director",
    ],
    focus: ["human-rights"],
  },
  {
    slug: "director-programmes-impact",
    title: "Director — Programmes & Impact",
    group: "Board of Directors",
    tier: "board",
    body: "Holds management to account for programme quality, evidence of impact and learning across the focus areas.",
    about: [
      "This directorship is the board's challenge function on programme quality. It asks whether what we deliver actually changes conditions for the communities we serve, and whether we can show it with evidence rather than activity counts.",
      "The post reviews the monitoring and evaluation framework, tests findings against what communities themselves report, and brings recommendations to the board when a programme should be redesigned, scaled or stopped.",
    ],
    responsibilities: [
      "Reviews programme design and results across the five focus areas",
      "Approves the monitoring, evaluation and learning framework",
      "Scrutinises impact reporting before it is published or sent to funders",
      "Champions community feedback and beneficiary accountability at board level",
      "Advises the board on scaling, redesigning or closing programmes",
    ],
    reportsTo: "The board",
    appointment: "Appointed by the board for a renewable three-year term",
    worksWith: [
      "Director of Programmes",
      "Monitoring, Evaluation & Learning Lead",
      "Research Committee",
    ],
    focus: ["education", "women-youth-empowerment", "community-engagement"],
  },
];

/** Tier 2 — Accra secretariat. */
export const nationalRoles: LeadershipRole[] = [
  {
    slug: "executive-director",
    title: "Executive Director",
    group: "National Secretariat, Accra",
    tier: "national",
    body: "Holds overall responsibility for strategy, institutional partnerships and the performance of all programmes.",
    about: [
      "The Executive Director is the most senior officer of the Foundation and the single point of accountability to the board for everything the organisation does — programmes, finances, people and reputation.",
      "The post translates the board's strategy into an annual plan and budget, leads the senior team at the Accra secretariat, and holds our institutional relationships with funders, ministries, district assemblies and partner organisations.",
    ],
    responsibilities: [
      "Leads implementation of the board-approved strategy and annual plan",
      "Line-manages the senior team at the national secretariat",
      "Owns institutional relationships with funders, ministries and district assemblies",
      "Presents performance, risk and finance reports to the board each quarter",
      "Acts as the Foundation's principal spokesperson",
    ],
    reportsTo: "Board Chairperson and the board",
    appointment: "Appointed by the board; full-time post",
    worksWith: [
      "Deputy Executive Director",
      "Director of Programmes",
      "National Treasurer",
      "Regional coordinators",
    ],
    focus: [
      "education",
      "human-rights",
      "women-youth-empowerment",
      "community-engagement",
      "fellowships-conferences",
    ],
  },
  {
    slug: "deputy-executive-director",
    title: "Deputy Executive Director",
    group: "National Secretariat, Accra",
    tier: "national",
    body: "Supports the Executive Director and oversees day-to-day coordination between the national office and the regions.",
    about: [
      "The Deputy Executive Director keeps the organisation running day to day. The post chairs the weekly management meeting, resolves the operational questions that would otherwise queue for the Executive Director, and acts in that office when it is vacant or on leave.",
      "Its distinctive responsibility is the link between Accra and the regions: making sure decisions taken nationally actually reach Kumasi, Bolgatanga, Tamale and Daboya, and that regional realities feed back into national plans.",
    ],
    responsibilities: [
      "Chairs the weekly senior management meeting",
      "Coordinates national-to-regional communication and workplanning",
      "Deputises for the Executive Director as delegated",
      "Oversees office administration, logistics and procurement compliance",
      "Leads cross-cutting projects that span more than one directorate",
    ],
    reportsTo: "Executive Director",
    appointment:
      "Appointed by the board on the Executive Director's recommendation",
    worksWith: [
      "Executive Director",
      "Regional coordinators",
      "National Organiser",
    ],
    focus: ["community-engagement"],
  },
  {
    slug: "national-secretary",
    title: "National Secretary",
    group: "Governance",
    tier: "national",
    body: "Convenes the national executive, keeps its records and circulates decisions to the regions and committees.",
    about: [
      "The National Secretary runs the machinery of the national executive: the meeting calendar, the papers, the minutes and the record of who agreed to do what by when.",
      "The post is the routing point between tiers. Decisions of the national executive reach the five regional teams and the five standing committees through this office, and their reports come back through it.",
    ],
    responsibilities: [
      "Convenes meetings of the national executive and keeps its minutes",
      "Tracks action points to completion across directorates and regions",
      "Circulates national decisions to regional teams and committees",
      "Maintains the membership, volunteer and fellowship registers",
      "Handles official correspondence of the secretariat",
    ],
    reportsTo: "Executive Director",
    appointment: "Elected by the national executive for a three-year term",
    worksWith: [
      "Board Secretary",
      "Regional secretaries",
      "Committee secretaries",
    ],
    focus: [],
  },
  {
    slug: "national-treasurer",
    title: "National Treasurer",
    group: "Finance & Operations",
    tier: "national",
    body: "Responsible for financial controls, donor reporting, procurement, audit readiness and staff administration.",
    about: [
      "The National Treasurer runs the Foundation's money day to day — banking, payments, payroll, petty cash in the regions, and the controls that keep all of it clean and auditable.",
      "The post prepares the annual budget with the Executive Director, produces the financial reports our funders require, and keeps the books in a state where an auditor can arrive unannounced.",
    ],
    responsibilities: [
      "Operates banking, payments, payroll and regional imprest accounts",
      "Prepares the annual budget and monthly management accounts",
      "Produces donor financial reports and grant reconciliations",
      "Runs procurement in line with policy and maintains the asset register",
      "Maintains audit readiness and responds to audit findings",
    ],
    reportsTo: "Executive Director, with assurance to the Board Treasurer",
    appointment:
      "Appointed post; elected treasurers serve on the national executive",
    worksWith: ["Board Treasurer", "Executive Director", "Regional treasurers"],
    focus: [],
  },
  {
    slug: "director-of-programmes",
    title: "Director of Programmes",
    group: "Programmes",
    tier: "national",
    body: "Leads design, delivery and evaluation across the five focus areas and line-manages regional coordinators.",
    about: [
      "The Director of Programmes owns what we actually deliver. Every project across education, human rights, women and youth empowerment, community engagement and the fellowship programme is designed, resourced and reviewed through this office.",
      "The post line-manages the five regional coordinators, which makes it the place where national programme standards and regional delivery realities have to be reconciled.",
    ],
    responsibilities: [
      "Designs programmes and writes the technical sections of funding proposals",
      "Line-manages regional coordinators and sets regional workplans",
      "Sets quality standards and safeguarding practice for delivery",
      "Commissions evaluations and acts on their findings",
      "Chairs the programmes review with the five standing committees",
    ],
    reportsTo: "Executive Director",
    appointment: "Appointed post; full-time",
    worksWith: [
      "Director — Programmes & Impact",
      "Regional coordinators",
      "Monitoring, Evaluation & Learning Lead",
    ],
    focus: [
      "education",
      "human-rights",
      "women-youth-empowerment",
      "community-engagement",
      "fellowships-conferences",
    ],
  },
  {
    slug: "national-organiser",
    title: "National Organiser",
    group: "Mobilisation",
    tier: "national",
    body: "Builds the volunteer base, coordinates campaigns and keeps the regional structures active between programmes.",
    about: [
      "The National Organiser builds and holds the Foundation's volunteer base. Recruitment, orientation, deployment and recognition of volunteers all sit here, as does the health of the regional structures between funded projects.",
      "The post also runs national campaign moments — awareness weeks, durbars, clean-ups and outreach drives — so that all five regions mobilise on the same message at the same time.",
    ],
    responsibilities: [
      "Recruits, orients and deploys volunteers across the five regions",
      "Coordinates national campaign calendars and mobilisation drives",
      "Supports regional organisers to keep structures active year-round",
      "Maintains the volunteer database and recognition scheme",
      "Organises durbars, launches and community mobilisation events",
    ],
    reportsTo: "Deputy Executive Director",
    appointment: "Elected by the national executive for a three-year term",
    worksWith: [
      "Regional organisers",
      "Women's and youth organisers",
      "Communications & Partnerships Lead",
    ],
    focus: ["community-engagement", "women-youth-empowerment"],
  },
  {
    slug: "communications-partnerships-lead",
    title: "Communications & Partnerships Lead",
    group: "External Relations",
    tier: "national",
    body: "Manages the Foundation's voice, media engagement, donor relationships and stakeholder reporting.",
    about: [
      "This post manages how the Foundation speaks and who it speaks with: the website, social channels, media relations, the annual report and the story of our work in the communities we serve.",
      "On partnerships, it maintains the donor and partner pipeline, coordinates proposal submissions with the programmes team, and makes sure every partner receives the reporting they were promised, on time.",
    ],
    responsibilities: [
      "Owns brand, website, social channels and publications",
      "Handles media relations and public statements with the Executive Director",
      "Maintains the donor and partner pipeline and engagement calendar",
      "Coordinates funding proposals with programmes and finance",
      "Gathers community stories and consent for their use",
    ],
    reportsTo: "Executive Director",
    appointment: "Appointed post; full-time",
    worksWith: [
      "Executive Director",
      "Director of Programmes",
      "National Organiser",
    ],
    focus: ["fellowships-conferences", "community-engagement"],
  },
  {
    slug: "monitoring-evaluation-learning-lead",
    title: "Monitoring, Evaluation & Learning Lead",
    group: "MEL",
    tier: "national",
    body: "Builds the evidence base — baselines, indicators, field verification and the learning loop into programme design.",
    about: [
      "This post builds the evidence base for everything the Foundation claims. It sets the indicators, runs baselines and endlines, verifies what is reported from the field, and maintains the data systems behind our reporting.",
      "Its most important function is the learning loop: turning findings into concrete changes in how the next cycle of programmes is designed, rather than into a report that is filed and forgotten.",
    ],
    responsibilities: [
      "Designs indicator frameworks and data collection tools",
      "Runs baseline, midline and endline studies with the Research Committee",
      "Verifies field reports and maintains the programme database",
      "Produces impact reporting for the board and funders",
      "Runs after-action reviews and feeds findings into programme design",
    ],
    reportsTo: "Director of Programmes",
    appointment: "Appointed post; full-time",
    worksWith: [
      "Director — Programmes & Impact",
      "Research Committee",
      "Regional coordinators",
    ],
    focus: ["education", "community-engagement"],
  },
];

/** Every executive profile, board first, in listing order. */
export const executiveRoles: LeadershipRole[] = [
  ...boardRoles,
  ...nationalRoles,
];

/** Human labels and listing anchors for the two executive tiers. */
export const tierMeta: Record<
  LeadershipRole["tier"],
  { label: string; href: string }
> = {
  board: { label: "Board of Directors", href: "/leadership/#board" },
  national: { label: "National Executives", href: "/leadership/#national" },
};

/** Looks up a single executive profile by slug. */
export function getExecutive(slug: string): LeadershipRole | undefined {
  return executiveRoles.find((role) => role.slug === slug);
}

/** Previous and next profiles in listing order, for profile-page navigation. */
export function getExecutiveNeighbours(slug: string): {
  previous?: LeadershipRole;
  next?: LeadershipRole;
} {
  const index = executiveRoles.findIndex((role) => role.slug === slug);
  if (index === -1) return {};

  return {
    previous: executiveRoles[index - 1],
    next: executiveRoles[index + 1],
  };
}

/** The other profiles in the same tier, used for the "same tier" strip. */
export function getTierPeers(role: LeadershipRole): LeadershipRole[] {
  return executiveRoles.filter(
    (peer) => peer.tier === role.tier && peer.slug !== role.slug,
  );
}
