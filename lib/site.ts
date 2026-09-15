export const site = {
  name: "Better Dream Foundation Ghana",
  shortName: "Better Dream Foundation",
  region: "Ghana",
  tagline: "Together we will make better future",
  founded: "2001",
  url: "https://betterdreamfoundationghana.org",
  description:
    "Better Dream Foundation Ghana works with marginalised communities in Accra, Tamale and Daboya — expanding access to social services and promoting sustainable development since 2001.",
  shortDescription:
    "Expanding access to social services and promoting sustainable development with marginalised communities across Ghana since 2001.",
  email: "betterdreamfoundationghana@gmail.com",
  phone: "+233 59 739 9216",
  phoneHref: "tel:+233597399216",
  offices: ["Accra", "Tamale", "Daboya"],
  officesLabel: "Accra · Tamale · Daboya",
  logo: "/images/logo-crest.png",
  heroImage: "/images/hero-community.webp",
} as const;

export type Office = {
  city: string;
  region: string;
  role: string;
  body: string;
};

/** The three offices the Foundation operates from. */
export const officeLocations: Office[] = [
  {
    city: "Accra",
    region: "Greater Accra Region",
    role: "National secretariat",
    body: "Partnerships, advocacy and national programme coordination.",
  },
  {
    city: "Tamale",
    region: "Northern Region",
    role: "Northern zonal office",
    body: "Education, livelihoods and rights programming across the north.",
  },
  {
    city: "Daboya",
    region: "Savannah Region",
    role: "Community field office",
    body: "Day-to-day delivery with community groups in North Gonja.",
  },
];

/** Google Maps search link for an office. */
export function officeMapUrl(office: Office): string {
  const query = `${office.city}, ${office.region}, Ghana`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export type NavLink = {
  href: string;
  label: string;
};

export const primaryNav: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/focus-areas", label: "Focus Areas" },
  { href: "/leadership", label: "Leadership" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Get Involved" },
];

export const exploreNav: NavLink[] = [
  { href: "/about", label: "About us" },
  { href: "/leadership", label: "Leadership" },
  { href: "/news", label: "News & stories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "x" | "instagram" | "youtube" | "linkedin";
};

export const socials: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/betterdreamfoundationghana",
    icon: "facebook",
  },
  { label: "X (Twitter)", href: "https://x.com/bdfghana", icon: "x" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/betterdreamfoundationghana",
    icon: "instagram",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@betterdreamfoundationghana",
    icon: "youtube",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/better-dream-foundation-ghana",
    icon: "linkedin",
  },
];
