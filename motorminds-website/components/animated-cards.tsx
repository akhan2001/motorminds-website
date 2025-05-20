'use client';

import { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Card from './Card';

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
}

const cards: CardData[] = [
  {
    title: "SMART SCHEDULING",
    description: "AI-powered scheduling system that optimizes your shop's workflow. Automatically prioritize tasks, assign technicians, and manage appointments efficiently.",
    imageUrl: "/placeholder1.jpg"
  },
  {
    title: "Inventory Management",
    description: "Real-time tracking of parts and supplies with automated reordering. Predict inventory needs based on scheduled services and historical data.",
    imageUrl: "/placeholder2.jpg"
  },
  {
    title: "Customer Insights",
    description: "Deep analytics and customer relationship tools to boost retention. Track service history, predict maintenance needs, and automate follow-ups.",
    imageUrl: "/placeholder3.jpg"
  }
];

export default function AnimatedCards() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  // Initialize smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="bg-black">
      {cards.map((card, i) => {
        const targetScale = 1 - ((cards.length - i) * 0.05);
        return (
          <Card
            key={i}
            {...card}
            i={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
} 