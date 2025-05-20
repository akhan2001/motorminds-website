import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import LogoCarousel from "@/components/logo-carousel";
import Hero from "@/components/hero";
import Features from "@/components/features";
import AnimatedCards from "@/components/animated-cards";
import InfoScroll from "@/components/info-scroll";
import CTABanner from "@/components/cta-banner";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Features />
      <InfoScroll />
      {/* <AnimatedCards /> */}
      <CTABanner />
      <Footer />
    </div>
  );
}
