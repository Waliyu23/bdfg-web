import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/components/arrow-right";
import CheckIcon from "@/components/check-icon";
import PageHero from "@/components/page-hero";
import PartnerMarquee from "@/components/partner-marquee";
import { focusAreas } from "@/lib/focus-areas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Foundation",
  description:
    "Established under Ghana's Companies Act in 2001, Better Dream Foundation Ghana is a non-political, non-profit organisation working across Accra, Tamale and Daboya.",
};

const pillars = [
  {
    title: "Mission",
    body: "To improve the lives of marginalised communities throughout Ghana by expanding access to social services and promoting sustainable development.",
  },
  {
    title: "Vision",
    body: "A Ghana in which women, youth, persons with disabilities and underserved communities can reach the services and opportunities that are theirs by right.",
  },
  {
    title: "How we do it",
    body: "Practical programmes, evidence-based advocacy, and strategic partnerships with communities, districts, donors and the diaspora.",
  },
];

const approach = [
  {
    title: "Listen",
    body: "A community durbar and needs assessment with chiefs, elders, women's groups, youth and persons with disabilities. Priorities are ranked by the community, in public.",
  },
  {
    title: "Co-design",
    body: "Activities, targets and community contributions are agreed together, then written down so that everyone can hold everyone else to them.",
  },
  {
    title: "Deliver",
    body: "Implementation through local staff, volunteers and community committees, with district authorities involved from the start.",
  },
  {
    title: "Review and hand over",
    body: "Results are read back at a community review meeting, and the structures we built are handed over with training and simple records.",
  },
];

const values = [
  {
    title: "Dignity first",
    body: "People are partners, not beneficiaries. Programmes are designed so that nobody has to trade their dignity for support.",
  },
  {
    title: "Inclusion as practice",
    body: "Women, youth and persons with disabilities hold seats on the committees that make decisions, not just places on attendance lists.",
  },
  {
    title: "Local ownership",
    body: "Every activity has a community structure attached to it that can carry the work when our funding cycle ends.",
  },
  {
    title: "Transparency",
    body: "Results — including the disappointing ones — are reported back to communities and partners without editing.",
  },
  {
    title: "Non-partisan",
    body: "We are non-political by constitution and in practice. We work with whoever holds office, and for whoever needs the service.",
  },
  {
    title: "Evidence over anecdote",
    body: "Baselines, indicators and honest field verification, so improvement claims can be checked.",
  },
];

const audiences = [
  "Women in rural and peri-urban communities",
  "Young people out of school or out of work",
  "Persons with disabilities and their organisations",
  "Children at risk of dropping out of basic school",
  "Underserved districts with weak service coverage",
];

const programmeSummaries: Record<string, string> = {
  education: "Keeping children in school and helping them learn well once they are there.",
  "human-rights":
    "Advocacy and legal awareness so that people know their rights and can claim them.",
  "women-youth-empowerment":
    "Skills, capital and confidence so women and young people can earn a living with dignity.",
  "community-engagement": "Nothing is designed for a community without that community in the room.",
  "fellowships-conferences":
    "Convening, training and mentoring the next generation of Ghanaian changemakers.",
};

const partnerRoutes = [
  {
    title: "District assemblies and government agencies",
    body: "We plan with district assemblies, education and health directorates so activities sit inside the district plan instead of running parallel to it.",
  },
  {
    title: "Schools, health facilities and traditional authorities",
    body: "Head teachers, PTAs, clinic staff, chiefs and queen mothers co-design and co-own every community activity we run.",
  },
  {
    title: "Donors, foundations and corporate social investors",
    body: "Restricted and unrestricted funding, in-kind supplies and staff volunteering, with narrative and financial reporting to your format.",
  },
  {
    title: "NGOs, networks and research partners",
    body: "Joint delivery, referral pathways, shared monitoring and evidence generation with organisations working in the same districts.",
  },
  {
    title: "Diaspora groups and community associations",
    body: "Hometown associations and diaspora networks who want a trusted, accountable partner on the ground in Ghana.",
  },
  {
    title: "Fellows, interns and national service personnel",
    body: "Placements through the Better Dream Fellowship, with mentoring from national and regional executives.",
  },
];

