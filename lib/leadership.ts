export type { LeadershipRole } from "@/lib/leadership-roles";
export {
  boardRoles,
  nationalRoles,
  executiveRoles,
  tierMeta,
  getExecutive,
  getExecutiveNeighbours,
  getTierPeers,
} from "@/lib/leadership-roles";

export type RegionalTeam = {
  /** Region name as used in the section heading. */
  region: string;
  /** Duty station the executives work from. */
  base: string;
  /** What the region concentrates on. */
  remit: string;
  /** Executive roles that make up the regional team. */
  roles: string[];
};

/** Tier 3 — regional coordinators and their executive teams. */
export const regionalTeams: RegionalTeam[] = [
  {
    region: "Ashanti Regional Executives",
    base: "Kumasi",
    remit:
      "Urban and peri-urban programming across the metropolis and surrounding districts — school clubs, youth skills and rights education.",
    roles: [
      "Regional Coordinator",
      "Deputy Regional Coordinator",
      "Regional Secretary",
      "Regional Treasurer",
      "Regional Organiser",
      "Women’s Organiser",
      "Youth Organiser",
    ],
  },
  {
    region: "Upper East Regional Executives",
    base: "Bolgatanga",
    remit:
      "Cross-border and rural district work — girls’ retention in school, savings groups and advocacy against harmful practices.",
    roles: [
      "Regional Coordinator",
      "Deputy Regional Coordinator",
      "Regional Secretary",
      "Regional Treasurer",
      "Regional Organiser",
      "Women’s Organiser",
      "Youth Organiser",
    ],
  },
  {
    region: "Northern Regional Executives",
    base: "Tamale",
    remit:
      "Zonal office for the north — education and empowerment programming, district relationships and fellowship delivery.",
    roles: [
      "Regional Coordinator",
      "Deputy Regional Coordinator",
      "Regional Secretary",
      "Regional Treasurer",
      "Regional Organiser",
      "Women’s Organiser",
      "Youth Organiser",
    ],
  },
  {
    region: "Savannah Regional Executives",
    base: "Daboya, North Gonja",
    remit:
      "Community field office — WASH committees, girls’ education clubs and savings collectives working directly with chiefs and elders.",
    roles: [
      "Regional Coordinator",
      "Deputy Regional Coordinator",
      "Regional Secretary",
      "Regional Treasurer",
      "Regional Organiser",
      "Women’s Organiser",
      "Youth Organiser",
    ],
  },
  {
    region: "Greater Accra Regional Executives",
    base: "Accra",
    remit:
      "National advocacy and policy engagement, urban youth programming, partner and diaspora relations.",
    roles: [
      "Regional Coordinator",
      "Deputy Regional Coordinator",
      "Regional Secretary",
      "Regional Treasurer",
      "Regional Organiser",
      "Women’s Organiser",
      "Youth Organiser",
    ],
  },
];

export type Committee = {
  /** Committee name. */
  name: string;
  /** One-line remit shown under the name. */
  remit: string;
  /** Standing positions on the committee. */
  roles: string[];
};

/** Tier 4 — standing committees of the Foundation. */
export const committees: Committee[] = [
  {
    name: "Health, Sanitation & Environmental Committee",
    remit:
      "Water, sanitation and hygiene work, community clean-ups, health outreach and environmental protection in the districts we serve.",
    roles: [
      "Committee Chairperson",
      "Committee Secretary",
      "Technical Lead — WASH",
      "Community Health Liaison",
      "Committee Members",
    ],
  },
  {
    name: "Creativity, Culture & Diplomacy Committee",
    remit:
      "Durbars, cultural exchange, arts and storytelling programmes, and the Foundation’s relationships with traditional authorities and partners abroad.",
    roles: [
      "Committee Chairperson",
      "Committee Secretary",
      "Culture & Arts Lead",
      "Diplomacy & Exchange Liaison",
      "Committee Members",
    ],
  },
  {
    name: "Human Rights, Drug Abuse & Peace Building Committee",
    remit:
      "Rights education and legal literacy, substance-abuse prevention among young people, and mediation and peace building in host communities.",
    roles: [
      "Committee Chairperson",
      "Committee Secretary",
      "Rights & Legal Literacy Lead",
      "Drug Abuse Prevention Lead",
      "Peace Building & Mediation Lead",
      "Committee Members",
    ],
  },
  {
    name: "Research Committee",
    remit:
      "Baselines, needs assessments, field verification and the evidence that decides where and how programmes run.",
    roles: [
      "Committee Chairperson",
      "Committee Secretary",
      "Research & Data Lead",
      "Field Enumeration Coordinator",
      "Committee Members",
    ],
  },
  {
    name: "Education & Youth Empowerment Committee",
    remit:
      "School enrolment and retention, learning materials, girls’ education clubs, skills training and the fellowship pipeline.",
    roles: [
      "Committee Chairperson",
      "Committee Secretary",
      "Education Programmes Lead",
      "Skills & Livelihoods Lead",
      "Committee Members",
    ],
  },
];

/** The four governance tiers summarised at the top of the leadership page. */
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
    title: "Regional Coordinators",
    body: "Regional executive teams in Ashanti, Upper East, Northern, Savannah and Greater Accra. Responsible for delivery, district relationships and accountability to the communities they serve.",
  },
  {
    title: "Committee Members",
    body: "Five standing committees carry the technical work of the Foundation — health and sanitation, culture and diplomacy, human rights and peace building, research, and education and youth empowerment.",
  },
];
