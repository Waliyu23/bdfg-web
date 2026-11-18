import type { Metadata } from "next";

import Link from "@/components/link";
import PageHero from "@/components/page-hero";
import {
  boardRoles,
  committees,
  governanceTiers,
  nationalRoles,
  regionalTeams,
  type LeadershipRole,
} from "@/lib/leadership";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Better Dream Foundation Ghana is governed by a board of directors and run by national executives in Accra, with regional executives in Ashanti, Upper East, Northern, Savannah and Greater Accra, and five standing committees.",
};

const sections = [
  { id: "board", label: "Board of Directors" },
  { id: "national", label: "National Executives" },
  { id: "regional", label: "Regional Coordinators" },
  { id: "committees", label: "Committee Members" },
];

function Crest() {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50">
      <span className="block h-9 w-9 shrink-0">
        <img
          src={site.logoSmall}
          alt=""
          width={64}
          height={64}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </span>
    </div>
  );
}

/**
 * Profile card: portrait on top, then name, position, email and bio.
 * Where a portrait is not available, the image area shows the crest placeholder.
 */
function ProfileCard({
  role,
  tone = "light",
}: {
  role: LeadershipRole;
  tone?: "light" | "dark";
}) {
  const email = role.email ?? site.email;
  const dark = tone === "dark";

  return (
    <article className="reveal flex flex-col items-center text-center">
      <Link
        href={`/leadership/${role.slug}`}
        className="group flex flex-col items-center"
        aria-label={`View the ${role.title} profile`}
      >
        <div
          className={`relative h-40 w-40 overflow-hidden rounded-full ring-4 transition-all duration-300 group-hover:ring-gold-400 sm:h-44 sm:w-44 ${
            dark ? "bg-blue-800 ring-white/25" : "bg-blue-50 ring-white/70"
          }`}
        >
          {role.photo ? (
            <img
              src={role.photo}
              alt={role.name ? `${role.name}, ${role.title}` : role.title}
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
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
                loading="lazy"
                decoding="async"
                className={`h-20 w-20 ${dark ? "opacity-40" : "opacity-30"}`}
              />
            </span>
          )}
        </div>
      </Link>

      <h3
        className={`mt-6 font-display text-xl leading-snug ${
          dark ? "text-white" : "text-blue-900"
        }`}
      >
        <Link
          href={`/leadership/${role.slug}`}
          className="underline-offset-4 transition-colors duration-200 hover:underline"
        >
          {role.name ?? role.title}
        </Link>
      </h3>
      <p
        className={`mt-2 text-xs font-semibold uppercase tracking-[0.12em] ${
          dark ? "text-gold-300" : "text-gold-600"
        }`}
      >
        {role.title}
      </p>
      <a
        href={`mailto:${email}`}
        className={`mt-3 inline-flex max-w-full items-center justify-center gap-2 break-all text-[0.8125rem] font-medium leading-snug underline decoration-gold-500 decoration-2 underline-offset-2 transition-colors duration-200 ${
          dark
            ? "text-white/85 hover:text-white"
            : "text-blue-700 hover:text-blue-900"
        }`}
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
        {email}
      </a>
      <p
        className={`mt-4 max-w-[34ch] text-sm leading-relaxed ${
          dark ? "text-white/70" : "text-ink/70"
        }`}
      >
        {role.body}
      </p>
      <p
        className={`mt-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] ${
          dark ? "text-white/45" : "text-ink/40"
        }`}
      >
        {role.group}
      </p>
      <Link
        href={`/leadership/${role.slug}`}
        className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
          dark
            ? "text-gold-300 hover:text-gold-200"
            : "text-blue-700 hover:text-blue-900"
        }`}
      >
        View full profile
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

/** Shared list of standing positions, used by regional teams and committees. */
function RoleList({ roles }: { roles: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
      {roles.map((role) => (
        <li key={role} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.45rem] block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500"
          />
          <span className="text-sm font-medium leading-snug text-blue-900">
            {role}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function LeadershipPage() {
  const namedBoardRoles = boardRoles.filter((role) => role.name);
  const namedNationalRoles = nationalRoles.filter((role) => role.name);
  const visibleSections = sections.filter(
    (section) => section.id !== "board" || namedBoardRoles.length > 0,
  );

  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Board, executives, regions and committees."
        lede="The Foundation is governed by a board of directors and run day to day by national executives at the Accra secretariat, supported by regional executive teams in five regions and five standing committees."
        image="/images/Heros/Leadership%20Hero.jpeg"
        imageAlt="Delegates at an international public assembly representing Ghana"
        crumbs={[{ label: "Leadership" }]}
      />

      <section className="pt-10 sm:pt-12">
        <div className="shell">
          <nav aria-label="On this page" className="reveal">
            <ul className="flex flex-wrap gap-2">
              {visibleSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-flex items-center rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 transition-colors duration-200 hover:border-blue-600 hover:text-blue-900"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="section pt-10 sm:pt-12">
        <div className="shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {governanceTiers.map((tier) => (
            <div
              key={tier.title}
              className="reveal border-t-2 border-gold-400 pt-6"
            >
              <h2 className="font-display text-xl text-blue-900">
                {tier.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                {tier.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Directors */}
      {namedBoardRoles.length > 0 && (
        <section id="board" className="section scroll-mt-28 bg-gold-400">
          <div className="shell">
            <div className="reveal max-w-2xl">
              <p className="eyebrow">Tier one</p>
              <h2 className="h2 mt-5 text-blue-900">Board of Directors</h2>
              <p className="lede mt-5 text-blue-900/80">
                The board is non-executive. It approves strategy and budgets,
                appoints the Executive Director, and protects the non-political,
                non-profit mandate in our incorporation documents.
              </p>
            </div>
            <div className="mt-14 grid gap-y-14 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {namedBoardRoles.map((role) => (
                <ProfileCard key={role.title} role={role} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* National Executives */}
      <section
        id="national"
        className="section scroll-mt-28 bg-blue-900 text-white"
      >
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              <span
                aria-hidden="true"
                className="block h-[2px] w-6 bg-gold-400"
              />
              Tier two
            </p>
            <h2 className="h2 mt-5 text-white">National Executives</h2>
            <p className="lede mt-5 text-white/70">
              Based at the Accra secretariat. The national team carries
              responsibility for the Foundation as a whole — strategy,
              partnerships, finance, safeguarding and the quality of every
              programme in every region.
            </p>
          </div>
          <div className="mt-14 grid gap-y-14 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {namedNationalRoles.map((role) => (
              <ProfileCard key={role.title} role={role} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coordinators */}
      <section id="regional" className="section scroll-mt-28">
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Tier three</p>
            <h2 className="h2 mt-5 text-blue-900">Regional Coordinators</h2>
            <p className="lede mt-5">
              Each region is led by a Regional Coordinator working with a full
              executive team. They live and work in the areas they serve,
              convene community meetings, supervise field activities and are the
              first point of contact for district authorities and traditional
              leaders.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {regionalTeams.map((team) => (
              <article
                key={team.region}
                className="reveal flex flex-col rounded-xl2 border border-line bg-white p-6 shadow-card"
              >
                <div className="flex items-center gap-4">
                  <Crest />
                  <div>
                    <h3 className="font-display text-lg leading-snug text-blue-800">
                      {team.region}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
                      {team.base}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {team.remit}
                </p>
                <RoleList roles={team.roles} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section id="committees" className="section scroll-mt-28 bg-blue-50">
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Tier four</p>
            <h2 className="h2 mt-5 text-blue-900">Committee Members</h2>
            <p className="lede mt-5">
              Five standing committees carry the technical work of the
              Foundation. Each is chaired by a committee member, reports to the
              national executive, and draws its members from staff, volunteers
              and the communities themselves.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {committees.map((committee, index) => (
              <article
                key={committee.name}
                className="reveal flex flex-col rounded-xl2 border border-line bg-white p-6 shadow-card sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                  Committee {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl leading-snug text-blue-800">
                  {committee.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {committee.remit}
                </p>
                <RoleList roles={committee.roles} />
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
                Join the team
              </p>
              <h2 className="font-display text-[1.7rem] leading-[1.14] sm:text-[2.15rem]">
                We recruit staff, volunteers and fellows from the communities we
                serve.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                If you want to work with the Foundation — as a volunteer, an
                intern, a national service person or a fellow — tell us what you
                can bring.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/get-involved" className="btn-gold">
                  Get involved
                </Link>
                <Link href="/contact" className="btn-onblue">
                  Contact the secretariat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
