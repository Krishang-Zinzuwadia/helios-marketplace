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
    default: "Helios Marketplace — Small models for specific jobs",
    template: "%s — Helios Marketplace",
  },
  description:
    "Meet 15 Helios specialists for front-end, back-end, DevOps, security, testing, data, and more.",
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
    title: "Helios Marketplace — Small models for specific jobs",
    description:
      "Meet 15 small-model specialists for front-end, back-end, DevOps, security, testing, data, and more.",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Helios Marketplace — Small models for specific jobs.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helios Marketplace — Small models for specific jobs",
    description:
      "Meet 15 small-model specialists for front-end, back-end, DevOps, security, testing, data, and more.",
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

