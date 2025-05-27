import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

function PricingCard({ 
  title, 
  price, 
  features, 
  usageLimits, 
  discount, 
  isPopular 
}: { 
  title: string;
  price: number;
  features: string[];
  usageLimits: string[];
  discount: string;
  isPopular?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-8 ${isPopular ? 'bg-red-500' : 'bg-gray-900'}`}>
      <div className="relative">
        {isPopular && (
          <span className="absolute -top-4 -right-4 bg-white text-red-500 px-3 py-1 rounded-full text-sm font-semibold">
            Popular
          </span>
        )}
        <h3 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-white'} mb-2`}>{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-white'}`}>${price}</span>
          <span className={`text-lg ${isPopular ? 'text-white/80' : 'text-gray-400'}`}>/month</span>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className={`space-y-2 ${isPopular ? 'text-white' : 'text-gray-300'}`}>
          <p className="font-semibold text-lg mb-4">Features</p>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className={`space-y-2 ${isPopular ? 'text-white' : 'text-gray-300'}`}>
          <p className="font-semibold text-lg mb-4">Usage Limits</p>
          {usageLimits.map((limit, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 flex-shrink-0" />
              <span>{limit}</span>
            </div>
          ))}
        </div>

        <div className={`pt-4 ${isPopular ? 'text-white/90' : 'text-gray-400'}`}>
          <p className="text-sm">{discount}</p>
        </div>
      </div>

      <Button 
        className={`w-full mt-8 ${
          isPopular 
            ? 'bg-white text-red-500 hover:bg-gray-100' 
            : 'bg-red-500 text-white hover:bg-red-600'
        } rounded-full`}
      >
        Get Started
      </Button>
    </div>
  );
}

export default function Pricing() {
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
      ],
      discount: "One Year Payment of $1500 = $300 Discount"
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
      discount: "One Year Payment of $3600 = $600 Discount",
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
      ],
      discount: "One Year Payment of $4800 = $1200 Discount + Referral Program (Bring a client get a month free)"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/pricing-hero.jpg"
              alt="MotorMinds Pricing"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your auto shop's needs
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
} 