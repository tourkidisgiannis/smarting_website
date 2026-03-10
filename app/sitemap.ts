import { MetadataRoute } from "next";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.smarting.gr";

  // Static routes
  const staticRoutes = [
    "",
    "/services",
    "/contact",
    "/reviews",
    "/info",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Category routes
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/services/${category.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Subcategory routes
  const subcategoryRoutes = categories.flatMap((category) =>
    category.subcategories.map((sub) => ({
      url: `${baseUrl}/services/${category.id}/${sub.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...categoryRoutes, ...subcategoryRoutes];
}
