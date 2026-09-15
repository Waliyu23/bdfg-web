import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
};

/** Deep-blue page masthead with breadcrumb, eyebrow, title and optional lede. */
export default function PageHero({ eyebrow, title, lede, crumbs = [] }: PageHeroProps) {
  return (
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
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/55">
              <li>
                <Link href="/" className="hover:text-gold-300">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-gold-300">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/85">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
          <span aria-hidden="true" className="block h-[2px] w-6 bg-gold-400" />
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-[2.15rem] leading-[1.08] sm:text-[3rem]">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-[1.0625rem]">
            {lede}
          </p>
        )}
      </div>
      <div className="kente" />
    </section>
  );
}
