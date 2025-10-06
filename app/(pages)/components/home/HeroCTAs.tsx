'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Loader2 } from 'lucide-react';

export default function HeroCTAs() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setEmail('');
        }, 1000);
    };

    return (
        <div className="space-y-8 animate-scale-in">
            {/* Primary CTA Button */}
            {/* <div className="mb-16">
                <Button 
                    variant="gradient-red"
                    className="px-12 py-4 text-lg font-medium rounded-[50px]"
                >
                    Book Demo
                </Button>
            </div> */}

            {/* Email Form */}
            <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="email"
                        required
                        name="Email"
                        placeholder="Book a Demo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-6 py-4 bg-[#131412] border border-[#1f250e] rounded-[10px] text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-4 bg-red-500 text-white font-medium rounded-[10px] hover:bg-red-600 transition-colors disabled:opacity-50 flex items-center justify-center"
                    >
                        {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <Send className="w-5 h-5" />
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
