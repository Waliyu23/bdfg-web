"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

/**
 * Adds `is-in` to reveal elements as they scroll into view.
 *
 * Siblings that reveal together are staggered by their position inside the
 * shared parent, so a grid of cards arrives in sequence rather than all at
 * once. Elements already in view on load are revealed immediately, and
 * reduced-motion visitors get everything visible with no transition.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR),
    );
    if (elements.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-in"));
      return;
    }

    // Stagger by index among revealing siblings, capped so long lists stay snappy.
    elements.forEach((el) => {
      const siblings = Array.from(el.parentElement?.children ?? []).filter(
        (node) => node.matches(SELECTOR),
      );
      const index = siblings.indexOf(el);
      if (siblings.length > 1 && index > 0) {
        el.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 80}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
