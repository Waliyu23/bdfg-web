"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds `is-in` to every `.reveal` element as it scrolls into view.
 * Re-runs on route change so client-side navigations animate too.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (elements.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    elements.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
