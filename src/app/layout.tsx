import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/lib/site";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Scattergates | Premium Corporate Gifting & Merchandise",
    template: "%s | Scattergates"
  },
  description: "Premium corporate gifting, branded merchandise, product previews, and AI-led gifting recommendations for high-impact teams and events.",
  keywords: ["corporate gifting", "premium merchandise", "custom bottles", "branded apparel", "event props", "Scattergates"],
  authors: [{ name: "Scattergates" }],
  openGraph: {
    title: "Scattergates Premium Corporate Gifting",
    description: "Cinematic ecommerce for custom merchandise, sports-inspired brand drops, and corporate gifting.",
    url: site.url,
    siteName: "Scattergates",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Scattergates Premium Corporate Gifting",
    description: "Luxury branded merchandise with fast product previews."
  }
};

export const viewport: Viewport = {
  themeColor: "#050608",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scattergates",
    url: "https://scattergates.com",
    email: site.email,
    telephone: site.phone,
    sameAs: ["https://scattergates.com"]
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
