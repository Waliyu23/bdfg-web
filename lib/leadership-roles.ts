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
    title: "Executive Director, Better Dream Foundation Ghana",
    group: "National Secretariat, Accra",
    tier: "national",
    body: "Holds overall responsibility for strategy, institutional partnerships and the performance of all programmes.",
    name: "Shaibu Mohammed",
    photo: "/images/executives/Shaibu.jpeg",
    about: ["Shaibu Mohammed is a young leader with extensive experience and a proven track record in leadership. As a dedicated philanthropist, he has positively impacted numerous lives through his altruistic efforts."],
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
    title: "National Executive Secretary, BDF-GH",
    group: "Governance",
    tier: "national",
    body: "Convenes the national executive, keeps its records and circulates decisions to the regions and committees.",
    name: "Iddrisu A. Asaana",
    photo: "/images/executives/Iddreissu.jpeg",
    about: ["I hold a BSc Mathematics Education certificate with five years of teaching experience and have completed my coursework and dissertation for a Master of Education in Mathematics. I am currently awaiting graduation."],
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
    title: "National Finance Officer",
    group: "Finance & Operations",
    tier: "national",
    body: "Responsible for financial controls, donor reporting, procurement, audit readiness and staff administration.",
    name: "Laarjah Jacob Yennumi",
    photo: "/images/executives/Jacob.jpeg",
    about: ["Final-year Social Studies and Geography Education student at Tamale College of Education, affiliated with Kwame Nkrumah University of Science and Technology, with experience in research and parliamentary affairs as a Volunteer Research Assistant in Pan-Africa Research Affairs. Director of Finance at Better Dream Foundation Ghana and ambassador for KNUST–Mastercard Foundation–Arizona State University, RBase Company Limited, and Aspire Leaders Program Alumni."],
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
    title: "Monitoring and Evaluation Officer",
    group: "MEL",
    tier: "national",
    body: "Builds the evidence base — baselines, indicators, field verification and the learning loop into programme design.",
    about: ["Samuel Kyei is a results-oriented ICT Educator and Monitoring and Evaluation (M&E) professional with experience in education delivery, curriculum implementation, and data-driven programme improvement. He currently supports the Ashanti Regional Education Directorate as a Regional Support Team Member (RSTM) for M&E, contributing to SHS/SHTS/STEM curriculum implementation through school monitoring, instructional supervision, and PLC facilitation."],
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
    name: "Samuel Kyei",
    photo: "/images/executives/Samuel.jpeg",
  },
  {
    slug: "policy-advisor",
    title: "Policy Advisor",
    group: "National Secretariat",
    tier: "national",
    body: "Advises the Foundation on evidence-informed policy and youth participation.",
    name: "Ibrahima Ziblim",
    photo: "/images/executives/Ibrahima.jpeg",
    about: ["Mr. Ibrahima Ziblim is the policy advisor at BDF Ghana and the Executive Director of Tomorrow’s Africa Alliance (ToAFA), a think tank dedicated to advancing evidence-informed policy alternatives and mobilising young people to contribute meaningfully to the realisation of the African Union’s Agenda 2063. He also serves as the vice president of the Giveback Foundation Ghana, where he supports initiatives aimed at social impact and community development. He is a former speaker of the Parliament of the African Students Association, AIU, Malaysia."],
    responsibilities: ["Provides policy advice and supports evidence-informed advocacy"],
    reportsTo: "Executive Director",
    appointment: "Appointed advisor",
    worksWith: ["Executive Director", "Programmes team"],
    focus: ["human-rights", "community-engagement"],
  },
  {
    slug: "internal-auditor",
    title: "Internal Auditor",
    group: "Finance & Operations",
    tier: "national",
    body: "Supports financial accountability, audit readiness and reporting systems.",
    name: "Bukari Suhuyini Frank Nnyayam",
    photo: "/images/executives/Bukari.jpeg",
    about: ["Bukari Suhuyini Frank Nnyayam is a highly motivated Economics graduate (First Class Honours) with a strong foundation in financial management, data analysis, and project support within the NGO and development sector. He brings hands-on experience in finance and administration, internal auditing, and community-based program implementation, with a proven track record of supporting donor-funded projects, maintaining financial accountability, and strengthening reporting systems."],
    responsibilities: ["Reviews controls, records and financial reporting"],
    reportsTo: "Executive Director",
    appointment: "Appointed post",
    worksWith: ["National Finance Officer", "Board Treasurer"],
    focus: [],
  },
  {
    slug: "national-graphic-designer",
    title: "National Graphic Designer",
    group: "Communications",
    tier: "national",
    body: "Leads visual communication and supports national and regional initiatives.",
    name: "Abdulwadud Shaibu",
    photo: "/images/executives/Abdulwadud.jpeg",
    about: ["Abdulwadud Shaibu is a dynamic and detail-oriented professional with a strong background in accounting, graphic design, and digital communication. He currently serves as the National Graphic Designer and Acting Greater Accra Regional Coordinator at Better Dream Foundation, where he contributes to impactful initiatives in youth empowerment, education, and community development."],
    responsibilities: ["Develops visual materials for the Foundation's programmes and communications"],
    reportsTo: "Executive Director",
    appointment: "Appointed post",
    worksWith: ["Communications team", "Regional coordinators"],
    focus: ["fellowships-conferences", "community-engagement"],
  },
  {
    slug: "it-manager",
    title: "IT Manager",
    group: "Information Technology",
    tier: "national",
    body: "Leads IT systems and supports secure, scalable digital services for the Foundation.",
    name: "Hussein Waliyu",
    photo: "/images/executives/Hussein.jpg",
    about: [
      "Hussein Waliyu is a Ghana-based IT professional, Full Stack Web Developer, and the CEO of DigiServe Solution. He specializes in building secure, scalable digital products and managing IT systems.",
      "He holds a Bachelor of Computer Science from Albukhary International University, completed in 2025. During his studies, he co-authored machine learning research, including work on an Exam Grades Prediction Mechanism (EGpM).",
      "His technical skills include React, Next.js, Node.js, Python, Django, TypeScript, MongoDB, MySQL, PostgreSQL, WordPress, and Linux system administration. His professional experience includes roles as CEO at DigiServe Solution, IT Manager at Better Dream Foundation Ghana, Developer at Global Service Consult, Web Developer & Digital Specialist at OXYZ Health & Wellness (2025–2026), and Full Stack Development Intern at Business Web Solutions (2025).",
    ],
    responsibilities: [
      "Manages the Foundation's IT systems and digital infrastructure",
      "Supports secure, reliable technology for programmes and operations",
      "Advises on digital products and technical systems",
    ],
    reportsTo: "Executive Director",
    appointment: "Appointed post",
    worksWith: ["Executive Director", "Communications team", "Programme teams"],
    focus: ["education", "community-engagement", "fellowships-conferences"],
  },
  {
    slug: "managing-director",
    title: "Managing Director",
    group: "National Secretariat",
    tier: "national",
    body: "Leads the Foundation's work and champions practical skills and opportunities for young women.",
    name: "Getrude Teffey",
    photo: "/images/executives/Getrude Teffey.jpeg",
    about: [
      "Getrude Teffey is a teacher by profession and an entrepreneur. She serves as Managing Director of Better Dream Foundation Ghana.",
      "She is passionate about helping young girls in the community gain skills and become independent through an initiative she founded. She also serves as the welfare chair in her department at the University of Education, Winneba, and as an administrator for Chrislaw Hub.",
    ],
    responsibilities: ["Leads the Foundation's work and supports its community initiatives"],
    reportsTo: "Executive Director",
    appointment: "Appointed post",
    worksWith: ["Executive Director", "Programme teams", "Community partners"],
    focus: ["women-youth-empowerment", "community-engagement"],
  },
  {
    slug: "legal-director",
    title: "Legal Director",
    group: "Governance & Legal Affairs",
    tier: "national",
    body: "Provides legal leadership and supports sound governance and accountability.",
    name: "Abigail Abrefi Antwi",
    photo: "/images/executives/Abigail Abrefi Antwi.jpeg",
    about: [
      "Abigail Abrefi Antwi is a Ghanaian lawyer and Associate at PaaJoy Law Group in Accra, where her practice spans commercial litigation, mining and energy law, immovable property law, family law and arbitration. A graduate of the University of Professional Studies, Accra, she earned her Bachelor of Laws in 2023 with distinction as the Law School's Overall Best Graduating Student and Best Student in Public Law, and she subsequently obtained her Qualifying Certificate in Law from the Ghana School of Law.",
      "Her professional formation includes roles at Egality Law Ghana, EBA Law Consult and the Judicial Service of Ghana. An active legal scholar, Abigail serves as Associate Editor of The Law Platform and International Editor of the Kabarak University Law Review in Kenya and has written extensively on emerging questions in Ghanaian law, from the regulation of virtual assets to constitutional oversight of anti-corruption institutions. She is also Legal Director of the Better Dream Foundation, and outside the law she is drawn to reading and the trombone.",
    ],
    responsibilities: ["Provides legal guidance and supports governance and compliance"],
    reportsTo: "Executive Director",
    appointment: "Appointed post",
    worksWith: ["Executive Director", "Board of Directors", "National executives"],
    focus: [],
  },
  {
    slug: "social-impact-leader",
    title: "Social Impact Leader",
    group: "National Secretariat",
    tier: "national",
    body: "Advances community development, youth empowerment and gender equity.",
    name: "Muminat Abdullateef",
    photo: "/images/executives/Muminat Abdullateef.jpeg",
    about: ["Muminat Abdullateef is a dedicated educator, certified professional coach, and social impact leader committed to community development and youth empowerment across Ghana, with a special focus on advancing women and girls. She leads strategic initiatives to secure vital resources, build meaningful partnerships, and drive sustainable community projects that foster lasting social impact and gender equity."],
    responsibilities: ["Leads initiatives and partnerships supporting community development and youth empowerment"],
    reportsTo: "Executive Director",
    appointment: "Appointed post",
    worksWith: ["Executive Director", "Programme teams", "Community partners"],
    focus: ["women-youth-empowerment", "community-engagement"],
  },
  {
    slug: "youth-leader",
    title: "Youth Leader",
    group: "National Secretariat",
    tier: "national",
    body: "Brings experience in student leadership, journalism and youth development.",
    name: "Musah Zaliya",
    photo: "/images/executives/MUSAH ZALIYA.jpeg",
    about: [
      "Musah Zaliya is a third-year Journalism and Media Studies student at Kwame Nkrumah University of Science and Technology (KNUST), with a strong passion for leadership, journalism, women’s empowerment, youth development, and community service. She was born and raised in Kumasi in the Ashanti Region and proudly traces her roots to Bole in the Savannah Region.",
      "Zaliya has demonstrated leadership from an early age, serving in various student leadership positions from primary school through university. At KNUST, she has served as the Women’s Commissioner of TEIN KNUST and the 2nd Vice President of NAGS KNUST, among other leadership roles. She has also served as Deputy Organizing Secretary of the CHoSS Muslim Association and was elected as the Youth Member of Parliament for the Sawla Tuna Kalba Constituency, subsequently serving as 2nd Deputy Speaker of the Youth Model Parliament.",
      "She is passionate about using journalism and leadership to promote accountability, development, social justice, and the empowerment of young people, particularly women. She has participated in youth leadership and politics programmes, including the Better Green Foundation Ghana Academy for Youth Leadership and Politics, where she developed skills in leadership, negotiation, communication, policy formation, team management, and personal and political branding.",
      "Beyond academics and leadership, Zaliya is interested in media, public speaking, women’s empowerment, entrepreneurship, and community development. She is a determined, disciplined, hardworking, compassionate, and ambitious young woman committed to continuous learning and making a meaningful impact in society.",
    ],
    responsibilities: ["Supports youth leadership and community development initiatives"],
    reportsTo: "Executive Director",
    appointment: "Youth leadership role",
    worksWith: ["Programme teams", "Regional coordinators", "Community partners"],
    focus: ["women-youth-empowerment", "community-engagement", "fellowships-conferences"],
  },
];

/** Every executive profile, board first, in listing order. */
export const executiveRoles: LeadershipRole[] = [
  ...boardRoles,
  ...nationalRoles,
].filter((role) => role.name);

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
