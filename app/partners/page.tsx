import type { Metadata } from "next";

import CheckIcon from "@/components/check-icon";
import CtaBand from "@/components/cta-band";
import Link from "@/components/link";
import PartnerMarquee from "@/components/partner-marquee";
import PageHero from "@/components/page-hero";
import { focusAreas, getFocusArea } from "@/lib/focus-areas";
import {
  getPartnersByCategory,
  partnerCategories,
  partners,
  type Partner,
} from "@/lib/partners";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partnership",
  description:
    "The district assemblies, directorates, funders, NGOs, diaspora associations and research institutes Better Dream Foundation Ghana works with — and how to become a partner.",
};

/** Headline numbers for the partnership overview strip. */
const partnershipStats = [
  { value: String(partners.length), label: "Partner organisations listed" },
  { value: "4", label: "Kinds of partnership" },
  { value: "5", label: "Regions covered" },
  { value: site.founded, label: "Partnering since" },
];

/** The four practical routes into a partnership with the Foundation. */
const partnershipRoutes = [
  {
    title: "Co-deliver a programme",
    body: "Bring your mandate, staff or field presence and we will design the delivery model together, with one workplan, one safeguarding standard and shared reporting.",
    fit: "Best for district assemblies, directorates and NGOs",
  },
  {
    title: "Fund a programme cycle",
    body: "Restricted or core funding against a written agreement, an agreed indicator set and a reporting calendar you set. Every cedi is tracked to the activity it paid for.",
    fit: "Best for foundations, companies and institutional donors",
  },
  {
    title: "Adopt a community project",
    body: "Choose a school, water point, savings group or youth cohort and receive direct reporting on it — expenditure, photographs and verification from the community itself.",
    fit: "Best for diaspora groups and hometown associations",
  },
  {
    title: "Partner on evidence",
    body: "Co-design baselines and evaluations, host our fellows, or use our field platform for applied research that communities themselves benefit from.",
    fit: "Best for universities, think tanks and evaluators",
  },
];

/** What the Foundation commits to for every partner. */
const partnerCommitments = [
  {
    title: "A written partnership agreement",
    body: "Scope, budget, safeguarding, data protection, intellectual property and exit terms are agreed in writing before work starts.",
  },
  {
    title: "Reporting on your calendar",
    body: "Narrative and financial reporting in your format, on your dates — not ours — with the indicators agreed at the outset.",
  },
  {
    title: "Open books and open field",
    body: "Partners are welcome on monitoring visits in Accra, Tamale and Daboya, and may verify any figure we publish.",
  },
  {
    title: "Honest reporting of failure",
    body: "Where a programme underperforms, you hear it from us first, with what we are changing and why.",
  },
];

