import type { Metadata } from "next";
import PhotoGallery from "@/components/photo-gallery";

import CtaBand from "@/components/cta-band";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Gallery & Impact",
  description:
    "Photographs from the communities where Better Dream Foundation Ghana programmes run — classrooms, durbars, boreholes, workshops and forums — with the numbers behind them.",
};

const stats = [
  {
    value: "24",
    suffix: "+",
    label: "Years of community service",
    note: "Incorporated in Ghana since 2001",
  },
  {
    value: "3",
    suffix: "",
    label: "Operational offices",
    note: "Accra, Tamale and Daboya",
  },
  {
    value: "5",
    suffix: "",
    label: "Programme focus areas",
    note: "From education to fellowships",
  },
  {
    value: "100",
    suffix: "%",
    label: "Non-political, non-profit",
    note: "Accountable to the communities we serve",
  },
];

const galleryCategories = [
  {
    title: "Community Engagement",
    encodedTitle: "Community%20Engagement",
    count: 5,
    alt: "Volunteers taking part in a community engagement programme",
  },
  {
    title: "Education",
    encodedTitle: "Education",
    count: 6,
    alt: "Schoolchildren and community members at an education programme",
  },
  {
    title: "Fellowships & Conferences",
    encodedTitle: "Fellowships%20%26%20Conferences",
    count: 3,
    alt: "Participants attending a fellowship or conference programme",
  },
  {
    title: "Human Rights",
    encodedTitle: "Human%20Rights",
    count: 3,
    alt: "Students and community members at a human rights programme",
  },
  {
    title: "Women & Youth Empowerment",
    encodedTitle: "Women%20%26%20Youth%20Empowerment",
    count: 4,
    alt: "Participants at a women and youth empowerment programme",
  },
];

const photos = galleryCategories.flatMap((category) =>
  Array.from({ length: category.count }, (_, index) => {
    const number = index + 1;
    return {
      src: `/images/gallery/${number}%20${category.encodedTitle}.jpeg`,
      alt: category.alt,
      caption: `${category.title} programme ${number}`,
      span: number === 1 ? "lg:col-span-2" : "",
    };
  }),
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery & impact"
        title="The work, as it looks on the ground."
        lede="Classrooms, durbars, boreholes, workshops and forums — photographs from the communities where our programmes run, with the numbers behind them."
        image="/images/Heros/Gallery%20Hero.jpeg"
        imageAlt="Young people gathered outdoors during a community programme"
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="section">
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">By the numbers</p>
            <h2 className="h2 mt-5 text-blue-900">Impact at a glance</h2>
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="reveal rounded-xl2 border border-line bg-white p-6 shadow-card"
              >
                <dt className="font-display text-[2.25rem] leading-none text-blue-700">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-gold-500">{stat.suffix}</span>
                  )}
                </dt>
                <dd className="mt-4">
                  <span className="block text-sm font-semibold text-blue-900">
                    {stat.label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-ink/55">
                    {stat.note}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="reveal mt-6 max-w-2xl text-xs leading-relaxed text-ink/45">
            Programme-level figures — pupils supported, groups formed, boreholes
            delivered — are verified per project and published in our annual
            reports. Contact the secretariat for the current report.
          </p>
        </div>
      </section>

      <section className="section bg-blue-50">
        <div className="shell-wide">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Photographs</p>
            <h2 className="h2 mt-5 text-blue-900">From our programmes</h2>
          </div>
          <PhotoGallery photos={photos} />

          <p className="reveal mt-8 text-xs leading-relaxed text-ink/45">
            Photographs are taken with the consent of participants. Images of
            children are used only where a parent, guardian or school has given
            permission.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Be part of it"
        title="Every photograph here started with someone deciding to help."
        body="Volunteer your time, partner with us on a programme, or make a donation towards school kits, savings groups and water points."
      />
    </>
  );
}
