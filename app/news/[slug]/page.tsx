import type { Metadata } from "next";
import Photo from "@/components/photo";
import Link from "@/components/link";
import { notFound } from "next/navigation";

import CtaBand from "@/components/cta-band";
import NewsCard from "@/components/news-card";
import PageHero from "@/components/page-hero";
import PhotoGallery from "@/components/photo-gallery";
import { getNewsItem, getRelatedNews, news } from "@/lib/news";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) return {};
  const imageUrl = new URL(
    item.image,
    "https://bdfg-web.vercel.app",
  ).toString();

  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      title: item.title,
      description: item.summary,
      type: "article",
      publishedTime: item.date,
      images: [{ url: imageUrl, alt: item.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.summary,
      images: [{ url: imageUrl, alt: item.imageAlt }],
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) notFound();

  const related = getRelatedNews(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    datePublished: item.date,
    articleSection: item.category,
    description: item.summary,
    publisher: { "@type": "NGO", name: site.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={item.category}
        title={item.title}
        image="/images/Heros/News%20Hero.jpeg"
        imageAlt="Participants at the Ghana Civil Society Forum"
        crumbs={[{ label: "News", href: "/news" }, { label: item.category }]}
      />

      <section className="pt-12 sm:pt-16">
        <div className="shell">
          <figure className="reveal overflow-hidden rounded-xl2 shadow-card">
            <Photo
              src={item.image}
              alt={item.imageAlt}
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1200px) 100vw, 1140px"
              className="h-[240px] w-full object-cover sm:h-[400px] lg:h-[460px]"
            />
            {item.caption && (
              <figcaption className="border-t border-line bg-white px-5 py-3 text-xs text-ink/50">
                {item.caption}
              </figcaption>
            )}
          </figure>
        </div>
      </section>

      <article className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <aside className="reveal lg:sticky lg:top-28 lg:self-start">
            <dl className="space-y-5 border-t border-line pt-6 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/45">
                  Published
                </dt>
                <dd className="mt-1 text-ink/75">
                  <time dateTime={item.date}>{item.dateDisplay}</time>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/45">
                  Focus area
                </dt>
                <dd className="mt-1 text-ink/75">{item.category}</dd>
              </div>
              {item.location && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/45">
                    Location
                  </dt>
                  <dd className="mt-1 text-ink/75">{item.location}</dd>
                </div>
              )}
            </dl>
            <Link href="/news" className="link-underline mt-8">
              All news &amp; stories
            </Link>
          </aside>

          <div className="reveal max-w-prose">
            <p className="font-display text-[1.25rem] leading-[1.5] text-blue-800">
              {item.lede}
            </p>
            <div className="mt-8 space-y-5">
              {item.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-[1.8] text-ink/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-xl2 border-l-4 border-gold-400 bg-gold-50 p-6">
              <p className="text-sm leading-relaxed text-ink/75">
                Questions about this work, or want to support it? Write to{" "}
                <a
                  className="font-semibold text-blue-700 underline decoration-gold-500 decoration-2 underline-offset-2"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </article>

      {item.gallery && item.gallery.length > 0 && (
        <section className="section bg-blue-50">
          <div className="shell-wide">
            <div className="reveal max-w-2xl">
              <p className="eyebrow">Event photos</p>
              <h2 className="h2 mt-5 text-blue-900">
                Moments from the launch
              </h2>
            </div>
            <PhotoGallery
              photos={item.gallery.map((photo) => ({ ...photo, span: "" }))}
              showCaptions={false}
            />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section bg-blue-50">
          <div className="shell">
            <h2 className="reveal h2 text-blue-900">More from the field</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((other) => (
                <NewsCard key={other.slug} item={other} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
