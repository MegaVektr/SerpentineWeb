import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, "content", "blog");
const CHANGELOG_DIR = path.join(ROOT, "content", "changelog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  category: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  ogImage?: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readingTimeMin: number;
};

function safeReaddir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function listBlogSlugs(): string[] {
  return safeReaddir(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx?|md)$/, ""));
}

export function getBlogPosts(): BlogPostMeta[] {
  return listBlogSlugs()
    .map((slug) => {
      const file = fs.existsSync(path.join(BLOG_DIR, `${slug}.mdx`))
        ? path.join(BLOG_DIR, `${slug}.mdx`)
        : path.join(BLOG_DIR, `${slug}.md`);
      const raw = fs.readFileSync(file, "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        readingTimeMin: estimateReadingTime(content),
        ...(data as BlogFrontmatter),
      };
    })
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
}

export function getBlogPost(slug: string): { meta: BlogPostMeta; content: string } | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const file = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
  if (!file) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    content,
    meta: {
      slug,
      readingTimeMin: estimateReadingTime(content),
      ...(data as BlogFrontmatter),
    },
  };
}

export type ChangelogEntry = {
  slug: string;
  date: string;
  product: string;
  title: string;
  body: string;
};

export function getChangelogEntries(): ChangelogEntry[] {
  return safeReaddir(CHANGELOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.(mdx?|md)$/, "");
      const raw = fs.readFileSync(path.join(CHANGELOG_DIR, f), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        date: String(data.date),
        product: String(data.product),
        title: String(data.title),
        body: content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
