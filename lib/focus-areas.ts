export type FocusPillar = {
  title: string;
  body: string;
};

export type FocusArea = {
  slug: string;
  title: string;
  lede: string;
  intro: string;
  pillars: FocusPillar[];
  goals: string[];
  image: string;
  imageAlt: string;
};

export const focusAreas: FocusArea[] = [
  {
    slug: "education",
    title: "Education",
    lede: "Keeping children in school and helping them learn well once they are there.",
    intro:
      "Education is the fastest route out of poverty available to a Ghanaian child — but only if the child stays enrolled, feels safe, and is taught well. We work with schools, districts and parents to remove the practical barriers that push children out of the classroom.",
    pillars: [
      {
        title: "School enrolment and retention drives",
        body: "Community sensitisation, back-to-school campaigns and follow-up on children at risk of dropping out.",
      },
      {
        title: "Learning materials and school kits",
        body: "Exercise books, uniforms, bags and sanitary supplies for pupils from low-income households.",
      },
      {
        title: "Girls education clubs",
        body: "Mentoring, menstrual health education and safe spaces that keep adolescent girls in school.",
      },
      {
        title: "Teacher and PTA support",
        body: "Refresher training, reading circles and stronger parent-teacher structures in deprived districts.",
      },
    ],
    goals: [
      "More children enrolled and retained through basic school",
      "Reduced drop-out among adolescent girls",
      "Stronger school governance at community level",
    ],
    image: "/images/focus-education.webp",
    imageAlt:
      "Pupils reading exercise books in a community classroom while a teacher writes on the chalkboard",
  },
  {
    slug: "human-rights",
    title: "Human Rights",
    lede: "Advocacy and legal awareness so that people know their rights and can claim them.",
    intro:
      "Rights on paper mean little to a person who does not know they exist. We take rights education into communities, support survivors of abuse to find help, and push duty bearers to respond when rights are violated.",
    pillars: [
      {
        title: "Rights education and legal literacy",
        body: "Community durbars, radio discussions and school sessions on constitutional and human rights.",
      },
      {
        title: "Ending harmful practices",
        body: "Campaigns against child marriage, gender-based violence and stigma against alleged witches and outcasts.",
      },
      {
        title: "Disability inclusion",
        body: "Working with persons with disabilities to demand accessible services, facilities and public information.",
      },
      {
        title: "Advocacy with duty bearers",
        body: "Engaging assemblies, traditional authorities and agencies so that complaints receive real responses.",
      },
    ],
    goals: [
      "Communities that can name and claim their rights",
      "Referral pathways that survivors actually use",
      "Local by-laws and services that include disabled citizens",
    ],
    image: "/images/focus-human-rights.webp",
    imageAlt:
      "Women seated under a large tree during a community rights and advocacy meeting, one standing and speaking",
  },
  {
    slug: "women-youth-empowerment",
    title: "Women & Youth Empowerment",
    lede: "Skills, capital and confidence so women and young people can earn a living with dignity.",
    intro:
      "Women and young people carry Ghana’s informal economy but hold the least capital and the fewest formal skills. Our empowerment work combines practical training with the savings, tools and market links needed to turn a skill into income.",
    pillars: [
      {
        title: "Vocational and technical skills",
        body: "Tailoring, catering, shea processing, solar installation, electricals and digital skills for out-of-school youth.",
      },
      {
        title: "Village savings and loans groups",
        body: "Community-owned savings groups that give women access to credit without predatory interest.",
      },
      {
        title: "Enterprise start-up support",
        body: "Business coaching, start-up kits and market linkages for graduates of our training programmes.",
      },
      {
        title: "Leadership and voice",
        body: "Coaching women and youth to take up seats and speak in local decision-making spaces.",
      },
    ],
    goals: [
      "Trained women and youth earning independent income",
      "Savings groups running without external funding",
      "More women and young people in local leadership roles",
    ],
    image: "/images/focus-women.webp",
    imageAlt:
      "Women processing shea butter and sewing fabric together in a small community workshop",
  },
  {
    slug: "community-engagement",
    title: "Community Engagement",
    lede: "Nothing is designed for a community without that community in the room.",
    intro:
      "Every programme we run begins with a community conversation and ends with a community review. Engagement is not a formality for us — it is how priorities are set, how work is monitored, and how results outlive our funding cycles.",
    pillars: [
      {
        title: "Community durbars and needs assessments",
        body: "Structured consultation with chiefs, elders, women’s groups and youth before any activity is designed.",
      },
      {
        title: "Water, sanitation and hygiene",
        body: "Boreholes, household latrine promotion and hygiene education driven by community WASH committees.",
      },
      {
        title: "Health and nutrition outreach",
        body: "Screening days, maternal health education and referrals with district health teams.",
      },
      {
        title: "Volunteer and committee development",
        body: "Training local volunteers and committees so activities continue when the project closes.",
      },
    ],
    goals: [
      "Programmes designed from community-stated priorities",
      "Functioning local committees maintaining facilities",
      "Higher uptake of basic health and WASH services",
    ],
    image: "/images/focus-community.webp",
    imageAlt:
      "A facilitator with a flipchart addressing a mixed community gathering of elders, women, men and children",
  },
  {
    slug: "fellowships-conferences",
    title: "Fellowships & Conferences",
    lede: "Convening, training and mentoring the next generation of Ghanaian changemakers.",
    intro:
      "Development work in Ghana is short of structured mentorship. Our fellowships and convenings give young professionals, student leaders and community organisers a place to learn, to be mentored, and to build the network their work depends on.",
    pillars: [
      {
        title: "Better Dream Fellowship",
        body: "A cohort-based programme pairing young leaders with mentors and a community project to deliver.",
      },
      {
        title: "Annual stakeholder conference",
        body: "Bringing together partners, districts, traditional leaders and youth groups to review shared priorities.",
      },
      {
        title: "Capacity-building workshops",
        body: "Proposal writing, monitoring and evaluation, safeguarding and financial management for small local groups.",
      },
      {
        title: "Exchange and study visits",
        body: "Peer learning visits between community groups in the south and the north of Ghana.",
      },
    ],
    goals: [
      "A growing alumni network of trained young leaders",
      "Small local organisations able to manage grants properly",
      "Shared learning across regions instead of duplicated effort",
    ],
    image: "/images/focus-fellowships.webp",
    imageAlt:
      "Young African fellows taking notes in a conference hall while a woman presents from a lectern",
  },
];

export function getFocusArea(slug: string): FocusArea | undefined {
  return focusAreas.find((area) => area.slug === slug);
}

export function getOtherFocusAreas(slug: string): FocusArea[] {
  return focusAreas.filter((area) => area.slug !== slug);
}
