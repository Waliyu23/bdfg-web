import Link from "next/link";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
};

/** Closing "work with us" band used at the foot of most pages. */
export default function CtaBand({
  eyebrow = "Work with us",
  title = "Partnership, volunteering, or a donation — every route helps.",
  body = "We work with district assemblies, donors, diaspora groups and individual volunteers. Tell us what you can offer and we will find the programme where it counts most.",
}: CtaBandProps) {
  return (
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
              {eyebrow}
            </p>
            <h2 className="font-display text-[1.7rem] leading-[1.14] sm:text-[2.15rem]">{title}</h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/get-involved" className="btn-gold">
                Get involved
              </Link>
              <Link href="/donate" className="btn-onblue">
                Support our work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