/** Directory card for one partner organisation. */
function PartnerCard({ partner }: { partner: Partner }) {
  const areas = partner.focus
    .map((slug) => getFocusArea(slug))
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

  return (
    <article className="reveal flex flex-col rounded-xl2 border border-line bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-7">
      <div className="flex items-start gap-4">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={partner.name}
              width={64}
              height={64}
              loading="lazy"
              decoding="async"
              className="h-10 w-10 object-contain"
            />
          ) : (
            partner.icon
          )}
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-xl leading-snug text-blue-900">
            {partner.name}
          </h3>
          <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-gold-600">
            {partner.role}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-ink/70">{partner.body}</p>

      <dl className="mt-6 border-t border-line pt-5 text-sm">
        <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
          Where it operates
        </dt>
        <dd className="mt-1.5 leading-relaxed text-ink/75">{partner.scope}</dd>
      </dl>

      {areas.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/focus-areas/${area.slug}`}
              className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink/70 transition-colors duration-200 hover:border-gold-400 hover:text-blue-900"
            >
              {area.title}
            </Link>
          ))}
        </div>
      )}

      {partner.url && (
        <a
          href={partner.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 transition-colors duration-200 hover:text-blue-900"
        >
          Visit website
          <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  );
}

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership"
        title="The organisations we build this work with."
        lede="Nothing we deliver happens alone. District assemblies give us mandate, directorates give us systems, funders give us runway, NGOs and diaspora groups give us reach, and research partners keep us honest."
        image="/images/hero-page-partners.webp"
        imageAlt="Civil society representatives gathered for a public forum"
        crumbs={[{ label: "Partnership" }]}
      />

      {/* Overview strip */}
      <section className="border-b border-line bg-paper py-10">
        <div className="shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {partnershipStats.map((stat) => (
            <div key={stat.label} className="reveal">
              <p className="font-display text-[2rem] leading-none text-blue-900">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Directory */}
      <section className="section">
        <div className="shell">
          <div className="reveal max-w-3xl">
            <p className="eyebrow">Our partners</p>
            <h2 className="h2 mt-5 text-blue-900">
              Every partner, grouped by what they bring.
            </h2>
            <p className="lede mt-5">
              The directory below lists each standing partnership, what it
              delivers in practice, where it operates and which focus areas it
              contributes to.
            </p>
          </div>

          <nav
            aria-label="Partner categories"
            className="reveal mt-10 flex flex-wrap gap-2"
          >
            {partnerCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-blue-900 transition-colors duration-200 hover:border-gold-400"
              >
                {category.label}
              </a>
            ))}
          </nav>

          <div className="reveal mt-12">
            <h3 className="font-display text-xl text-blue-900">
              Partner logos
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/65">
              The organisations represented in our partnership network.
            </p>
            <div className="mt-6">
              <PartnerMarquee />
            </div>
          </div>

          <div className="mt-14 space-y-16">
            {partnerCategories.map((category) => {
              const group = getPartnersByCategory(category.id);
              if (group.length === 0) return null;

              return (
                <div
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-28"
                >
                  <div className="reveal max-w-2xl border-l-2 border-gold-400 pl-5">
                    <h3 className="font-display text-[1.5rem] leading-tight text-blue-900 sm:text-[1.75rem]">
                      {category.label}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      {category.body}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {group.map((partner) => (
                      <PartnerCard key={partner.slug} partner={partner} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Routes into partnership */}
      <section className="section bg-blue-900 text-white">
        <div className="shell">
          <div className="reveal max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              <span
                aria-hidden="true"
                className="block h-[2px] w-6 bg-gold-400"
              />
              Ways to partner
            </p>
            <h2 className="h2 mt-5 text-white">
              Four routes, each with a written agreement behind it.
            </h2>
            <p className="lede mt-5 text-white/70">
              Tell us which route fits and the national secretariat in Accra
              will send the relevant agreement template and the regional contact
              for your district.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {partnershipRoutes.map((route, index) => (
              <article
                key={route.title}
                className="reveal rounded-xl2 border border-white/15 bg-white/[0.04] p-6 sm:p-7"
              >
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gold-300">
                  Route {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-xl text-white">
                  {route.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {route.body}
                </p>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs font-medium text-white/55">
                  {route.fit}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What partners get */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">What partners get</p>
            <h2 className="h2 mt-5 text-blue-900">
              The same four commitments, whoever you are.
            </h2>
            <p className="lede mt-5">
              A district assembly contributing venues and a foundation
              contributing a multi-year grant receive the same standard of
              accountability from us.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Start a partnership conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="reveal-right space-y-4">
            {partnerCommitments.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl2 border border-line bg-white p-5 shadow-card"
              >
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
                <div>
                  <h3 className="font-display text-lg text-blue-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Focus areas partners resource */}
      <section className="section bg-blue-50">
        <div className="shell">
          <div className="reveal max-w-3xl">
            <p className="eyebrow">Where partnership lands</p>
            <h2 className="h2 mt-5 text-blue-900">
              Five focus areas your support resources.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/focus-areas/${area.slug}`}
                className="reveal group flex flex-col rounded-xl2 border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <h3 className="font-display text-lg text-blue-900">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {area.lede}
                </p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
                  Read more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Become a partner"
        title="Bring a mandate, a budget or a district — we will build the rest with you."
        body={`Write to ${site.email} with the kind of partnership you have in mind, or call ${site.phone}. We will tell you honestly whether we are the right partner before anything is signed.`}
      />
    </>
  );
}
