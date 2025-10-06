import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function FeatureSection3() {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content - Left */}
                    <div className="space-y-6">
                        <Badge 
                            variant="outline" 
                            className="bg-[#131412] border-[#1f250e] text-red-500 hover:bg-[#131412] py-2 px-4 rounded-full"
                        >
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            PARTS & DIAGNOSTICS
                        </Badge>
                        
                        <h2 className="text-4xl md:text-6xl font-bold text-white">
                            <span className="text-red-500">Smart</span> parts and diagnostics
                        </h2>
                        
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Intelligent parts management and diagnostic tools that help you identify issues 
                            quickly, source the right parts, and complete repairs more efficiently.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">Real-time parts inventory tracking</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">Automated diagnostic scanning</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">Supplier integration and ordering</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">Compatibility checking and recommendations</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image - Right */}
                    <div className="relative">
                        <div className="aspect-square bg-[#131412] border border-[#1f250e] rounded-2xl overflow-hidden">
                            <Image
                                src="/parts-diagnostics.png"
                                alt="Parts & Diagnostics Dashboard"
                                fill
                                className="object-cover"
                                unoptimized={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
