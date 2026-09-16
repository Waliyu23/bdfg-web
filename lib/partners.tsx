export type PartnerCategory =
  "government" | "funding" | "civil-society" | "knowledge";

export type Partner = {
  /** Anchor id used by the directory filter links. */
  slug: string;
  name: string;
  /** Short label describing the kind of partner. */
  role: string;
  /** Group the partner sits in on the partnership page. */
  category: PartnerCategory;
  /** What the partnership delivers in practice. */
  body: string;
  /** Where the relationship operates. */
  scope: string;
  /** Focus-area slugs the partnership contributes to. */
  focus: string[];
  /** Placeholder mark, replaced when a supplied logo is available. */
  icon: React.ReactNode;
  /** Supplied logo path under `public/images`, when we have one. */
  logo?: string;
  /** Public website, when the partner has one. */
  url?: string;
};

/** Placeholder partner marks — swap for supplied logos when available. */
export const partners: Partner[] = [
  {
    name: "District Assembly",
    role: "Local government partner",
    slug: "district-assembly",
    category: "government",
    body: "Joint planning with district assemblies gives every programme a mandate, a district focal person and a place in the district medium-term development plan. Assemblies contribute venues, community entry and co-funding of local activities.",
    scope:
      "Districts across Greater Accra, Ashanti, Northern, Savannah and Upper East",
    focus: ["community-engagement", "education"],
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="h-11 w-11"
        fill="none"
        aria-hidden="true"
      >
        <g>
          <path
            d="M8 34V20a12 12 0 0124 0v14"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          ></path>
          <path
            d="M5 34h30"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          ></path>
          <circle cx="20" cy="20" r="3" fill="#F5B90B"></circle>
        </g>
      </svg>
    ),
  },
  {
    name: "Education Directorate",
    role: "Basic education partner",
    slug: "education-directorate",
    category: "government",
    body: "We work through Ghana Education Service directorates on enrolment drives, retention tracking, reading support and the distribution of learning materials, so that school-level work is recorded in the official system rather than running beside it.",
    scope: "District and regional education offices",
    focus: ["education"],
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="h-11 w-11"
        fill="none"
        aria-hidden="true"
      >
        <g>
          <path
            d="M20 12c-4-2.6-8-3.4-13-2.6v18.4c5-.8 9 0 13 2.6 4-2.6 8-3.4 13-2.6V9.4C28 8.6 24 9.4 20 12z"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
          ></path>
          <path d="M20 12v18.4" stroke="#F5B90B" strokeWidth="2.4"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Health Directorate",
    role: "Community health partner",
    slug: "health-directorate",
    category: "government",
    body: "Health directorates and district health management teams co-deliver our outreach: screening days, water and sanitation campaigns, adolescent health sessions and referral of cases identified by community volunteers.",
    scope: "District health management teams and community health compounds",
    focus: ["community-engagement", "human-rights"],
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="h-11 w-11"
        fill="none"
        aria-hidden="true"
      >
        <g>
          <circle
            cx="20"
            cy="20"
            r="14"
            stroke="currentColor"
            strokeWidth="2.5"
          ></circle>
          <path
            d="M20 13v14M13 20h14"
            stroke="#F5B90B"
            strokeWidth="2.8"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Donor Foundation",
    role: "Programme funding partner",
    slug: "donor-foundation",
    category: "funding",
    body: "Grant-making foundations fund multi-year programme cycles. Each grant is governed by a written agreement, a reporting calendar and an audit trail, and restricted funds are tracked separately from core income.",
    scope: "National and international grant-makers",
    focus: ["education", "women-youth-empowerment"],
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="h-11 w-11"
        fill="none"
        aria-hidden="true"
      >
        <g>
          <path
            d="M6 21c0 7.7 6.3 14 14 14s14-6.3 14-14"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          ></path>
          <path
            d="M12 20c0 4.4 3.6 8 8 8s8-3.6 8-8"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity=".55"
          ></path>
          <circle cx="20" cy="9" r="3.4" fill="#F5B90B"></circle>
        </g>
      </svg>
    ),
  },
  {
    name: "Corporate Partner",
    role: "Social investment partner",
    slug: "corporate-partner",
    category: "funding",
    body: "Companies partner through social investment, in-kind supply, employee volunteering and skills transfer — most often equipment, transport, training venues and professional mentoring for our fellows.",
    scope: "Ghanaian and diaspora-owned businesses",
    focus: ["women-youth-empowerment", "fellowships-conferences"],
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="h-11 w-11"
        fill="none"
        aria-hidden="true"
      >
        <g>
          <rect
            x="6"
            y="18"
            width="12"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="2.4"
          ></rect>
          <rect
            x="22"
            y="8"
            width="12"
            height="26"
            rx="2"
            stroke="currentColor"
            strokeWidth="2.4"
          ></rect>
          <path
            d="M26 15h4"
            stroke="#F5B90B"
            strokeWidth="2.4"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "NGO Network",
    role: "Joint delivery partner",
    slug: "ngo-network",
    category: "civil-society",
    body: "Joint delivery with other NGOs and coalitions lets us cover districts none of us could reach alone, share safeguarding standards, and speak with one voice in advocacy on rights, drug abuse and peace building.",
    scope: "National coalitions and district-level NGO platforms",
    focus: ["human-rights", "community-engagement"],
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="h-11 w-11"
        fill="none"
        aria-hidden="true"
      >
        <g>
          <circle
            cx="20"
            cy="10"
            r="3.4"
            stroke="currentColor"
            strokeWidth="2.3"
          ></circle>
          <circle
            cx="9"
            cy="29"
            r="3.4"
            stroke="currentColor"
            strokeWidth="2.3"
          ></circle>
          <circle
            cx="31"
            cy="29"
            r="3.4"
            stroke="currentColor"
            strokeWidth="2.3"
          ></circle>
          <path
            d="M18 13L11 26M22 13l7 13M12.5 29h15"
            stroke="#F5B90B"
            strokeWidth="2.1"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Diaspora Association",
    role: "Community giving partner",
    slug: "diaspora-association",
    category: "civil-society",
    body: "Hometown and diaspora associations fund and adopt specific community projects, and receive direct reporting with photographs, expenditure and community verification for everything they support.",
    scope: "Ghanaian associations abroad and hometown groups",
    focus: ["education", "community-engagement"],
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="h-11 w-11"
        fill="none"
        aria-hidden="true"
      >
        <g>
          <circle
            cx="20"
            cy="20"
            r="14"
            stroke="currentColor"
            strokeWidth="2.5"
          ></circle>
          <path
            d="M6 20h28M20 6c4.5 4 4.5 24 0 28M20 6c-4.5 4-4.5 24 0 28"
            stroke="currentColor"
            strokeWidth="1.9"
            opacity=".6"
          ></path>
          <circle cx="28" cy="13" r="2.6" fill="#F5B90B"></circle>
        </g>
      </svg>
    ),
  },
  {
    name: "Research Institute",
    role: "Evidence and learning partner",
    slug: "research-institute",
    category: "knowledge",
    body: "Universities and research institutes co-design our baselines and evaluations, host fellows, and review the evidence behind what we publish — so our impact claims can survive external scrutiny.",
    scope: "Universities, think tanks and evaluation partners",
    focus: ["fellowships-conferences", "education"],
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="h-11 w-11"
        fill="none"
        aria-hidden="true"
      >
        <g>
          <path
            d="M7 33V13M7 33h26"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          ></path>
          <path
            d="M13 27v-6M20 27V15M27 27v-9"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          ></path>
          <circle cx="27" cy="13" r="2.8" fill="#F5B90B"></circle>
        </g>
      </svg>
    ),
  },
];

/** Directory groups shown on the partnership page, in display order. */
export const partnerCategories: {
  id: PartnerCategory;
  label: string;
  body: string;
}[] = [
  {
    id: "government",
    label: "Government & public institutions",
    body: "District assemblies and the education and health directorates give our work its mandate, its data and its route into the official district plan.",
  },
  {
    id: "funding",
    label: "Funders & corporate partners",
    body: "Grant-makers, companies and social investors who resource programme cycles, equipment and the fellowship programme.",
  },
  {
    id: "civil-society",
    label: "Civil society & diaspora",
    body: "NGOs, coalitions, hometown associations and diaspora groups who deliver alongside us or adopt specific community projects.",
  },
  {
    id: "knowledge",
    label: "Knowledge & research",
    body: "Universities, think tanks and evaluation partners who test our evidence and host our fellows.",
  },
];

/** Partners belonging to one directory group. */
export function getPartnersByCategory(category: PartnerCategory): Partner[] {
  return partners.filter((partner) => partner.category === category);
}
