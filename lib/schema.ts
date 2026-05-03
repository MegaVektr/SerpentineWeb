// JSON-LD schema helpers — emit one <script> per schema block.

import React from "react";

type JsonLD = Record<string, unknown>;

export function JsonLd({ data }: { data: JsonLD | JsonLD[] }) {
  return React.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  });
}

export const ORG_SCHEMA: JsonLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SPNT",
  url: "https://spnt.io",
  logo: "https://spnt.io/logo/serpentine-mark.svg",
  sameAs: ["https://github.com/spnt-io", "https://www.linkedin.com/company/spnt"],
  founder: { "@type": "Person", name: "SPNT Founding Team" },
  foundingLocation: { "@type": "Country", name: "North Macedonia" },
  description:
    "SPNT builds Serpentine — the unified security platform for audit, offense, hardening, and governance.",
};

export const WEBSITE_SCHEMA: JsonLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SPNT",
  url: "https://spnt.io",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://spnt.io/search?q={query}",
    "query-input": "required name=query",
  },
};

export function softwareApplication(args: {
  name: string;
  description: string;
  category?: string;
  os?: string;
  url: string;
  offerPrice?: string;
  offerCurrency?: string;
}): JsonLD {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: args.name,
    description: args.description,
    applicationCategory: args.category ?? "SecurityApplication",
    operatingSystem: args.os ?? "Linux, macOS, Windows",
    url: args.url,
    publisher: { "@type": "Organization", name: "SPNT" },
    offers: args.offerPrice
      ? {
          "@type": "Offer",
          price: args.offerPrice,
          priceCurrency: args.offerCurrency ?? "EUR",
        }
      : undefined,
  };
}

export function faqPage(faqs: Array<{ q: string; a: string }>): JsonLD {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumb(
  trail: Array<{ name: string; url: string }>,
): JsonLD {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
