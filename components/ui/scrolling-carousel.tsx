'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { 
    Brain, 
    Settings, 
    Users, 
    Calendar, 
    BarChart3, 
    Headphones,
    Wrench,
    CreditCard,
    Smartphone,
    Shield
} from 'lucide-react';

interface CarouselItem {
    id: string;
    iconName: string;
    text: string;
}

interface ScrollingCarouselProps {
    items: CarouselItem[];
    speed?: number;
    direction?: 'left' | 'right';
    className?: string;
}

export default function ScrollingCarousel({ 
    items, 
    speed = 50, 
    direction = 'left',
    className 
}: ScrollingCarouselProps) {
    const containerRef = useRef<HTMLUListElement>(null);
    const [translateX, setTranslateX] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const animate = () => {
            setTranslateX(prev => {
                const newTranslateX = direction === 'left' 
                    ? prev - 1 
                    : prev + 1;
                
                // Reset position when all items have scrolled past
                const itemWidth = 200; // Approximate item width
                const totalWidth = items.length * itemWidth;
                
                if (Math.abs(newTranslateX) >= totalWidth) {
                    return 0;
                }
                
                return newTranslateX;
            });
        };

        const interval = setInterval(animate, speed);
        return () => clearInterval(interval);
    }, [speed, direction, items.length]);

    return (
        <section 
            className={cn(
                "flex w-full h-full max-w-full max-h-full place-items-center m-0 p-2.5 list-none opacity-100 overflow-hidden",
                "mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                className
            )}
            style={{
                maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
            }}
        >
            <ul 
                ref={containerRef}
                className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-0 list-none gap-2.5 relative flex-row will-change-transform"
                style={{
                    transform: `translateX(${translateX}px)`
                }}
            >
                {/* Render items twice for seamless loop */}
                {[...items, ...items].map((item, index) => {
                    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
                        Brain,
                        Settings,
                        Users,
                        Calendar,
                        BarChart3,
                        Headphones,
                        Wrench,
                        CreditCard,
                        Smartphone,
                        Shield
                    };
                    
                    const IconComponent = iconMap[item.iconName];
                    
                    return (
                        <li key={`${item.id}-${index}`} className="flex-shrink-0">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                                <IconComponent className="w-6 h-6 text-gray-300" />
                                <p className="text-sm font-medium text-gray-300 whitespace-nowrap">
                                    {item.text}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
