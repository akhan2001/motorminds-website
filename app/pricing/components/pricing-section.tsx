"use client";

import PricingCard from "./pricing-card";
import Image from "next/image";

const pricingPlans = [
    {
        title: "CRM",
        price: 350,
        features: [
            "Customer management",
            "Work order tracking",
            "Vehicle history",
            "Service scheduling",
            "Invoice management",
            "Customer communication"
        ],
        usageLimits: [
            "Up to 3 users",
            "Unlimited customers",
            "Unlimited work orders"
        ],
        isPopular: false
    },
    {
        title: "CRM + AI Diagnostics",
        price: 500,
        features: [
            "All CRM features",
            "AI-powered diagnostics",
            "Repair recommendations",
            "Parts identification",
            "Diagnostic history",
            "Smart search"
        ],
        usageLimits: [
            "Unlimited AI diagnostics",
            "Unlimited customers",
            "Unlimited work orders"
        ],
        isPopular: true
    },
    {
        title: "Enterprise",
        price: null,
        features: [
            "All CRM + AI features",
            "Custom AI Models",
            "Dedicated Support Team",
            "Custom Integration Solutions",
            "Advanced Analytics",
            "HIPAA Compliance",
            "White-label options"
        ],
        usageLimits: [
            "Unlimited everything",
        ]
    }
];

export default function PricingSection() {
    return (
        <section className="pt-20 pb-40 bg-black relative">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/motorminds-homepage-background.png"
                    alt="MotorMinds Background"
                    fill
                    className="object-cover opacity-10 mix-blend-overlay"
                    priority
                    quality={100}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Choose a plan that's right for you
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            {...plan}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 