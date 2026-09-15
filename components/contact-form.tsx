"use client";

import { useState } from "react";

import { site } from "@/lib/site";

const interests = [
  "Volunteering in the field",
  "Skills-based / professional support",
  "Partnership or funding",
  "Fellowship programme",
  "Internship or national service",
  "Something else",
];

type ContactFormProps = {
  /** `volunteer` adds interest + availability fields; `contact` adds a subject field. */
  variant?: "volunteer" | "contact";
  /** Prefix used in the generated email subject line. */
  subjectPrefix?: string;
};

/**
 * Enquiry form that composes a pre-filled mailto: message to the secretariat.
 * No backend required — the visitor's own mail client sends the message.
 */
export default function ContactForm({
  variant = "volunteer",
  subjectPrefix = "Volunteer enquiry",
}: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => (data.get(key) ?? "").toString().trim();

    const name = value("name");
    const email = value("email");
    const message = value("message");

    if (!name || !email || !message) {
      setError("Please fill in your name, email and message so we can respond properly.");
      return;
    }
    setError("");

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${value("phone") || "—"}`,
      `Location: ${value("location") || "—"}`,
    ];

    if (variant === "volunteer") {
      lines.push(`Interest: ${value("interest") || "—"}`);
      lines.push(`Availability: ${value("availability") || "—"}`);
    } else {
      lines.push(`Subject: ${value("subject") || "—"}`);
    }

    lines.push("", "Message:", message);

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${subjectPrefix} — ${name}`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = href;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card p-8 text-center" role="status" aria-live="polite">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-5 font-display text-2xl">Thank you</h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink/70">
          Your email client should now be open with your message ready to send. If nothing opened,
          write to us directly at{" "}
          <a
            className="font-semibold text-blue-700 underline decoration-gold-500 decoration-2 underline-offset-2"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn-ghost mt-7">
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            className="field"
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="field"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="label" htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            className="field"
            placeholder="+233 …"
            autoComplete="tel"
          />
        </div>
        <div>
          <label className="label" htmlFor="location">
            Where are you based?
          </label>
          <input id="location" name="location" className="field" placeholder="City, country" />
        </div>

        {variant === "volunteer" ? (
          <>
            <div>
              <label className="label" htmlFor="interest">
                How would you like to help?
              </label>
              <select id="interest" name="interest" className="field" defaultValue={interests[0]}>
                {interests.map((interest) => (
                  <option key={interest}>{interest}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label" htmlFor="availability">
                Availability
              </label>
              <input
                id="availability"
                name="availability"
                className="field"
                placeholder="e.g. weekends, 3 months"
              />
            </div>
          </>
        ) : (
          <div className="sm:col-span-2">
            <label className="label" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              className="field"
              placeholder="What is your message about?"
            />
          </div>
        )}

        <div className="sm:col-span-2">
          <label className="label" htmlFor="message">
            Your message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="field resize-y"
            placeholder="Tell us a little about yourself, your skills and what you would like to do with us."
          />
        </div>
      </div>

      {error && (
        <p
          role="alert"
          className="mt-5 rounded-xl bg-gold-200/60 px-4 py-3 text-sm font-medium text-blue-900"
        >
          {error}
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary">
          Send message
        </button>
        <p className="text-xs leading-relaxed text-ink/50">
          Your details go straight to the secretariat by email. We never share them with third
          parties.
        </p>
      </div>
    </form>
  );
}
