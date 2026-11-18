import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CheckIcon from "@/components/check-icon";
import CtaBand from "@/components/cta-band";
import Link from "@/components/link";
import {
  executiveRoles,
  getExecutive,
  getExecutiveNeighbours,
  getTierPeers,
  tierMeta,
  type LeadershipRole,
} from "@/lib/leadership";
import { getFocusArea } from "@/lib/focus-areas";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return executiveRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getExecutive(slug);
  if (!role) return {};

  const title = role.name ? `${role.name} — ${role.title}` : role.title;

  return {
    title,
    description: role.body,
    openGraph: {
      title: `${title} | ${site.name}`,
      description: role.body,
    },
  };
}

/** Circular portrait, or the crest on a tinted disc until a photo is supplied. */
function Portrait({ role }: { role: LeadershipRole }) {
  return (
    <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full bg-blue-800 ring-4 ring-white/25 sm:h-56 sm:w-56">
      {role.photo ? (
        <img
          src={role.photo}
          alt={role.name ? `${role.name}, ${role.title}` : role.title}
          width={480}
          height={480}
          className="h-full w-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={site.logo}
            alt=""
            width={128}
            height={128}
            className="h-24 w-24 opacity-40"
          />
        </span>
      )}
    </div>
  );
}

/** Label / value row used in the "At a glance" panel. */
function FactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-line py-4 first:border-t-0 first:pt-0">
      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed text-ink/80">{children}</dd>
    </div>
  );
}

export default async function ExecutiveProfilePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const role = getExecutive(slug);
  if (!role) notFound();

  const tier = tierMeta[role.tier];
  const email = role.email ?? site.email;
  const phone = role.phone ?? site.phone;
  const { previous, next } = getExecutiveNeighbours(role.slug);
  const peers = getTierPeers(role).slice(0, 3);
  const focusAreas = role.focus
    .map((focusSlug) => getFocusArea(focusSlug))
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

  return (
    <>
      {/* Profile masthead */}
      <section className="relative overflow-hidden bg-blue-900 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-blue-600/40 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-1/4 h-[320px] w-[320px] rounded-full bg-gold-500/15 blur-[90px]"
        />
        <div className="shell relative py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/55">
              <li>
                <Link href="/" className="hover:text-gold-300">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <Link href="/leadership" className="hover:text-gold-300">
                  Leadership
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span className="text-white/85">{role.title}</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left">
            <Portrait role={role} />

            <div className="min-w-0">
              <Link
                href={tier.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gold-300 transition-colors duration-200 hover:border-gold-300/60"
              >
                {tier.label}
              </Link>
              <h1 className="mt-5 font-display text-[2rem] leading-[1.1] sm:text-[2.75rem]">
                {role.name ?? role.title}
              </h1>
              {role.name && (
                <p className="mt-3 text-base font-medium text-gold-300 sm:text-lg">
                  {role.title}
                </p>
              )}
              <p className="mt-2 text-sm text-white/60">{role.group}</p>

              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-blue-900 transition-colors duration-200 hover:bg-gold-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3.5 6.5 8.5 6 8.5-6" strokeLinecap="round" />
                  </svg>
                  <span className="break-all">Email this office</span>
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/60"
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="kente" />
      </section>

      {/* Role detail */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
          <div className="reveal">
            <h2 className="font-display text-[1.6rem] leading-tight text-blue-900 sm:text-[2rem]">
              About this role
            </h2>
            <div className="mt-6 space-y-5">
              {role.about.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-ink/75 sm:text-[1.0625rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="mt-14 font-display text-[1.6rem] leading-tight text-blue-900 sm:text-[2rem]">
              Responsibilities
            </h2>
            <ul className="mt-6 space-y-3">
              {role.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
                  <span className="text-[0.9375rem] leading-relaxed text-ink/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {focusAreas.length > 0 && (
              <>
                <h2 className="mt-14 font-display text-[1.6rem] leading-tight text-blue-900 sm:text-[2rem]">
                  Focus areas in this portfolio
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {focusAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/focus-areas/${area.slug}`}
                      className="group rounded-xl2 border border-line bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-lift"
                    >
                      <h3 className="font-display text-lg text-blue-900">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/65">
                        {area.lede}
                      </p>
                      <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
                        Read more
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* At a glance */}
          <aside className="reveal-right lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl2 border border-line bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-display text-xl text-blue-900">
                At a glance
              </h2>
              <dl className="mt-5">
                <FactRow label="Tier">
                  <Link
                    href={tier.href}
                    className="text-blue-700 underline decoration-gold-500 decoration-2 underline-offset-2 hover:text-blue-900"
                  >
                    {tier.label}
                  </Link>
                </FactRow>
                <FactRow label="Team or duty station">{role.group}</FactRow>
                <FactRow label="Reports to">{role.reportsTo}</FactRow>
                <FactRow label="Appointment">{role.appointment}</FactRow>
                <FactRow label="Works with">
                  <ul className="space-y-1.5">
                    {role.worksWith.map((partner) => (
                      <li key={partner} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500"
                        />
                        {partner}
                      </li>
                    ))}
                  </ul>
                </FactRow>
                <FactRow label="Contact">
                  <a
                    href={`mailto:${email}`}
                    className="break-all text-blue-700 underline decoration-gold-500 decoration-2 underline-offset-2 hover:text-blue-900"
                  >
                    {email}
                  </a>
                  <br />
                  <a
                    href={site.phoneHref}
                    className="text-blue-700 hover:text-blue-900"
                  >
                    {phone}
                  </a>
                </FactRow>
              </dl>

            </div>

            {peers.length > 0 && (
              <div className="mt-8">
                <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
                  Also in {tier.label}
                </h2>
                <ul className="mt-4 space-y-2">
                  {peers.map((peer) => (
                    <li key={peer.slug}>
                      <Link
                        href={`/leadership/${peer.slug}`}
                        className="flex items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm font-medium text-blue-900 transition-colors duration-200 hover:border-gold-400"
                      >
                        {peer.title}
                        <span aria-hidden="true" className="text-gold-600">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Previous / next */}
      <section className="border-t border-line bg-blue-50/60 py-10">
        <div className="shell flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between">
          {previous ? (
            <Link
              href={`/leadership/${previous.slug}`}
              className="group flex-1 rounded-xl2 border border-line bg-white p-5 transition-colors duration-200 hover:border-gold-400"
            >
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
                ← Previous
              </span>
              <span className="mt-2 block font-display text-lg text-blue-900">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}

          <Link
            href="/leadership"
            className="flex shrink-0 items-center justify-center rounded-xl2 border border-blue-900/15 px-6 py-5 text-sm font-semibold text-blue-900 transition-colors duration-200 hover:border-blue-900/40"
          >
            All leadership
          </Link>

          {next ? (
            <Link
              href={`/leadership/${next.slug}`}
              className="group flex-1 rounded-xl2 border border-line bg-white p-5 text-right transition-colors duration-200 hover:border-gold-400"
            >
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
                Next →
              </span>
              <span className="mt-2 block font-display text-lg text-blue-900">
                {next.title}
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
        </div>
      </section>

      <CtaBand
        eyebrow="Get in touch"
        title="Need to reach this office directly?"
        body="Write to the secretariat with the role in your subject line and your message will be routed to the right officer in Accra or the region concerned."
      />
    </>
  );
}
