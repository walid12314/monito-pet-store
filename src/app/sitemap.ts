import type { MetadataRoute } from "next";
import { FEATURED_PETS } from "@/components/PetShowcase";
import { PRODUCTS_DATA } from "@/components/ProductShowcase";
import { PET_KNOWLEDGE_DATA } from "@/components/PetKnowledge";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://monito-pets.example.com";
  const buildDate = new Date("2026-11-20T00:00:00.000Z");

  // 1. Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/category`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // 2. Dynamic Pet Detail routes (/pets/[slug])
  const uniquePetSlugs = Array.from(
    new Set(["shiba-inu-sepia", ...FEATURED_PETS.map((p) => p.slug)])
  );
  const petRoutes: MetadataRoute.Sitemap = uniquePetSlugs.map((slug) => ({
    url: `${baseUrl}/pets/${slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 3. Dynamic Product Detail routes (/products/[slug])
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS_DATA.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 4. Dynamic Blog Article routes (/blog/[slug])
  const blogRoutes: MetadataRoute.Sitemap = PET_KNOWLEDGE_DATA.map(
    (article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...petRoutes, ...productRoutes, ...blogRoutes];
}
