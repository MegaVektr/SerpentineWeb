import type { Metadata } from "next";
import NextLink from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { UtilitarianHero } from "@/components/marketing/UtilitarianHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Blog — SPNT Engineering",
  description:
    "Methodology, architecture, comparisons, and industry-specific writing from SPNT.",
  path: "/blog",
});

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <>
      <UtilitarianHero
        tone="light"
        eyebrow="BLOG"
        h1="Engineering and security writing."
        sub="Methodology, architecture, comparisons, compliance, and industry-specific writing from SPNT engineers."
      />

      <Section tone="light">
        <Container>
          {posts.length === 0 ? (
            <p className="t-body text-[var(--ink-soft)]">No posts yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Card key={post.slug} tone="light">
                  <Pill variant="default">{post.category}</Pill>
                  <h2 className="t-feature mt-5">
                    <NextLink href={`/blog/${post.slug}`}>
                      {post.title}
                    </NextLink>
                  </h2>
                  <p className="t-small text-[var(--ink-soft)] mt-3">
                    {post.description}
                  </p>
                  <div className="t-data text-[var(--ink-muted)] mt-6 flex items-center gap-3">
                    <time dateTime={post.datePublished}>
                      {formatDate(post.datePublished)}
                    </time>
                    <span aria-hidden>·</span>
                    <span>{post.readingTimeMin} min read</span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTABlock
        tone="dark"
        title="Subscribe to the blog."
        body="Engineering writing only — methodology, architecture, comparisons. No marketing."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{ label: "Talk to Sales", href: "/company/contact#sales" }}
      />
    </>
  );
}
