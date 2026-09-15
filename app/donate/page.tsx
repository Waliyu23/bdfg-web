import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CheckIcon from "@/components/check-icon";
import EmailLink from "@/components/email-link";
import PageHero from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Donations to Better Dream Foundation Ghana go into programme delivery in Accra, Tamale and Daboya — school kits, girls clubs, skills training and savings groups.",
};

const levels = [
  {
    amount: "GH¢ 100",
    title: "A school kit",
    body: "Exercise books, pens, a bag and basic uniform items for one pupil for a term.",
  },
  {
    amount: "GH¢ 350",
    title: "A term of a girls club",
    body: "Sanitary supplies, materials and mentor costs for one girls education club for a term.",
  },
  {
    amount: "GH¢ 900",
    title: "A skills training place",
    body: "One young person's place on a vocational course, including their starter tool kit.",
  },
  {
    amount: "GH¢ 2,500",
    title: "A savings group",
    body: "Formation, training, ledgers and cash box for one women's village savings and loans group.",
  },
];

const methods = [
  {
    title: "Mobile Money",
    items: [
      "Network: to be confirmed by the secretariat",
      "Merchant / number: to be confirmed",
      "Account name: Better Dream Foundation Ghana",
    ],
    note: "Momo is the fastest route for donors inside Ghana. Please use your name as the reference.",
  },
  {
    title: "Bank transfer",
    items: [
      "Bank: to be confirmed by the secretariat",
      "Account name: Better Dream Foundation Ghana",
      "Account number / SWIFT: to be confirmed",
    ],
    note: "Best for larger and institutional gifts, and for international transfers.",
  },
  {
    title: "In-kind donations",
    items: [
      "Learning materials and school kits",
      "Sanitary supplies and hygiene items",
      "Tools and equipment for training graduates",
    ],
    note: "Contact us first so that goods match a live programme need rather than sitting in storage.",
  },
];

const promises = [
  {
    title: "A written acknowledgement",
    body: "Every gift is receipted by the secretariat, whatever its size.",
  },
  {
    title: "A named use",
    body: "Restricted gifts are allocated to a specific programme, community and period.",
  },
  {
    title: "Reporting back",
    body: "Donors receive a short report on what their gift delivered, with figures.",
  },
  {
    title: "No political use",
    body: "The Foundation is non-political. Funds are never used for partisan activity.",
  },
  {
    title: "Your data stays private",
    body: "We never sell, share or publish donor details without permission.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Your gift buys books, tools, water and training — not overheads."
        lede="Better Dream Foundation Ghana is a non-profit organisation. Donations go into programme delivery in Accra, Tamale and Daboya, and every gift is acknowledged in writing."
        crumbs={[{ label: "Donate" }]}
      />

      <section className="pt-12 sm:pt-16">
        <div className="shell">
          <div className="reveal grid gap-8 overflow-hidden rounded-xl2 border border-line bg-white shadow-card lg:grid-cols-2 lg:gap-0">
            <Image
              src="/images/donate-impact.webp"
              alt="A schoolgirl smiling as she receives a stack of exercise books and a school bag"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[240px] w-full object-cover sm:h-[340px] lg:h-full"
            />
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <h2 className="h2 text-blue-900">Where the money goes</h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                We are deliberately low-overhead. Field staff live in the communities they serve,
                and community committees do much of the delivery. That means a modest donation
                converts into a visible, countable result — a pupil equipped for a term, a girls
                club running, a savings group formed.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                Unrestricted gifts are the most useful of all: they let us respond where the need is
                greatest rather than where a budget line allows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">What your gift does</p>
            <h2 className="h2 mt-5 text-blue-900">Indicative giving levels</h2>
            <p className="lede mt-5">
              Figures are indicative programme costs and vary by district and season. Ask us for the
              current costing of any item before you give.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {levels.map((level) => (
              <div
                key={level.title}
                className="reveal flex flex-col rounded-xl2 border border-line bg-white p-6 shadow-card"
              >
                <span className="font-display text-xl text-blue-700">{level.amount}</span>
                <span aria-hidden="true" className="mt-4 block h-[3px] w-9 bg-gold-400" />
                <h3 className="mt-5 text-base font-semibold text-blue-900">{level.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{level.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blue-50">
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">How to give</p>
            <h2 className="h2 mt-5 text-blue-900">Ways to donate</h2>
          </div>
          <div className="reveal mt-8 rounded-xl2 bg-gold-200/60 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-blue-900">
              <strong className="font-semibold">Account details pending.</strong> The Mobile Money
              and bank details below are placeholders. Send the Foundation&rsquo;s official account
              information to{" "}
              <a
                className="font-semibold underline decoration-2 underline-offset-2"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>{" "}
              and they will be published here. Until then, please contact the secretariat directly to
              arrange a donation.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {methods.map((method) => (
              <div
                key={method.title}
                className="reveal flex flex-col rounded-xl2 border border-line bg-white p-7 shadow-card"
              >
                <h3 className="font-display text-lg text-blue-800">{method.title}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-ink/75">
                  {method.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 flex-1 text-xs leading-relaxed text-ink/50">{method.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">Accountability</p>
            <h2 className="h2 mt-5 text-blue-900">What we promise every donor.</h2>
            <ul className="mt-8 space-y-5">
              {promises.map((promise) => (
                <li
                  key={promise.title}
                  className="flex gap-4 border-b border-line pb-5 last:border-0"
                >
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                  <span>
                    <span className="block text-base font-semibold text-blue-900">
                      {promise.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink/65">
                      {promise.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-xl2 bg-blue-900 p-8 text-white lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-xl">Arrange a donation</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Speak to the secretariat about Mobile Money, bank transfer, in-kind giving or a
              multi-year partnership.
            </p>
            <dl className="mt-7 space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-white/45">Email</dt>
                <dd className="mt-1">
                  <EmailLink className="wrap-any font-semibold text-gold-300" />
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-white/45">
                  Phone / WhatsApp
                </dt>
                <dd className="mt-1">
                  <a className="font-semibold text-gold-300" href={site.phoneHref}>
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-white/45">Offices</dt>
                <dd className="mt-1 text-white/80">Accra · Tamale · Daboya, Savannah Region</dd>
              </div>
            </dl>
            <Link href="/contact" className="btn-gold mt-8 w-full">
              Contact the secretariat
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
