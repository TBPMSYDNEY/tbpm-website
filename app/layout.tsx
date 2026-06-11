import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tbpm.com.au"),
  title: {
    default: "TBPM | Building Management Sydney — Total Building & Property Management",
    template: "%s | TBPM",
  },
  description:
    "Sydney's trusted partner for building management, cleaning, gardening, concierge services and project management. We protect property assets and enhance resident satisfaction.",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    siteName: "TBPM — Total Building & Property Management",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
