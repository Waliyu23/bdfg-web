import type { Metadata } from "next";
import Link from "@/components/link";
import PageHero from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "BDF Ghana Academy",
  description:
    "BDF Ghana Academy equips young leaders and emerging professionals with skills in diplomacy, governance, political communication and sustainable development.",
};

const focusAreas = [
  {
    number: "01",
    title: "Youth leadership development",
    body: "Build the confidence, practical skills and sense of public responsibility young people need to lead in their communities and institutions.",
  },
  {
    number: "02",
    title: "Diplomacy and governance",
    body: "Explore international diplomacy, governance and policy through learning that connects global ideas with Ghanaian and African perspectives.",
  },
  {
    number: "03",
    title: "Political branding and communication",
    body: "Develop thoughtful, authentic communication strategies and personal brands for public service and political leadership.",
  },
  {
    number: "04",
    title: "Community impact fellowships",
    body: "Put learning into practice through fellowship initiatives centered on community impact and the Sustainable Development Goals (SDGs).",
  },
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn · Lead · Make an impact"
        title="Prepare to shape the conversations that shape our future."
        lede="BDF Ghana Academy is the educational and professional online training school of Better Dream Foundation Ghana, equipping youth, young politicians and emerging professionals with specialized skills for public leadership."
        image="/images/Heros/Hero-1.jpeg"
        imageAlt="Students and facilitators gathered for a human rights advocacy programme"
        crumbs={[{ label: "BDF Ghana Academy" }]}
      />

      <section className="section">
        <div className="shell">
          <div className="reveal grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">The Academy</p>
              <h2 className="h2 mt-5 text-blue-900">
                Skills for leadership, service and influence.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-[1.75] text-ink/75">
              <p>
                The Academy creates accessible online learning for people
                preparing to take on leadership and public-facing roles. Its
                programmes connect practical professional skills with a
                commitment to inclusive governance and community development.
              </p>
              <p>
                Through training and fellowship initiatives, participants can
                strengthen their voice, understand policy and diplomacy, and
                turn ideas into meaningful action in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-blue-50/60">
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Core focus areas</p>
            <h2 className="h2 mt-5 text-blue-900">
              Learn what it takes to lead and make a difference.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <article key={area.number} className="reveal card p-7 sm:p-8">
                <span className="text-xs font-semibold tracking-[0.16em] text-gold-600">
                  {area.number}
                </span>
                <h3 className="mt-4 font-display text-xl leading-snug text-blue-800">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {area.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="reveal overflow-hidden rounded-xl2 bg-blue-900 px-6 py-12 text-white sm:px-12 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
              Take the next step
            </p>
            <div className="mt-4 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-[1.7rem] leading-[1.14] sm:text-[2.15rem]">
                  Ready to grow your skills and your impact?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  Contact the Foundation to learn more about BDF Ghana Academy
                  programmes and fellowship opportunities.
                </p>
              </div>
              <Link href="/contact" className="btn-gold shrink-0">
                Ask about the Academy
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/60">
              You can also email{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-gold-400 underline-offset-4 hover:text-gold-300"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
