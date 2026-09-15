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

const photos = [
  {
    src: "/images/hero-community.webp",
    alt: "Women and young women of a northern Ghana community standing together in warm afternoon light",
    caption: "Community members, Savannah Region",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/focus-education.webp",
    alt: "Pupils reading at wooden desks while a teacher writes on the chalkboard",
    caption: "Basic school classroom support",
    span: "",
  },
  {
    src: "/images/gallery-2.webp",
    alt: "Women filling jerrycans at a village borehole hand pump",
    caption: "Borehole access, North Gonja",
    span: "",
  },
  {
    src: "/images/gallery-1.webp",
    alt: "Young people learning solar panel installation at a workbench",
    caption: "Solar skills training, Tamale",
    span: "lg:col-span-2",
  },
  {
    src: "/images/gallery-3.webp",
    alt: "Girls in school uniform in a circle with a mentor",
    caption: "Girls education club",
    span: "",
  },
  {
    src: "/images/focus-human-rights.webp",
    alt: "Women meeting under a tree during a rights education session",
    caption: "Rights education durbar",
    span: "",
  },
  {
    src: "/images/gallery-4.webp",
    alt: "Disability advocacy meeting in a community centre",
    caption: "Disability inclusion forum",
    span: "lg:col-span-2",
  },
  {
    src: "/images/about-field.webp",
    alt: "Field officers walking and speaking with community members on a dusty path",
    caption: "Field monitoring visit, Daboya",
    span: "lg:col-span-2",
  },
  {
    src: "/images/focus-fellowships.webp",
    alt: "Fellows seated in a conference hall during a presentation",
    caption: "Annual stakeholder conference",
    span: "lg:col-span-2",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery & impact"
        title="The work, as it looks on the ground."
        lede="Classrooms, durbars, boreholes, workshops and forums — photographs from the communities where our programmes run, with the numbers behind them."
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
