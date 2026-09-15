import type { MetadataRoute } from "next";

import { focusAreas } from "@/lib/focus-areas";
import { news } from "@/lib/news";
import { site } from "@/lib/site";

const staticRoutes = [
  "",
  "/about",
  "/focus-areas",
  "/leadership",
  "/news",
  "/gallery",
  "/get-involved",
  "/donate",
  "/contact",
];

/** Generates sitemap.xml at build time for every static and dynamic route. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...focusAreas.map((area) => ({
      url: `${site.url}/focus-areas/${area.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...news.map((item) => ({
      url: `${site.url}/news/${item.slug}/`,
      lastModified: new Date(item.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
