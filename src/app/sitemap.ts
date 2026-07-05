import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.domain}/`,
      lastModified: new Date("2026-07-04"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.domain}/menu`,
      lastModified: new Date("2026-07-04"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