const partnerCommitments = [
  {
    title: "A written partnership agreement",
    body: "Scope, budget, safeguarding commitments and reporting schedule agreed in writing before activities begin.",
  },
  {
    title: "Field access and verification",
    body: "Partners are welcome on monitoring visits in Accra, Tamale and Daboya, and may verify any figure we publish.",
  },
  {
    title: "Reporting you can use",
    body: "Baselines, indicators, photographs with consent, and financial reports in the format your board or funder requires.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Foundation"
        title="Improving lives in the communities that public services reach last."
        lede="Established and incorporated under Ghana's Companies Act in 2001, Better Dream Foundation Ghana is a non-political, non-profit organisation working across Accra, Tamale and Daboya."
        crumbs={[{ label: "About" }]}
      />

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">Our story</p>
            <h2 className="h2 mt-5 text-blue-900">Founded in 2001, still in the same districts.</h2>
            <div className="mt-8 overflow-hidden rounded-xl2 shadow-card">
              <Image
                src="/images/about-field.webp"
                alt="Two field officers walking with community members, including a young man in a wheelchair, in Daboya"
                width={1600}
                height={900}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-[240px] w-full object-cover sm:h-[320px]"
              />
            </div>
          </div>
          <div className="reveal prose-body max-w-prose">
            <p>
              Better Dream Foundation Ghana was established and incorporated under Ghana&rsquo;s
              Companies Act in 2001 by a group of community organisers who kept meeting the same
              problem: services existed on paper, but the households that needed them most could not
              reach them. Distance, cost, disability, illiteracy and gender all stood in the way.
            </p>
            <p>
              We started with school enrolment and rights education, and grew as communities asked
              for more — savings groups, water points, skills training, disability advocacy and,
              more recently, structured fellowships for young Ghanaians who want to do this work
              properly.
            </p>
            <p>
              Today the Foundation runs from three offices: a national secretariat in Accra, a zonal
              office in Tamale, and a community field office in Daboya in the Savannah Region. That
              geography is deliberate. It keeps us close to national partners and policy
              conversations in the capital while our delivery staff remain resident in the
              communities where programmes actually run.
            </p>
            <p>
              We remain non-political and non-profit. We do not campaign for candidates or parties,
              and any surplus is returned to programmes. What we do campaign for is straightforward:
              that a woman in North Gonja, a young person in Tamale and a person with a disability in
              Accra can reach the same services as anyone else.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-blue-50">
        <div className="shell grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="reveal card flex flex-col p-7">
              <h2 className="font-display text-xl text-blue-800">{pillar.title}</h2>
              <span aria-hidden="true" className="mt-4 block h-[3px] w-10 bg-gold-400" />
              <p className="mt-5 text-sm leading-relaxed text-ink/70">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Our approach</p>
            <h2 className="h2 mt-5 text-blue-900">Four steps we do not skip.</h2>
            <p className="lede mt-5">
              The order matters. Most failed development projects in Ghana were designed before
              anyone asked the community what they needed — and closed before anyone handed anything
              over.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step, index) => (
              <li
                key={step.title}
                className="reveal rounded-xl2 border border-line bg-white p-6 shadow-card"
              >
                <span className="font-display text-[1.75rem] leading-none text-gold-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="h3 mt-4 text-blue-800">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-blue-900 text-white">
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              <span aria-hidden="true" className="block h-[2px] w-6 bg-gold-400" />
              What we stand on
            </p>
            <h2 className="font-display text-[1.7rem] leading-[1.14] sm:text-[2.1rem]">
              Our values
            </h2>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="reveal border-t border-white/15 pt-6">
                <h3 className="text-base font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">Who we serve</p>
            <h2 className="h2 mt-5 text-blue-900">
              The people at the centre of every programme.
            </h2>
            <ul className="mt-8 space-y-3 text-base text-ink/75">
              {audiences.map((audience) => (
                <li key={audience} className="flex gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <p className="eyebrow">Programme areas</p>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {focusAreas.map((area, index) => (
                <Link
                  key={area.slug}
                  href={`/focus-areas/${area.slug}`}
                  className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-blue-50/50"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-semibold text-gold-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-lg text-blue-800">{area.title}</span>
                      <span className="mt-1 block max-w-md text-sm leading-relaxed text-ink/60">
                        {programmeSummaries[area.slug] ?? area.lede}
                      </span>
                    </span>
                  </span>
                  <span className="shrink-0 text-blue-600 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="partnership" className="section scroll-mt-24 bg-blue-50">
        <div className="shell">
          <div className="reveal max-w-3xl">
            <p className="eyebrow">Partnership</p>
            <h2 className="h2 mt-5 text-blue-900">
              Strategic partnerships are how the work happens.
            </h2>
            <p className="lede mt-6">
              The Foundation is deliberately small. What makes district-wide delivery possible is a
              network of partners who bring mandate, reach, funding or expertise — and who hold us to
              account for results in the communities we name.
            </p>
          </div>

          <div className="reveal mt-12">
            <p className="eyebrow">Our partners</p>
            <PartnerMarquee />
            <p className="mt-6 text-sm leading-relaxed text-ink/65">
              These are default marks and generic partner titles. Send each organisation&rsquo;s
              registered name and logo file (SVG or transparent PNG) to{" "}
              <a href={`mailto:${site.email}`} className="link-underline wrap-any">
                {site.email}
              </a>{" "}
              and they will replace the defaults exactly as supplied.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnerRoutes.map((route, index) => (
              <div key={route.title} className="reveal card flex flex-col p-7">
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg leading-snug text-blue-800">
                  {route.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{route.body}</p>
              </div>
            ))}
          </div>

          <div className="reveal mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="eyebrow">What partners get</p>
              <h3 className="h2 mt-5 text-blue-900">Clear terms, open books.</h3>
            </div>
            <ul className="space-y-5">
              {partnerCommitments.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 border-b border-line pb-5 last:border-0"
                >
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                  <span>
                    <span className="block text-base font-semibold text-blue-900">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink/65">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal mt-12 flex flex-col gap-5 rounded-xl2 bg-blue-900 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
                Work with us
              </p>
              <p className="mt-3 font-display text-[1.35rem] leading-snug">
                Tell us the district and the goal, and we will tell you honestly whether we are the
                right partner.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70 wrap-any">
                Partnership enquiries:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  {site.email}
                </a>{" "}
                · {site.phone}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold">
                Contact the secretariat
              </Link>
              <Link href="/donate" className="btn-onblue">
                Donate
              </Link>
            </div>
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
                <span aria-hidden="true" className="block h-[2px] w-6 bg-gold-400" />
                Governance
              </p>
              <h2 className="font-display text-[1.7rem] leading-[1.14] sm:text-[2.15rem]">
                Meet the people accountable for this work.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                The Foundation is governed by a board and run by national and regional executives
                across our three offices.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/leadership" className="btn-gold">
                  View leadership
                </Link>
                <Link href="/contact" className="btn-onblue">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
