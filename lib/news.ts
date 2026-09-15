export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  dateDisplay: string;
  category: string;
  summary: string;
  lede: string;
  location: string;
  image: string;
  imageAlt: string;
  caption: string;
  paragraphs: string[];
};

/** Sorted newest first. */
export const news: NewsItem[] = [
  {
    slug: "daboya-girls-education-club-launch",
    title: "Girls education clubs launched in five Daboya basic schools",
    date: "2026-08-18",
    dateDisplay: "18 August 2026",
    category: "Education",
    summary:
      "Five basic schools in the Daboya area now run weekly girls clubs combining mentoring, menstrual health education and study support.",
    lede: "Five basic schools in the Daboya area now run weekly girls clubs combining mentoring, menstrual health education and study support.",
    location: "Daboya, Savannah Region",
    image: "/images/gallery-3.webp",
    imageAlt:
      "Teenage girls in school uniform seated in a circle with a female mentor",
    caption: "Daboya, Savannah Region",
    paragraphs: [
      "Better Dream Foundation Ghana has launched girls education clubs in five basic schools around Daboya in the Savannah Region, working with head teachers and district education officers to set up a weekly meeting in each school.",
      "Each club is facilitated by a trained female mentor drawn from the community and follows a simple structure: a study hour, a mentoring conversation, and a health and hygiene session. Schools have also received a term’s supply of sanitary pads, exercise books and reading materials.",
      "Teachers involved in the pilot report that absenteeism among girls in upper primary has already begun to fall, particularly during examination weeks. Parent-teacher associations in three of the five schools have volunteered to take over the cost of refreshments for the clubs from the next term.",
      "The Foundation will review the clubs at the end of the academic year with the district directorate before extending the model to additional communities in North Gonja.",
    ],
  },
  {
    slug: "community-durbar-north-gonja-wash",
    title: "North Gonja communities set their own WASH priorities at durbar",
    date: "2026-07-02",
    dateDisplay: "2 July 2026",
    category: "Community Engagement",
    summary:
      "Chiefs, women’s groups and youth leaders from seven communities ranked water, sanitation and hygiene needs ahead of the next planning cycle.",
    lede: "Chiefs, women’s groups and youth leaders from seven communities ranked water, sanitation and hygiene needs ahead of the next planning cycle.",
    location: "North Gonja District",
    image: "/images/focus-community.webp",
    imageAlt:
      "A facilitator with a flipchart addressing a community gathering under a mango tree",
    caption: "North Gonja District",
    paragraphs: [
      "Seven communities in the North Gonja District gathered for a two-day durbar convened by Better Dream Foundation Ghana to review water, sanitation and hygiene conditions and to agree on priorities for the coming year.",
      "Participants ranked borehole rehabilitation, household latrine construction and hygiene education as their top three concerns. Two communities also raised the difficulty faced by persons with disabilities in reaching existing water points.",
      "Each community elected or refreshed a WASH committee, with a requirement that at least half of the members be women and that one seat be reserved for a person with a disability.",
      "The ranked priorities from the durbar now form the basis of the Foundation’s proposal to partners for the next funding cycle, and will be read back to the same communities at a review meeting before any work begins.",
    ],
  },
  {
    slug: "better-dream-fellowship-cohort-open",
    title: "Applications open for the next Better Dream Fellowship cohort",
    date: "2026-06-11",
    dateDisplay: "11 June 2026",
    category: "Fellowships",
    summary:
      "The fellowship pairs young Ghanaian leaders with experienced mentors and a community project they must deliver end to end.",
    lede: "The fellowship pairs young Ghanaian leaders with experienced mentors and a community project they must deliver end to end.",
    location: "Accra",
    image: "/images/focus-fellowships.webp",
    imageAlt:
      "Fellows seated in a conference hall taking notes during a presentation",
    caption: "Accra",
    paragraphs: [
      "Applications are open for the next cohort of the Better Dream Fellowship, a structured programme for young Ghanaians who are already doing community work and want to do it better.",
      "Fellows are matched with a mentor, take part in monthly training on project design, safeguarding, monitoring and financial management, and are required to design and deliver a small community project in one of the Foundation’s focus areas.",
      "The programme is deliberately practical. Fellows present their project results to a panel of partners and community representatives at the end of the cycle, and the strongest projects are considered for follow-on support.",
      "Prospective applicants can write to the secretariat for the current application window and eligibility details.",
    ],
  },
  {
    slug: "youth-solar-skills-training-tamale",
    title: "Youth complete solar installation training in Tamale",
    date: "2026-05-05",
    dateDisplay: "5 May 2026",
    category: "Women & Youth Empowerment",
    summary:
      "A cohort of out-of-school young people finished a twelve-week course in solar panel installation and basic electricals.",
    lede: "A cohort of out-of-school young people finished a twelve-week course in solar panel installation and basic electricals.",
    location: "Tamale, Northern Region",
    image: "/images/gallery-1.webp",
    imageAlt:
      "Young men and women learning solar panel wiring at a workbench with an instructor",
    caption: "Tamale, Northern Region",
    paragraphs: [
      "A cohort of out-of-school young men and women in Tamale has completed a twelve-week practical course in solar panel installation, basic electrical wiring and small system maintenance.",
      "The course was delivered in partnership with local artisans, with most contact hours spent on real installations rather than in the classroom. Graduates received a basic tool kit and were introduced to installers in Tamale who take on apprentices.",
      "Participants also completed sessions on costing a job, keeping simple records and handling customers, because the Foundation’s experience is that technical skill alone rarely converts into steady income.",
      "Six graduates have since registered informal businesses together, and the Foundation is tracking the cohort for twelve months to measure earnings rather than only attendance.",
    ],
  },
  {
    slug: "disability-inclusion-forum-accra",
    title:
      "Disability inclusion forum presses for accessible district services",
    date: "2026-03-21",
    dateDisplay: "21 March 2026",
    category: "Human Rights",
    summary:
      "Persons with disabilities from three regions met district officials to demand accessible facilities and public information.",
    lede: "Persons with disabilities from three regions met district officials to demand accessible facilities and public information.",
    location: "Accra",
    image: "/images/gallery-4.webp",
    imageAlt:
      "Participants including a man in a wheelchair and a woman with crutches raising hands at a community meeting",
    caption: "Accra",
    paragraphs: [
      "Representatives of disabled persons organisations from the Greater Accra, Northern and Savannah Regions met with district officials at a forum convened by Better Dream Foundation Ghana to discuss access to public services.",
      "Speakers focused on three issues: physical access to district offices and health facilities, the availability of public information in accessible formats, and the practical use of the district assemblies’ disability fund.",
      "The forum closed with a set of commitments from participating districts, including a review of ramp and washroom access at named facilities and a standing invitation for disabled persons organisations to attend planning meetings.",
      "The Foundation will publish a short follow-up review of those commitments and continue to support the organisations to hold the districts to them.",
    ],
  },
  {
    slug: "savings-groups-women-daboya",
    title: "Women’s savings groups reach full self-management in Daboya",
    date: "2026-01-29",
    dateDisplay: "29 January 2026",
    category: "Women & Youth Empowerment",
    summary:
      "Village savings and loans groups formed with the Foundation are now running their own cycles, ledgers and share-outs.",
    lede: "Village savings and loans groups formed with the Foundation are now running their own cycles, ledgers and share-outs.",
    location: "Daboya, Savannah Region",
    image: "/images/focus-women.webp",
    imageAlt:
      "Women working together processing shea butter and sewing in a community workshop",
    caption: "Daboya, Savannah Region",
    paragraphs: [
      "Several village savings and loans groups formed with support from Better Dream Foundation Ghana in and around Daboya have completed a full savings cycle without staff facilitation, managing their own meetings, ledgers and share-outs.",
      "The groups give women access to small loans for petty trading, shea processing and farm inputs at interest rates they set themselves, keeping the interest inside the group rather than paying it to an outside lender.",
      "Group members have used loans for school fees, medical costs and stock for market days. Several have joined together to buy processing equipment they could not afford individually.",
      "The Foundation’s role has now reduced to periodic audit support and refresher training for record keepers, which is the intended end point for every group we help to form.",
    ],
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return news.find((item) => item.slug === slug);
}

export function getRelatedNews(slug: string, limit = 3): NewsItem[] {
  return news.filter((item) => item.slug !== slug).slice(0, limit);
}

export const newsCategories: string[] = Array.from(
  new Set(news.map((item) => item.category)),
);
