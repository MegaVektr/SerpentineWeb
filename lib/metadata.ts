import type { Metadata } from "next";

export function pageMetadata(args: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  return {
    title: args.title,
    description: args.description,
    alternates: { canonical: args.path },
    openGraph: {
      title: args.title,
      description: args.description,
      url: args.path,
      images: args.ogImage ? [{ url: args.ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: args.title,
      description: args.description,
    },
  };
}
