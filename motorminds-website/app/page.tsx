import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import LogoCarousel from "@/components/logo-carousel";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <LogoCarousel />

      {/* Fleet Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vehicle Fleet</h2>
          </div>
          <div>
            <p className="text-gray-300">
              We provide our customers with the most incredible driving emotions. That's why we have only world-class
              cars in our fleet.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["ALL", "PREMIUM", "COUPE", "HYPERCAR", "SUPERCAR", "CABRIOLET", "SUV"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border border-gray-700 text-sm ${
                category === "HYPERCAR" ? "bg-white text-black" : "bg-transparent hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Car Grid (Placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-xl overflow-hidden bg-gray-900">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt={`Luxury Car ${item}`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">Luxury Vehicle</h3>
                <p className="text-sm text-gray-400">Experience unmatched performance</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
