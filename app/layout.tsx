import type { Metadata } from "next";
import { GeistSans, GeistMono } from 'geist/font';
import "./globals.css";

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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
