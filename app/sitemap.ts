import { MetadataRoute } from "next";
import { siteConfig, projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({
      url: `${siteConfig.siteUrl}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
