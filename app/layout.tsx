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

export const metadata: Metadata = {
  title: "Suitami - Autonomous AI Agents for Web3 Communities",
  description: "The intelligence layer that empowers your Web3 communities with autonomous AI agents, trained to manage, engage, and grow your ecosystem.",
  keywords: ["Web3", "AI Agents", "Community Management", "Blockchain", "Autonomous", "AI", "Web3 Communities"],
  authors: [{ name: "Suitami" }],
  openGraph: {
    title: "Suitami - Autonomous AI Agents for Web3 Communities",
    description: "The intelligence layer that empowers your Web3 communities with autonomous AI agents, trained to manage, engage, and grow your ecosystem.",
    url: "https://suitami.vercel.app",
    siteName: "Suitami",
    images: [
      {
        url: "/suitami-nav-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Suitami Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suitami - Autonomous AI Agents for Web3 Communities",
    description: "The intelligence layer that empowers your Web3 communities with autonomous AI agents, trained to manage, engage, and grow your ecosystem.",
    images: ["/suitami-nav-logo-transparent.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/suitami-nav-logo-transparent.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/suitami-nav-logo-transparent.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#001324",
  metadataBase: new URL("https://suitami.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
