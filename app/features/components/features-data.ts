export interface Feature {
    id: string;
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    features: string[];
    reverse?: boolean;
}

export const features: Feature[] = [
    {
        id: "ai-diagnostics",
        image: "/features/feature-1.png",
        imageAlt: "AI-Powered Automotive Diagnostics",
        title: "AI-Powered Automotive Diagnostics",
        description: "Revolutionize repair workflows with AI that reads OBD data, analyzes fault codes, and gives predictive maintenance alerts.",
        features: [
            "Real-time vehicle health monitoring",
            "Predictive maintenance notifications",
            "Automated fault code analysis",
            "Machine learning-powered repair suggestions"
        ]
    },
    {
        id: "smart-crm",
        image: "/features-image-3.png",
        imageAlt: "Smart CRM System for Auto Shops",
        title: "Smart CRM System for Auto Shops",
        description: "Manage customers, service history, and loyalty programs with an AI-driven CRM tailored for auto shops.",
        features: [
            "Automated appointment scheduling",
            "Service history tracking",
            "Customer communication tools",
            "Loyalty rewards management"
        ],
        reverse: true
    },
    {
        id: "shop-management",
        image: "/features-image-2.png",
        imageAlt: "Comprehensive Shop Management",
        title: "Comprehensive Shop Management",
        description: "Run your shop like a pro with tools for inventory, staff, financials, and parts integration — all in one platform.",
        features: [
            "Inventory tracking and supplier integration",
            "Staff scheduling and time tracking",
            "Financial analytics dashboard",
            "Multi-location management"
        ]
    }
];
