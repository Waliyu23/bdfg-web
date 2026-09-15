import type { Metadata } from "next";
import Photo from "@/components/photo";
import Link from "@/components/link";

import ArrowRight from "@/components/arrow-right";
import PageHero from "@/components/page-hero";
import { news } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Stories",
  description:
    "Field reports, programme updates and announcements from the three offices of Better Dream Foundation Ghana.",
};

export default function NewsIndexPage() {
  const [featured, ...rest] = news;

  return (
    <>
      <PageHero
        eyebrow="News & stories"
        title="What we have been doing, and what we learned."
        lede="Field reports, programme updates and announcements from our three offices. We publish the results that were disappointing as well as the ones that worked."
        crumbs={[{ label: "News" }]}
      />

      <section className="pt-12 sm:pt-16">
        <div className="shell">
          <article className="reveal grid gap-8 overflow-hidden rounded-xl2 border border-line bg-white shadow-card lg:grid-cols-2 lg:gap-0">
            <Link
              href={`/news/${featured.slug}`}
              className="group block overflow-hidden"
            >
              <Photo
                src={featured.image}
                alt={featured.imageAlt}
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[340px] lg:h-full"
              />
            </Link>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink/50">
                <span className="font-semibold uppercase tracking-[0.12em] text-gold-600">
                  Latest
                </span>
                <span aria-hidden="true">·</span>
                <span>{featured.category}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={featured.date}>{featured.dateDisplay}</time>
              </p>
              <h2 className="mt-4 font-display text-[1.6rem] leading-[1.14] text-blue-900 sm:text-[2rem]">
                <Link href={`/news/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                {featured.summary}
              </p>
              <Link
                href={`/news/${featured.slug}`}
                className="link-underline mt-7 self-start"
              >
                Read the full story
                <ArrowRight />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className="reveal text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">
            More updates
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <article
                key={item.slug}
                className="reveal group flex flex-col overflow-hidden rounded-xl2 border border-line bg-white shadow-card transition-shadow hover:shadow-lift"
              >
                <Link
                  href={`/news/${item.slug}`}
                  className="block overflow-hidden"
                >
                  <Photo
                    src={item.image}
                    alt={item.imageAlt}
                    width={1536}
                    height={1024}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink/50">
                    <span className="font-semibold uppercase tracking-[0.12em] text-gold-600">
                      {item.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={item.date}>{item.dateDisplay}</time>
                  </p>
                  <h3 className="mt-3 font-display text-lg leading-snug text-blue-800">
                    <Link href={`/news/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                    {item.summary}
                  </p>
                  {item.location && (
                    <p className="mt-5 text-xs text-ink/45">{item.location}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="reveal relative overflow-hidden rounded-xl2 bg-blue-800 px-6 py-14 text-white sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[18px] border-white/5"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                <span
                  aria-hidden="true"
                  className="block h-[2px] w-6 bg-gold-400"
                />
                Stay close to the work
              </p>
              <h2 className="font-display text-[1.7rem] leading-[1.14] sm:text-[2.15rem]">
                Want these updates directly?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                Write to the secretariat and we will add you to our mailing list
                for programme updates, fellowship calls and annual reports.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-gold">
                  Contact us
                </Link>
                <Link href="/gallery" className="btn-onblue">
                  See the gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
