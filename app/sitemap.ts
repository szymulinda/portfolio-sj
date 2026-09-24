import type { MetadataRoute } from "next";
import { sitemapRoutes } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const builtAt = new Date();

  return sitemapRoutes.map((route) => ({
    url: `https://szymonjurkun.pl${route.path === "/" ? "" : route.path}`,
    lastModified:
      "lastModified" in route ? new Date(route.lastModified) : builtAt,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
