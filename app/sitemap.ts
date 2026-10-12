import { MetadataRoute } from "next";
import { blogPosts } from "@/src/content/posts";
import { SITE_URL } from "@/src/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about-yug3dai",
    "/ai-services",
    "/3d-services",
    "/am-designing-optimization-and-prototyping",
    "/am-application-engineering",
    "/cad-engineering-service",
    "/contact-us",
    "/learn-centre",
    "/privacy-policy",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-10-11"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
