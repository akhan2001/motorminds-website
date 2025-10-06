import HeroCTAs from './HeroCTAs.tsx';
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import FeatureCarousel from "@/components/ui/feature-carousel";
import SoftwareFeatures from "../software/SoftwareFeatures";
import FeatureSection1 from "../software/FeatureSection1";
import FeatureSection2 from "../software/FeatureSection2";
import FeatureSection3 from "../software/FeatureSection3";
import CTABanner from "../common/CTABanner";
import { Navbar } from "../common/NavBar";
import Footer from "../common/Footer";

export default function HeroPage() {
    return (
        <>
        {/* Navbar */}
        <Navbar />
        
        <section className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-black relative">
            <AnimatedGridPattern />
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23333%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            {/* Radial gradient dark blur */}
            <div className="absolute inset-0 bg-gradient-radial from-black/50 via-black/80 to-black blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Welcome Badge */}
                <div className="inline-flex items-center gap-3 bg-[#131412] border border-[#1f250e] rounded-[40px] px-6 py-3 mb-8 animate-fade-up-delay-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-500 text-sm font-medium">WELCOME TO MOTORMINDS</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-up-delay-2 text-white">
                    <span className="text-red-500">Cruise</span> Control For <br />
                    Your <span className="text-red-500">Auto Shop.</span>
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up-delay-3">
                    AI-powered shop management software designed to help auto shops stay organized, manage repairs, and optimize operations.
                </p>

                {/* CTAs */}
                <HeroCTAs />
            </div>
        </section>
        
        {/* Feature Carousel */}
        <FeatureCarousel />
        
        {/* Software Features */}
        <SoftwareFeatures />
        
        {/* Feature Section 1 - Management */}
        <FeatureSection1 />
        
        {/* Feature Section 2 - AI Calling */}
        <FeatureSection2 />
        
        {/* Feature Section 3 - Parts & Diagnostics */}
        <FeatureSection3 />
        
        {/* CTA Banner */}
        <CTABanner />
        
        {/* Footer */}
        <Footer />
        </> 
    );
}
