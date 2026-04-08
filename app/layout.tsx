import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://listmagic.shop"),
  title: {
    default: "ListMagic | #1 Etsy SEO Tool - Rank Your Products on Page 1",
    template: "%s | ListMagic - Etsy SEO Tool",
  },
  description:
    "Get your Etsy products ranked on Page 1 in 7 days guaranteed. Join 318+ successful sellers who increased revenue by 3.3x. Free SEO calculator included.",
  keywords: [
    "Etsy SEO",
    "Etsy ranking tool",
    "Etsy product optimizer",
    "Etsy listing SEO",
    "Etsy page 1 ranking",
    "Etsy search optimization",
    "ListMagic",
    "Etsy seller tool",
    "Etsy keyword tool",
  ],
  authors: [{ name: "ListMagic", url: "https://listmagic.shop" }],
  creator: "ListMagic",
  publisher: "ListMagic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://listmagic.shop",
    siteName: "ListMagic - Etsy SEO Tool",
    title: "ListMagic | Get Your Etsy Products on Page 1 in 7 Days",
    description:
      "Rank higher on Etsy, get more visitors, and make more sales with our proven SEO optimization tool. 99.5% success rate. Money-back guarantee.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ListMagic Etsy SEO Tool - Rank on Page 1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ListMagic | Etsy SEO Tool - Page 1 Ranking Guaranteed",
    description:
      "Join 318+ Etsy sellers who ranked their products on Page 1. Free SEO calculator. 7-day ranking guarantee.",
    images: ["/twitter-image.jpg"],
    creator: "@listmagic",
    site: "@listmagic",
  },
  alternates: {
    canonical: "https://listmagic.shop",
  },
  category: "E-commerce SEO Tool",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FF6A00" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="Content-Language" content="en" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
