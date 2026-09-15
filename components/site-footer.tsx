import Link from "@/components/link";

import SocialIcon from "@/components/social-icon";
import EmailLink from "@/components/email-link";
import { focusAreas } from "@/lib/focus-areas";
import { exploreNav, site, socials } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-blue-900 text-white">
      <div className="kente" />
      <div className="shell-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white p-[2px]">
              <img
                src={site.logo}
                alt=""
                width={256}
                height={256}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </span>
            <div className="leading-tight">
              <p className="font-display text-[1.0625rem] font-semibold">
                {site.shortName}
              </p>
              <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.2em] text-white/55">
                {site.region}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            A non-political, non-profit organisation incorporated under
            Ghana&rsquo;s Companies Act in {site.founded}, working with
            marginalised communities across the country.
          </p>
          <p className="mt-5 font-display text-base text-gold-300">
            &ldquo;{site.tagline}&rdquo;
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Focus areas
          </h2>
          <ul className="mt-4 space-y-2.5">
            {focusAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/focus-areas/${area.slug}`}
                  className="text-sm text-white/80 hover:text-gold-300"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {exploreNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 hover:text-gold-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Reach us
          </h2>
          <ul className="mt-4 space-y-4 text-sm text-white/80">
            <li>
              <EmailLink className="wrap-any hover:text-gold-300" />
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-gold-300">
                {site.phone}
              </a>
            </li>
            <li className="pt-1">
              <span className="block text-white/50">Offices</span>
              <span className="mt-1 block">{site.officesLabel}</span>
            </li>
          </ul>

          <h2 className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Follow us
          </h2>
          <ul className="mt-4 flex flex-wrap items-center gap-2.5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={social.label}
                  aria-label={`${site.name} on ${social.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-gold-400 hover:bg-gold-400 hover:text-blue-900 focus-visible:border-gold-400 focus-visible:bg-gold-400 focus-visible:text-blue-900"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell-wide flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Non-political · Non-profit · Registered in Ghana since{" "}
            {site.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
