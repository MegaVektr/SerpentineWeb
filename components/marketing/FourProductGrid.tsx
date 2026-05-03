import { ProductCard } from "@/components/marketing/ProductCard";

const PRODUCTS = [
  {
    index: "01",
    name: "Odbrana",
    tagline: "Defense",
    description:
      "Nine-scanner vulnerability audit platform for web, code, cloud, containers, APIs, mobile, blockchain, AI/ML, and network infrastructure.",
    status: "available" as const,
    statusLabel: "Available now",
    href: "/products/odbrana",
    cta: "View product",
  },
  {
    index: "02",
    name: "Napad",
    tagline: "Offense",
    description:
      "Agentic offensive security platform. Validates Odbrana's findings through structured attack workflows. Built for red teams and AppSec engineers who outgrew Burp.",
    status: "beta" as const,
    statusLabel: "Private beta",
    href: "/products/napad",
    cta: "Request access",
  },
  {
    index: "03",
    name: "Postava",
    tagline: "Setup",
    description:
      "Single-binary CLI that deploys and hardens Linux servers in one operation. Firewall, SSH, kernel, Fail2ban, signature verification — in under three minutes.",
    status: "open" as const,
    statusLabel: "Open source + Pro",
    href: "/products/postava",
    cta: "View product",
  },
  {
    index: "04",
    name: "Regulativa",
    tagline: "Governance",
    description:
      "Framework-agnostic compliance OS. Maps obligations to controls and evidence across ISO 27001, SOC 2, NIST CSF, GDPR, and more. Evidence reuses across frameworks.",
    status: "soon" as const,
    statusLabel: "Coming 2026",
    href: "/products/regulativa",
    cta: "Join waitlist",
  },
];

export function FourProductGrid({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {PRODUCTS.map((p) => (
        <ProductCard key={p.name} {...p} tone={tone} />
      ))}
    </div>
  );
}
