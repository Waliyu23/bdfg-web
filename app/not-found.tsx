import Link from "@/components/link";

import { site } from "@/lib/site";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell flex flex-col items-center py-16 text-center">
        <span className="block h-20 w-20 shrink-0">
          <img
            src={site.logo}
            alt=""
            width={256}
            height={256}
            className="h-full w-full object-contain"
          />
        </span>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-[2rem] leading-tight text-blue-900 sm:text-[2.75rem]">
          We could not find that page.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
          The link may be out of date. Try our focus areas, the latest news, or
          contact the secretariat and we will point you to what you need.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
