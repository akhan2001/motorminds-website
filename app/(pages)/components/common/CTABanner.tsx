import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTABanner() {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-br from-zinc-900 to-black border border-gray-800 rounded-2xl p-12 shadow-2xl">
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Transform your auto shop. <br />
                            <span className="text-red-500">Start your free trial.</span>
                        </h2>
                    </div>
                    
                    <div className="flex justify-center">
                        <Button 
                            variant="gradient-red"
                            className="px-12 py-4 text-lg font-medium rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            <Link href="/contact-us">Start Free Trial</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
