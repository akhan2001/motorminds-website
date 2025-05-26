import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import Image from "next/image";

export default function Products() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/products-hero.jpg"
              alt="MotorMinds Products"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Products
            </h1>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-gray-300 text-lg">
                We're preparing to showcase our innovative product lineup. Stay tuned for updates.
              </p>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
} 