import Link from "@/components/link";

import { partners } from "@/lib/partners";

/** Infinite horizontal marquee of partner marks (list duplicated for a seamless loop). */
export default function PartnerMarquee() {
  return (
    <div className="marquee" aria-label="Partner organisations">
      <ul className="marquee-track py-1">
        {[...partners, ...partners].map((partner, index) => (
          <li
            key={`${partner.name}-${index}`}
            aria-hidden={index >= partners.length ? true : undefined}
            className="w-[210px] shrink-0 sm:w-[240px]"
          >
            <Link
              href="/about#partnership"
              tabIndex={index >= partners.length ? -1 : undefined}
              className="flex h-full flex-col items-center gap-4 rounded-xl2 border border-line bg-white px-5 py-7 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-600/40 hover:shadow-card"
            >
              <span className="flex h-16 w-full items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  {partner.icon}
                </span>
              </span>
              <span>
                <span className="block text-sm font-semibold leading-snug text-blue-900">
                  {partner.name}
                </span>
                <span className="mt-1 block text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-ink/50">
                  {partner.role}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
