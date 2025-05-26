import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import HeroBanner from "./components/hero-banner";
import OurStory from "./components/our-story";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroBanner />
        <OurStory />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
