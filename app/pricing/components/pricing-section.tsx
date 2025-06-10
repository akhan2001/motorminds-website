"use client";

import { useState } from "react";
import PricingCard from "./pricing-card";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

const pricingPlans = [
    {
        title: "The V6 Model",
        price: 150,
        features: [
            "M.I.A",
            "Invoicing",
            "Mechanics Hub"
        ],
        usageLimits: [
            "Additional Charges Per User",
            "Not listed on Marketplace"
        ]
    },
    {
        title: "The V8 Model",
        price: 350,
        features: [
            "All features of V6",
            "Loyalty Program",
            "Market Place listing"
        ],
        usageLimits: [
            "Up to 5 users",
            "Custom Marketplace listing"
        ],
        isPopular: true
    },
    {
        title: "The W12 Model",
        price: 500,
        features: [
            "All features of V8",
            "Lead Generation",
            "M.I.A Diagnostics"
        ],
        usageLimits: [
            "Unlimited usage",
            "Promoted on Marketplace"
        ]
    },
    {
        title: "Enterprise",
        price: null,
        features: [
            "Custom AI Models",
            "Dedicated Support Team",
            "Custom Integration Solutions",
            "Advanced Analytics"
        ],
        usageLimits: [
            "Unlimited Everything",
            "Custom Contract Terms"
        ]
    }
];

export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(false);

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
                    
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-4">
                            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
                                Monthly
                            </span>
                            <Switch
                                checked={isYearly}
                                onCheckedChange={setIsYearly}
                                className="data-[state=checked]:bg-red-500"
                            />
                            <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-400'}`}>
                                Yearly
                            </span>
                        </div>
                        <span className="text-red-500 text-sm">
                            Save 20% with yearly billing
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            {...plan}
                            isYearly={isYearly}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 