import type { Metadata } from "next";

import ContactForm from "@/components/contact-form";
import EmailLink from "@/components/email-link";
import PageHero from "@/components/page-hero";
import { officeLocations, officeMapUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Better Dream Foundation Ghana secretariat by email, phone or WhatsApp, or send a message and it will be routed to the right regional office.",
};

function ExternalArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7h-7M17 7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the office nearest you."
        lede="One email address reaches the secretariat, and the secretariat routes your message to the right regional office. For urgent matters, call or send a WhatsApp message."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section">
        <div className="shell grid gap-6 md:grid-cols-3">
          <div className="reveal card flex flex-col p-7">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">Email</h2>
            <EmailLink className="mt-3 wrap-any font-display text-lg text-blue-700 underline decoration-gold-500 decoration-2 underline-offset-4" />
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              The fastest way to reach the secretariat. We aim to reply within five working days.
            </p>
          </div>
          <div className="reveal card flex flex-col p-7">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
              Phone / WhatsApp
            </h2>
            <a
              href={site.phoneHref}
              className="mt-3 wrap-any font-display text-lg text-blue-700 underline decoration-gold-500 decoration-2 underline-offset-4"
            >
              {site.phone}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Available during Ghana office hours, Monday to Friday.
            </p>
          </div>
          <div className="reveal card flex flex-col p-7">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
              Offices
            </h2>
            <p className="mt-3 font-display text-lg text-blue-800">{site.officesLabel}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Visits are by appointment so that a coordinator is available to receive you.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-blue-50 pt-0 sm:pt-0">
        <div className="shell pt-16 sm:pt-24">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Our locations</p>
            <h2 className="h2 mt-5 text-blue-900">Three offices across Ghana</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {officeLocations.map((office) => (
              <div
                key={office.city}
                className="reveal flex flex-col rounded-xl2 border border-line bg-white p-7 shadow-card"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
                  {office.role}
                </span>
                <h3 className="mt-3 font-display text-xl text-blue-900">{office.city}</h3>
                <p className="mt-1 text-sm text-ink/55">{office.region}, Ghana</p>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink/65">{office.body}</p>
                <a
                  href={officeMapUrl(office)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-6 self-start"
                >
                  View on map
                  <ExternalArrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">Send a message</p>
            <h2 className="h2 mt-5 text-blue-900">We read everything that arrives.</h2>
            <p className="lede mt-5">
              Use this form for partnership proposals, media requests, fellowship questions,
              donations or anything else. Submitting opens a pre-filled email addressed to the
              secretariat, so nothing is lost in transit.
            </p>
            <div className="mt-8 rounded-xl border border-line bg-white p-5">
              <p className="text-sm leading-relaxed text-ink/70">
                <strong className="font-semibold text-blue-900">Safeguarding concerns.</strong> If
                you need to report a safeguarding or misconduct concern, write to the secretariat
                with &ldquo;Safeguarding&rdquo; in the subject line. Reports are treated
                confidentially.
              </p>
            </div>
          </div>
          <div className="reveal">
            <ContactForm variant="contact" subjectPrefix="Website enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
