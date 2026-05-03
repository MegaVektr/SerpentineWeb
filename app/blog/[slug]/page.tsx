import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/lib/schema";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/Link";
import { UtilitarianHero } from "@/components/marketing/UtilitarianHero";
import { getBlogPost, listBlogSlugs } from "@/lib/content";

type RouteParams = { slug: string };

const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
};

export function generateStaticParams(): RouteParams[] {
  return listBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return pageMetadata({
      title: "Post not found — SPNT",
      description: "The requested post does not exist.",
      path: `/blog/${slug}`,
    });
  }
  return pageMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${slug}`,
  });
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;
  const formattedDate = formatDate(meta.datePublished);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: meta.title,
          description: meta.description,
          datePublished: meta.datePublished,
          dateModified: meta.dateModified ?? meta.datePublished,
          author: { "@type": "Organization", name: meta.author },
          publisher: { "@type": "Organization", name: "SPNT" },
          url: `https://spnt.io/blog/${slug}`,
        }}
      />

      <UtilitarianHero
        tone="dark"
        eyebrow={`${meta.category.toUpperCase()} · ${formattedDate}`}
        h1={meta.title}
        sub={meta.description}
      />

      <Section tone="dark">
        <Container size="narrow">
          <div className="mdx on-dark mx-auto max-w-[68ch]">
            <MDXRemote source={content} options={mdxOptions} />
          </div>

          <div className="mx-auto max-w-[68ch] mt-16">
            <ArrowLink href="/blog" tone="on-dark">
              ← Back to the blog
            </ArrowLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
