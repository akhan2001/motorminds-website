import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
    title: string;
    price: number | null;
    features: string[];
    usageLimits: string[];
    isPopular?: boolean;
    isYearly: boolean;
}

export default function PricingCard({
    title,
    price,
    features,
    usageLimits,
    isPopular,
    isYearly
}: PricingCardProps) {
    const yearlyPrice = price ? Math.floor(price * 12 * 0.8) : null; // 20% discount for yearly
    const displayPrice = isYearly ? yearlyPrice : price;
    const isEnterprise = price === null;
    
    return (
        <div className={`rounded-2xl p-8 flex flex-col h-full ${
            isPopular ? 'bg-red-500/10 border-2 border-red-500' : 
            isEnterprise ? 'bg-zinc-900 border-2 border-white/20' : 'bg-zinc-900'
        }`}>
            <div className="pb-8">
                <div className="relative">
                    {isPopular && (
                        <span className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Popular
                        </span>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                    <div className="flex items-baseline gap-1">
                        {displayPrice !== null ? (
                            <>
                                <span className="text-4xl font-bold text-white">${displayPrice}</span>
                                <span className="text-lg text-gray-400">{isYearly ? '/year' : '/month'}</span>
                            </>
                        ) : (
                            <span className="text-2xl text-gray-400">Contact Us</span>
                        )}
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <div className="space-y-2 text-gray-300">
                        <p className="font-semibold text-lg mb-4 text-white">Features</p>
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Check className="h-5 w-5 flex-shrink-0 text-red-500" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2 text-gray-300">
                        <p className="font-semibold text-lg mb-4 text-white">Usage Limits</p>
                        {usageLimits.map((limit, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Check className="h-5 w-5 flex-shrink-0 text-red-500" />
                                <span>{limit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Button 
                className={`w-full mt-auto ${
                    isPopular 
                        ? 'bg-red-500 text-white hover:bg-red-600' 
                        : isEnterprise
                        ? 'bg-zinc-800 text-white hover:bg-zinc-700 border border-white/20'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-red-500'
                } rounded-full cursor-pointer`}
            >
                {isEnterprise ? 'Contact Sales' : 'Get Started'}
            </Button>
        </div>
    );
} 