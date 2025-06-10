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
  title: "Motorminds",
  description: "Revolutionize your auto shop with our AI-powered management tool.",
  metadataBase: new URL(
    process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : 'https://motorminds.ca'
  ),
  openGraph: {
    title: "Motorminds",
    description: "Revolutionize your auto shop with our AI-powered management tool.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://motorminds.ca',
    siteName: "Motorminds",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
