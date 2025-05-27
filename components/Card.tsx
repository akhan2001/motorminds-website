'use client'

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  i: number;
  progress: any;
  range: number[];
  targetScale: number;
}

const Card = ({ title, description, imageUrl, i, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div ref={container} className="w-full h-screen relative px-4 md:px-20 lg:px-32">
      <motion.div 
        className="sticky top-[15%] h-[60vh] max-h-[600px] w-full rounded-2xl overflow-hidden bg-[#111] p-8"
        style={{
          scale,
          top: `calc(15% + ${i * 25}px)`
        }}
      >
        <div className="flex flex-col md:flex-row h-full gap-8">
          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-white">
              {title}
            </h2>
            <p className="text-gray-400 text-lg">
              {description}
            </p>
            <Button className="bg-transparent hover:bg-white text-white border border-white hover:border-white hover:text-black rounded-full px-6 transition-all duration-300">
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative h-full rounded-xl overflow-hidden">
            <motion.div 
              className="w-full h-full relative"
              style={{ scale: imageScale }}
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500">
                Placeholder Image {i + 1}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card; 