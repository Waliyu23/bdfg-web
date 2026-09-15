"use client";

import Link from "@/components/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ScrollProgress from "@/components/scroll-progress";
import { primaryNav, site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`relative sticky top-0 z-50 border-b bg-paper/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "border-line shadow-[0_10px_30px_-24px_rgba(10,23,51,.5)]"
          : "border-transparent"
      }`}
    >
      <ScrollProgress />
      <div className="shell-wide flex h-[76px] items-center justify-between gap-4">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <span className="flex items-center gap-3">
            <span className="block h-14 w-14 shrink-0">
              <img
                src={site.logo}
                alt=""
                width={256}
                height={256}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.0625rem] font-semibold tracking-tight text-blue-800">
                {site.shortName}
              </span>
              <span className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-ink/45">
                {site.region}
              </span>
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-blue-50 text-blue-700"
                  : "text-ink/70 hover:text-blue-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/contact" className="btn-ghost">
            Contact
          </Link>
          <Link href="/donate" className="btn-gold">
            Donate
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-blue-700 lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label="Mobile" className="shell flex flex-col py-4">
          {[...primaryNav, { href: "/contact", label: "Contact" }].map(
            (link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-line/70 py-3.5 text-base font-medium text-ink/80"
              >
                {link.label}
              </Link>
            ),
          )}
          <Link href="/donate" className="btn-gold mt-5 w-full">
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
