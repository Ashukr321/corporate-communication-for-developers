import type { MetadataRoute } from "next";
import { getCategories, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...getCategories().flatMap((c) => [
      {
        url: `${site.url}/docs/${c.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      ...c.topics.map((t) => ({
        url: `${site.url}/docs/${c.slug}/${t.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ]),
  ];
}
