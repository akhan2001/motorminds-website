import { Navbar } from "@/app/(pages)/components/common/NavBar";
import Footer from "@/app/(pages)/components/common/Footer";
import CTABanner from "@/app/(pages)/components/common/CTABanner";
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