import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lapwing Common | UK Nature Investment Fund",
  description:
    "Investing in the restoration of Britain's natural heritage. Lapwing Common is a UK-based nature investment fund dedicated to ecological recovery and sustainable returns.",
  keywords: [
    "nature investment",
    "UK conservation",
    "ecological restoration",
    "sustainable investing",
    "natural capital",
  ],
  authors: [{ name: "TEEK Group Limited" }],
  openGraph: {
    title: "Lapwing Common | UK Nature Investment Fund",
    description:
      "Investing in the restoration of Britain's natural heritage.",
    type: "website",
    locale: "en_GB",
    siteName: "Lapwing Common",
    // TODO: Add url and images once domain is live
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapwing Common | UK Nature Investment Fund",
    description:
      "Investing in the restoration of Britain's natural heritage.",
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
      <body
        className={`${geistSans.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
