import type { Metadata } from "next";
import Photo from "@/components/photo";
import Link from "@/components/link";

import ArrowRight from "@/components/arrow-right";
import CtaBand from "@/components/cta-band";
import PageHero from "@/components/page-hero";
import { focusAreas } from "@/lib/focus-areas";

export const metadata: Metadata = {
  title: "Focus Areas",
  description:
    "Five focus areas, one connected agenda: education, human rights, women and youth empowerment, community engagement, and fellowships and conferences.",
};

export default function FocusAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Five focus areas, one connected agenda."
        lede="Each area stands on its own, but they reinforce each other: a girl who stays in school, whose mother has credit, in a community that knows its rights, served by a district that shows up."
        image="/images/hero-page-focus.webp"
        imageAlt="Community members gathered for a human rights advocacy programme"
        crumbs={[{ label: "Focus Areas" }]}
      />

      <section className="section">
        <div className="shell space-y-20 sm:space-y-28">
          {focusAreas.map((area, index) => (
            <article
              key={area.slug}
              className={`reveal grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="overflow-hidden rounded-xl2 shadow-card">
                <Photo
                  src={area.image}
                  alt={area.imageAlt}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="h-[260px] w-full object-cover sm:h-[380px]"
                />
              </figure>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                  Focus area {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="h2 mt-4 text-blue-900">{area.title}</h2>
                <p className="mt-5 text-base leading-[1.75] text-ink/75">
                  {area.intro}
                </p>
                <ul className="mt-7 space-y-2.5">
                  {area.pillars.slice(0, 3).map((pillar) => (
                    <li
                      key={pillar.title}
                      className="flex gap-3 text-sm text-ink/70"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                      />
                      <span>{pillar.title}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/focus-areas/${area.slug}`}
                  className="btn-primary mt-8"
                >
                  Explore {area.title}
                  <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
