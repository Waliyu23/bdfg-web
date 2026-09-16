import type { MetadataRoute } from "next";

import { focusAreas } from "@/lib/focus-areas";
import { executiveRoles } from "@/lib/leadership";
import { news } from "@/lib/news";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about",
  "/focus-areas",
  "/leadership",
  "/partners",
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
    ...executiveRoles.map((role) => ({
      url: `${site.url}/leadership/${role.slug}/`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...news.map((item) => ({
      url: `${site.url}/news/${item.slug}/`,
      lastModified: new Date(item.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
