'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface InfoCardProps {
  image: string;
  title: string;
  description: string;
  ctaText: string;
}

export default function InfoCard({ image, title, description, ctaText }: InfoCardProps) {
  return (
    <div className="flex-none w-[600px] bg-[#111] rounded-xl overflow-hidden flex">
      {/* Image Section */}
      <div className="w-2/5 bg-gray-800 relative">
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Image Placeholder
        </div>
      </div>

      {/* Content Section */}
      <div className="w-3/5 p-8 flex flex-col justify-between">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
        <Button className="bg-transparent hover:bg-white text-white border border-white hover:border-white hover:text-black rounded-full px-6 w-fit transition-all duration-300">
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
} 