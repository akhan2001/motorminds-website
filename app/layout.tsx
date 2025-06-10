import type { Metadata } from "next";
import { GeistSans, GeistMono } from 'geist/font';
import { Bricolage_Grotesque } from 'next/font/google';
import "./globals.css";

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bricolage',
    weight: ['200', '300', '400', '500', '600', '700', '800'],
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
        <html lang="en" className={`${bricolage.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
            <body className="antialiased font-bricolage">
                {children}
            </body>
        </html>
    );
}
