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
  title: "Aiden - The Management System for all your AI Agents",
  description: "Deploy, train, manage and nurture your AI agents. Automate DAO workflows.",
  keywords: ["Web3", "AI Agents", "Community Management", "Blockchain", "Autonomous", "AI", "Web3 Communities"],
  authors: [{ name: "Aiden" }],
  openGraph: {
    title: "Aiden - The Management System for all your AI Agents",
    description: "Deploy, train, manage and nurture your AI agents. Automate DAO workflows.",
    url: "https://aiden.so",
    siteName: "Aiden",
    images: [
      {
        url: "/aiden-logo.png",
        width: 1200,
        height: 630,
        alt: "Aiden Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aiden - The Management System for all your AI Agents",
    description: "Deploy, train, manage and nurture your AI agents. Automate DAO workflows.",
    images: ["/aiden-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/aiden-logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/aiden-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#001324",
  metadataBase: new URL("https://aiden.vercel.app"),
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
