import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing | MotorMinds - Auto Shop Management Solutions",
    description: "Explore our flexible pricing plans designed for auto shops of all sizes. Choose from V6, V8, or W12 models with features tailored to your needs.",
    openGraph: {
        title: "Pricing Plans | MotorMinds",
        description: "Find the perfect plan for your auto shop.",
        images: [
            {
                url: "/og-pricing.jpg",
                width: 1200,
                height: 630,
                alt: "MotorMinds Pricing Plans"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "MotorMinds Pricing Plans",
        description: "Choose the perfect plan for your auto shop.",
    }
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 