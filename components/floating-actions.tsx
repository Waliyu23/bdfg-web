"use client";

import { usePathname } from "next/navigation";

import Link from "@/components/link";
import { useEffect, useState } from "react";

/**
 * Fixed bottom-right dock: a back-to-top button that fades in once the page is
 * scrolled past 500px, and a persistent Donate pill (hidden on /donate itself).
 */
export default function FloatingActions() {
  const pathname = usePathname() || "/";
  const onDonatePage = pathname.startsWith("/donate");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const backToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      <button
        type="button"
        onClick={backToTop}
        aria-label="Back to top"
        title="Back to top"
        className={`pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-blue-900/12 bg-white text-blue-800 shadow-lift transition-all duration-300 hover:bg-blue-900 hover:text-white ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          aria-hidden="true"
        >
          <path d="M12 19V6M5.5 12.5L12 6l6.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {!onDonatePage && (
        <Link
          href="/donate"
          className="pointer-events-auto flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 font-semibold text-blue-900 shadow-lift ring-2 ring-white/90 transition-all duration-200 hover:bg-gold-500 hover:shadow-xl"
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
            <path d="M12 20.5s-7.6-4.4-7.6-9.4a4.2 4.2 0 017.6-2.5 4.2 4.2 0 017.6 2.5c0 5-7.6 9.4-7.6 9.4z" />
          </svg>
          <span className="text-[0.9375rem]">Donate</span>
        </Link>
      )}
    </div>
  );
}
