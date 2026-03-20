import type { Metadata } from "next";

import { pitchContent } from "@/content/pitch";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tiletap.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pitchContent.metadata.title,
  description: pitchContent.metadata.description,
  openGraph: {
    title: pitchContent.metadata.title,
    description: pitchContent.metadata.description,
    url: siteUrl,
    siteName: pitchContent.brand,
    images: [
      {
        url: pitchContent.images.primary.src,
        alt: pitchContent.images.primary.alt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pitchContent.metadata.title,
    description: pitchContent.metadata.description,
    images: [pitchContent.images.primary.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
