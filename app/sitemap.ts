import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/services/instatoon`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/samples`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/consult`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
