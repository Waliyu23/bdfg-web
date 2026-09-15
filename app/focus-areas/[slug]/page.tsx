import type { Metadata } from "next";
import Photo from "@/components/photo";
import Link from "@/components/link";
import { notFound } from "next/navigation";

import CheckIcon from "@/components/check-icon";
import CtaBand from "@/components/cta-band";
import FocusAreaCard from "@/components/focus-area-card";
import PageHero from "@/components/page-hero";
import {
  focusAreas,
  getFocusArea,
  getOtherFocusAreas,
} from "@/lib/focus-areas";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return focusAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getFocusArea(slug);
  if (!area) return {};

  return {
    title: area.title,
    description: area.lede,
    openGraph: {
      title: `${area.title} | Better Dream Foundation Ghana`,
      description: area.lede,
      images: [area.image],
    },
  };
}

export default async function FocusAreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = getFocusArea(slug);
  if (!area) notFound();

  const others = getOtherFocusAreas(slug);

  return (
    <>
      <PageHero
        eyebrow="Focus area"
        title={area.title}
        lede={area.lede}
        crumbs={[
          { label: "Focus Areas", href: "/focus-areas" },
          { label: area.title },
        ]}
      />

      <section className="pt-12 sm:pt-16">
        <div className="shell">
          <figure className="reveal overflow-hidden rounded-xl2 shadow-card">
            <Photo
              src={area.image}
              alt={area.imageAlt}
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1200px) 100vw, 1140px"
              className="h-[260px] w-full object-cover sm:h-[420px] lg:h-[480px]"
            />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <div className="reveal prose-body max-w-prose">
              <p className="!text-[1.0625rem] !leading-[1.75] !text-ink/85">
                {area.intro}
              </p>
            </div>

            <h2 className="reveal h2 mt-14 text-blue-900">
              What this looks like in practice
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {area.pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="reveal rounded-xl2 border border-line bg-white p-6 shadow-card"
                >
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="h3 mt-3 text-blue-800">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="reveal lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl2 bg-blue-900 p-7 text-white">
              <h2 className="font-display text-lg">
                What we are working towards
              </h2>
              <ul className="mt-5 space-y-4">
                {area.goals.map((goal) => (
                  <li
                    key={goal}
                    className="flex gap-3 text-sm leading-relaxed text-white/80"
                  >
                    <CheckIcon />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-white/15 pt-6">
                <p className="text-sm leading-relaxed text-white/65">
                  Want to support or partner on this focus area?
                </p>
                <Link href="/get-involved" className="btn-gold mt-4 w-full">
                  Get involved
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-blue-50">
        <div className="shell">
          <h2 className="reveal h2 text-blue-900">Other focus areas</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <FocusAreaCard key={other.slug} area={other} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
