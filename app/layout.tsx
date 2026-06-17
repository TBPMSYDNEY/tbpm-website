import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { site } from "@/data/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://tbpm.com.au/#organization",
  name: site.legalName,
  alternateName: site.name,
  url: "https://tbpm.com.au",
  email: site.email,
  telephone: "+61272401700",
  image: "https://tbpm.com.au/images/logo.png",
  logo: "https://tbpm.com.au/images/logo.png",
  description: site.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: "39 Taunton Rd",
    addressLocality: "Hurstville",
    addressRegion: "NSW",
    postalCode: "2220",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "City",
    name: "Sydney",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// High-contrast optical serif for an editorial, premium display voice.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tbpm.com.au"),
  title: {
    default: "Sydney Building Management & Strata Services | TBPM",
    template: "%s | TBPM",
  },
  description:
    "Sydney's trusted partner for building management, cleaning, gardening, concierge and project management — protecting your property assets and residents.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "TBPM — Total Building & Property Management",
    locale: "en_AU",
    type: "website",
    url: "https://tbpm.com.au",
    images: [
      {
        url: "/images/tbpm-building-manager-hero.jpg",
        width: 1456,
        height: 816,
        alt: "TBPM — Total Building & Property Management, Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TBPM | Building Management Sydney",
    description:
      "Sydney's trusted partner for building management, cleaning, gardening, concierge services and project management.",
    images: ["/images/tbpm-building-manager-hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Analytics />
        <JsonLd data={organizationSchema} />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
