import type { Metadata } from "next";
import Link from "@/components/link";

import PageHero from "@/components/page-hero";
import {
  governanceTiers,
  nationalRoles,
  regionalRoles,
  type LeadershipRole,
} from "@/lib/leadership";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Better Dream Foundation Ghana is governed by a board of directors and run by national executives in Accra with regional executives in Accra, Tamale and Daboya.",
};

function RoleCard({ role }: { role: LeadershipRole }) {
  return (
    <article className="reveal flex gap-5 rounded-xl2 border border-line bg-white p-6 shadow-card">
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
      <div>
        <h3 className="font-display text-lg leading-snug text-blue-800">
          {role.title}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
          {role.group}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">{role.body}</p>
      </div>
    </article>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="National and regional executives."
        lede="The Foundation is governed by a board of directors and run day to day by national executives at the Accra secretariat, supported by regional executives in each area where we operate."
        crumbs={[{ label: "Leadership" }]}
      />

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-3">
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

      <section className="pb-4">
        <div className="shell">
          <div className="reveal flex flex-col gap-4 rounded-xl2 bg-gold-200/50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm leading-relaxed text-blue-900">
              <strong className="font-semibold">
                Note for the secretariat:
              </strong>{" "}
              the roles below are listed with their responsibilities and are
              ready for names, portraits and short biographies. Send the details
              to{" "}
              <a
                className="font-semibold underline decoration-2 underline-offset-2"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>{" "}
              and each card will be completed.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">National executives</p>
            <h2 className="h2 mt-5 text-blue-900">Accra secretariat</h2>
            <p className="lede mt-5">
              The national team carries responsibility for the Foundation as a
              whole — strategy, partnerships, finance, safeguarding and the
              quality of every programme in every region.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {nationalRoles.map((role) => (
              <RoleCard key={role.title} role={role} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blue-50">
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Regional executives</p>
            <h2 className="h2 mt-5 text-blue-900">Accra · Tamale · Daboya</h2>
            <p className="lede mt-5">
              Regional executives live and work in the areas they serve. They
              convene community meetings, supervise field activities, and are
              the first point of contact for district authorities and community
              leaders.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {regionalRoles.map((role) => (
              <RoleCard key={role.title} role={role} />
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
