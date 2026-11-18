import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://monito-pets.example.com";
  const buildDate = new Date("2026-11-09T00:00:00.000Z");

  // Static routes
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: buildDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/category`,
      lastModified: buildDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  return routes;
}

