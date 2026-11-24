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
  gallery?: NewsPhoto[];
  paragraphs: string[];
};

export type NewsPhoto = {
  src: string;
  alt: string;
  caption: string;
};

/** Sorted newest first. */
export const news: NewsItem[] = [
  {
    slug: "international-public-diplomacy-contest-launch",
    title:
      "Better Dream Foundation Ghana launches International Public Diplomacy Contest",
    date: "2026-11-23",
    dateDisplay: "23 November 2026",
    category: "Public Diplomacy",
    summary:
      "The Foundation and the Russian House of the Center for Public Diplomacy launched the World Peoples Assembly contest in Accra, bringing together more than 15 civil society organizations, students and policy makers.",
    lede:
      "The Better Dream Foundation Ghana, with support from the Russian House of the Center for Public Diplomacy, launched the International Public Diplomacy Contest in Accra on 23 November 2026. Organized by the World Peoples Assembly, the event brought together more than 15 civil society organizations, students and policy makers to discuss citizen-led diplomacy and international cooperation.",
    location: "Accra, Ghana",
    image:
      "/images/News/News-Russian%20partner/Feature%20image.jpeg",
    imageAlt:
      "Participants at the launch of the International Public Diplomacy Contest in Accra",
    caption: "Launch of the International Public Diplomacy Contest, Accra",
    gallery: [
      {
        src: "/images/News/News-Russian%20partner/1.jpeg",
        alt: "Participants gathered for the contest launch",
        caption: "Participants at the launch",
      },
      {
        src: "/images/News/News-Russian%20partner/2.jpeg",
        alt: "Attendees watching a presentation during the launch",
        caption: "Attendees follow a presentation",
      },
      {
        src: "/images/News/News-Russian%20partner/3.jpeg",
        alt: "A speaker addresses participants at the event",
        caption: "A presentation during the launch",
      },
      {
        src: "/images/News/News-Russian%20partner/4.jpeg",
        alt: "Event participants pose together in front of the partner banner",
        caption:
          "Participants with representatives of the Russian House of the Center for Public Diplomacy",
      },
      {
        src: "/images/News/News-Russian%20partner/5.jpeg",
        alt: "Participants seated during the launch event",
        caption: "Participants during the discussion",
      },
      {
        src: "/images/News/News-Russian%20partner/6.jpeg",
        alt: "Attendees listen to a presentation in the conference room",
        caption: "The audience during a presentation",
      },
      {
        src: "/images/News/News-Russian%20partner/7.jpeg",
        alt: "A World Peoples Assembly presentation displayed at the event",
        caption: "World Peoples Assembly presentation",
      },
      {
        src: "/images/News/News-Russian%20partner/8.jpeg",
        alt: "A presenter speaks to attendees at the launch",
        caption: "A presentation to event attendees",
      },
      {
        src: "/images/News/News-Russian%20partner/inline-image-1.jpeg",
        alt: "Representatives pose together at the launch",
        caption: "Representatives at the event",
      },
      {
        src: "/images/News/News-Russian%20partner/inline-image-2.jpeg",
        alt: "Representatives pose in front of the partner banner",
        caption: "Partner representatives",
      },
    ],
    paragraphs: [
      "Madam Yanina, Deputy Executive Director of the World Peoples Assembly, introduced the organization's mission, structure and work. She explained how the Assembly brings people, civil society groups and communities from different countries together to build dialogue, mutual understanding and cooperation beyond traditional government channels.",
      "She outlined the aims of the International Public Diplomacy Contest, which gives young people, civil society organizations and community leaders a platform to present ideas and projects that promote peace, intercultural exchange and international partnership. Madam Yanina formally opened the call for applications and encouraged eligible individuals and organizations across Ghana to participate.",
      "The Russian House of the Center for Public Diplomacy also introduced its mandate and activities. Its representatives described its role in supporting public diplomacy initiatives and fostering people-to-people ties, and invited organizations at the launch to explore possible partnerships.",
      "Participants welcomed the initiative with enthusiasm. Representatives of civil society organizations, students and policy makers said the contest offers an opportunity for Ghanaian voices to be heard internationally. Many expressed interest in applying and building lasting links with international partners.",
      "The organizers said the launch marks the beginning of a wider outreach effort to encourage broad participation. Interested applicants can contact Better Dream Foundation Ghana for details about eligibility, application requirements and deadlines.",
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
