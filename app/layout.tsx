import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spnt.io"),
  title: {
    default: "SERPENTINE — The Unified Security Platform",
    template: "%s | SERPENTINE",
  },
  description:
    "Serpentine unifies security audit, offensive testing, infrastructure hardening, and compliance governance. EU-hosted. Built for modern security teams.",
  applicationName: "SERPENTINE",
  keywords: [
    "unified security platform",
    "Serpentine",
    "Odbrana",
    "Napad",
    "Postava",
    "Regulativa",
    "EU security platform",
    "GDPR security",
  ],
  authors: [{ name: "SPNT" }],
  openGraph: {
    type: "website",
    siteName: "SERPENTINE",
    locale: "en_US",
    url: "https://spnt.io",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@spnt_io",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--stone-base)] text-[var(--ink)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
