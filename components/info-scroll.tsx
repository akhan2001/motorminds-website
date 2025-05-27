'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import InfoCard from './info-card';

const scrollCards = [
  {
    image: '/placeholder1.jpg',
    title: 'Smart Analytics',
    description: 'Get real-time insights into your auto shop performance with our advanced analytics dashboard. Track KPIs, monitor trends, and make data-driven decisions to optimize your operations.',
    ctaText: 'Learn More'
  },
  {
    image: '/placeholder2.jpg',
    title: 'Inventory Control',
    description: 'Streamline your parts management with automated tracking, reordering, and real-time stock levels. Never run out of essential supplies and optimize your inventory investment.',
    ctaText: 'Explore'
  },
  {
    image: '/placeholder3.jpg',
    title: 'Customer Management',
    description: 'Build stronger relationships with integrated CRM tools. Track service history, automate follow-ups, and deliver personalized experiences that keep customers coming back.',
    ctaText: 'Discover'
  },
  {
    image: '/placeholder4.jpg',
    title: 'Appointment Scheduling',
    description: 'Maximize your shop\'s efficiency with our smart scheduling system. Manage appointments, assign technicians, and reduce wait times while keeping your service bays fully utilized.',
    ctaText: 'See How'
  }
];

export default function InfoScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -1250 : 1250;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-md">
            REVOLUTIONIZE YOUR AUTO SHOP
          </h2>
          <p className="text-gray-300 max-w-md text-lg">
            Transform your business with our comprehensive suite of tools designed specifically for modern auto shop operations.
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-12 scrollbar-thin"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {scrollCards.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>

          {/* Custom Progress Bar */}
          <div className="scroll-progress-container mt-8">
            <div 
              className="scroll-progress-bar"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Navigation Arrows */}
          <div className="absolute right-0 -bottom-2 flex items-center gap-6">
            <button 
              onClick={() => scroll('left')}
              className="text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="text-white/60 hover:text-white transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 