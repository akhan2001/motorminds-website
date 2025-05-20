'use client';

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/ferrari-autoshop-image.jpg"
          alt="Luxury auto shop with Ferrari"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90 z-10" />

      <div className="container relative z-20 mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Auto Shop?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          Book your appointment today and discover how MotorMinds can revolutionize your business operations
        </p>
        <Button className="bg-white hover:bg-gray-100 text-black font-medium px-6 py-5 text-base rounded-full transition-all duration-300">
          Schedule a Demo
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
} 