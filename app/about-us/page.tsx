import { Navbar } from "@/app/(pages)/components/common/NavBar";
import Footer from "@/app/(pages)/components/common/Footer";
import CTABanner from "@/app/(pages)/components/common/CTABanner";
// import HeroBanner from "./components/hero-banner";
import HeroBanner from "@/components/hero-banner";
import OurStory from "./components/our-story";
import TeamSection from "./components/team-section";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroBanner title="About Us" backgroundImage="/about-hero.png" imageAlt="About Us" />
        <TeamSection />
        <OurStory />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
