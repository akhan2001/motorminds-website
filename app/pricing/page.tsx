import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import HeroBanner from "@/components/hero-banner";
import PricingSection from "./components/pricing-section";

export default function Pricing() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <main>
                <HeroBanner
                    title="Pricing Plans"
                    backgroundImage="/pricing-hero.jpg"
                    imageAlt="MotorMinds Pricing"
                />
                <PricingSection />
                <CTABanner />
            </main>
            <Footer />
        </div>
    );
} 