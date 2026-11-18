import Link from "@/components/link";
import Photo from "@/components/photo";

export type Crumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
  image: string;
  imageAlt: string;
};

/** Deep-blue page masthead with breadcrumb, eyebrow, title and optional lede. */
export default function PageHero({
  eyebrow,
  title,
  lede,
  crumbs = [],
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[700px] overflow-hidden bg-blue-950 text-white sm:min-h-[660px] lg:min-h-[640px]">
      <div className="absolute inset-0" aria-hidden="true">
        <Photo
          src={image}
          alt={imageAlt}
          width={1920}
          height={900}
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-blue-950/75 via-blue-950/55 to-blue-950/20"
      />
      <div className="shell relative flex flex-1 flex-col justify-center py-14 sm:py-20 lg:py-24">
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
          <h1 className="max-w-3xl font-display text-[2.15rem] leading-[1.08] sm:text-[3rem] lg:text-[3.5rem]">
            {title}
          </h1>
          {lede && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-[1.0625rem]">
              {lede}
            </p>
          )}
      </div>
      <div className="kente absolute inset-x-0 bottom-0" />
    </section>
  );
}
