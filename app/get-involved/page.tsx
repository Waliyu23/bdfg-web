import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactForm from "@/components/contact-form";
import PageHero from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, offer professional skills, partner with us, apply for a fellowship, intern or donate — every route has a place in a live Better Dream Foundation Ghana programme.",
};

const routes = [
  {
    tag: "Ongoing",
    title: "Volunteer in the field",
    body: "Join community activities in Accra, Tamale or Daboya — school clubs, durbars, screening days and campaign work. Volunteers are matched to a regional office and given an induction.",
  },
  {
    tag: "Remote friendly",
    title: "Offer professional skills",
    body: "Teachers, health workers, lawyers, accountants, designers, developers and monitoring specialists give a few hours a month. Remote support is welcome from anywhere, including the diaspora.",
  },
  {
    tag: "Institutions",
    title: "Partner with us",
    body: "District assemblies, NGOs, foundations, companies and faith groups partner on co-designed programmes with clear, jointly agreed outcomes and reporting.",
  },
  {
    tag: "Cohort based",
    title: "Apply for a fellowship",
    body: "The Better Dream Fellowship pairs young Ghanaian changemakers with mentors and a community project they must deliver end to end.",
  },
  {
    tag: "Students",
    title: "Intern or serve",
    body: "We host students, interns and national service personnel at all three offices in programmes, finance, communications and monitoring.",
  },
  {
    tag: "Any amount",
    title: "Donate goods or funds",
    body: "School kits, sanitary supplies, learning materials, tools for training graduates — or unrestricted funds that let us respond where the need is greatest.",
  },
];

const steps = [
  {
    title: "We respond within a week",
    body: "A regional coordinator reads your message and replies with the options currently open near you.",
  },
  {
    title: "Short induction",
    body: "A briefing on the community, our safeguarding rules and the specific activity you will support.",
  },
  {
    title: "Matched to real work",
    body: "You are placed on a live activity with a named supervisor — not left to invent a role.",
  },
  {
    title: "Recognition",
    body: "Volunteers who complete a placement receive a letter of service from the secretariat.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="There is a role here that fits what you can give."
        lede="Time, professional skills, a partnership, or funds — every route below has a place in a live programme. Tell us which one, and the regional office nearest you will be in touch."
        crumbs={[{ label: "Get Involved" }]}
      />

      <section className="section">
        <div className="shell">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <div
                key={route.title}
                className="reveal flex flex-col rounded-xl2 border border-line bg-white p-6 shadow-card"
              >
                <span className="self-start rounded-full bg-blue-50 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-blue-700">
                  {route.tag}
                </span>
                <h2 className="mt-4 font-display text-lg leading-snug text-blue-800">
                  {route.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{route.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blue-50">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="reveal overflow-hidden rounded-xl2 shadow-card">
            <Image
              src="/images/gallery-1.webp"
              alt="Young people learning solar panel installation at a workbench with an instructor guiding them"
              width={1600}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="h-[260px] w-full object-cover sm:h-[380px]"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">What to expect</p>
            <h2 className="h2 mt-5 text-blue-900">How volunteering with us actually works.</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-blue-900">
                      {step.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink/65">
                      {step.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-9 rounded-xl border border-line bg-white p-5">
              <p className="text-sm leading-relaxed text-ink/70">
                <strong className="font-semibold text-blue-900">Safeguarding.</strong> All
                volunteers working with children or vulnerable adults are briefed on our
                safeguarding policy and supervised at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">Sign up</p>
            <h2 className="h2 mt-5 text-blue-900">Tell us how you would like to help.</h2>
            <p className="lede mt-5">
              Fill in the form and it will open a pre-filled email to the secretariat. Prefer to
              write or call directly?
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              <li>
                <a
                  className="font-semibold text-blue-700 underline decoration-gold-500 decoration-2 underline-offset-4"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a className="font-semibold text-blue-700" href={site.phoneHref}>
                  {site.phone}
                </a>
              </li>
            </ul>
            <p className="mt-7 text-sm leading-relaxed text-ink/60">
              Looking to give financially instead?{" "}
              <Link
                href="/donate"
                className="font-semibold text-blue-700 underline decoration-gold-500 decoration-2 underline-offset-4"
              >
                See the donate page
              </Link>
              .
            </p>
          </div>
          <div className="reveal">
            <ContactForm variant="volunteer" subjectPrefix="Get involved" />
          </div>
        </div>
      </section>
    </>
  );
}
