import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  if (!site.indexable) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, host: site.url, sitemap: `${site.url}/sitemap.xml` };
}
