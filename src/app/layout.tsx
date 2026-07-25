import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const metadataBase = new URL(
  deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Helios Marketplace — Small models, serious work",
    template: "%s — Helios Marketplace",
  },
  description:
    "Discover a curated catalog of small language models for the local-first Helios runtime.",
  applicationName: "Helios Marketplace",
  category: "technology",
  keywords: [
    "small language models",
    "SLM",
    "local AI",
    "Helios",
    "open models",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Helios Marketplace",
    title: "Helios Marketplace — Small models, serious work",
    description:
      "Explore 15 curated small language model profiles for the local-first Helios runtime.",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Helios Marketplace — Small models. Serious work.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helios Marketplace — Small models, serious work",
    description:
      "Explore 15 curated small language model profiles for the local-first Helios runtime.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

