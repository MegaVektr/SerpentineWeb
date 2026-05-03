import type { MetadataRoute } from "next";
import { listBlogSlugs } from "@/lib/content";

const BASE = "https://spnt.io";

const STATIC_ROUTES: { path: string; priority?: number; changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/platform", priority: 0.9 },
  { path: "/products/odbrana", priority: 0.9 },
  { path: "/products/napad", priority: 0.85 },
  { path: "/products/postava", priority: 0.9 },
  { path: "/products/regulativa", priority: 0.85 },
  { path: "/pricing", priority: 0.9 },
  { path: "/methodology", priority: 0.8 },
  { path: "/security", priority: 0.7 },
  { path: "/trust", priority: 0.8 },
  { path: "/industries", priority: 0.7 },
  { path: "/industries/saas", priority: 0.6 },
  { path: "/industries/fintech", priority: 0.6 },
  { path: "/industries/mssp", priority: 0.6 },
  { path: "/industries/critical-infrastructure", priority: 0.6 },
  { path: "/resources", priority: 0.6 },
  { path: "/blog", priority: 0.7 },
  { path: "/changelog", priority: 0.6 },
  { path: "/company/about", priority: 0.7 },
  { path: "/company/contact", priority: 0.8 },
  { path: "/legal/privacy", priority: 0.4 },
  { path: "/legal/terms", priority: 0.4 },
  { path: "/legal/dpa", priority: 0.4 },
  { path: "/legal/aup", priority: 0.4 },
  { path: "/legal/subprocessors", priority: 0.4 },
  { path: "/legal/cookies", priority: 0.4 },
  { path: "/legal/security-disclosure", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = STATIC_ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency ?? "monthly",
    priority: r.priority ?? 0.5,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    blogEntries = listBlogSlugs().map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    }));
  } catch {
    blogEntries = [];
  }

  return [...staticEntries, ...blogEntries];
}
