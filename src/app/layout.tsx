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
  process.env.VERCEL_ENV === "production"
    ? (process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL)
    : (process.env.VERCEL_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL);
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
    "Explore 15 functional specialist SLM profiles for software delivery in the local-first Helios runtime.",
  applicationName: "Helios Marketplace",
  category: "technology",
  keywords: [
    "small language models",
    "SLM",
    "local AI",
    "Helios",
    "specialist SLMs",
    "software agents",
    "front-end SLM",
    "DevOps SLM",
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
      "Explore 15 role-scoped SLM profiles with clear inputs, outputs, responsibilities, and operating boundaries.",
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
      "Explore 15 role-scoped SLM profiles with clear inputs, outputs, responsibilities, and operating boundaries.",
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

