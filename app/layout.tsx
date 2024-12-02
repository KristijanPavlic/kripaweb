import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KriPa Web | Web Development Services",
  metadataBase: new URL("https://kripaweb.com"),
  keywords: [
    "webflow development",
    "full-stack web development",
    "front end development",
    "back end development",
    "web development services",
    "ui/ux design",
    "web design",
    "seo strategies",
    "design to code",
    "custom website updates",
    "reliable hosting services",
    "high-performance websites",
    "user-friendly websites",
    "secure websites",
    "modern websites",
    "kripa web",
    "kripaweb",
    "kristijan pavlic",
    "kristijan pavlic tumpa",
  ],
  description:
    "KriPa Web specializes in Webflow development, full-stack web development, UI/UX design, SEO strategies, design-to-code transformations, custom website updates, and reliable hosting services. We deliver high-performance, user-friendly, and secure websites.",
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
      sizes: "32x32",
      type: "image/ico",
    },
    {
      url: "/icon.ico",
      href: "/icon.ico",
      type: "image/svg+xml",
    },
    {
      url: "/apple-touch-icon.png",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "apple-touch-icon",
    },
    {
      url: "/icon-192x192.png",
      href: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/icon-512x512.png",
      href: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  authors: [{ name: "Kristijan Pavlic", url: "https://kripaweb.com/" }],
  openGraph: {
    siteName: "KriPa Web",
    title: "KriPa Web | Web Development Services",
    description:
      "KriPa Web specializes in Webflow development, full-stack web development, UI/UX design, SEO strategies, design-to-code transformations, custom website updates, and reliable hosting services. We deliver high-performance, user-friendly, and secure websites.",
    url: "https://kripaweb.com/",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 32,
        height: 32,
        alt: "KriPa Icon",
      },
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "KriPa Web Apple Touch Icon",
      },
      {
        url: "/icon-192x192.png",
        width: 192,
        height: 192,
        alt: "KriPa Web Android Chrome 192x192",
      },
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "KriPa Web Android Chrome 512x512",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="sitemap" content="/sitemap.xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={poppins.className}>
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
