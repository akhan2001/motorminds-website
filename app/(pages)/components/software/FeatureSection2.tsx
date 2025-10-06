import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function FeatureSection2() {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image - Left */}
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-square bg-[#131412] border-2 border-red-500 rounded-2xl overflow-hidden">
                            <Image
                                src="/dashboard/ai-voice-calling-image.png"
                                alt="MIA Diagnostic Analysis"
                                fill
                                className="object-cover border-2 border-red-500 rounded-2xl"
                                unoptimized={true}
                            />
                        </div>
                    </div>
                    
                    {/* Text Content - Right */}
                    <div className="space-y-6 order-1 lg:order-2">
                        <Badge 
                            variant="outline" 
                            className="bg-[#131412] border-[#1f250e] text-red-500 hover:bg-[#131412] py-2 px-4 rounded-full"
                        >
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            AI CALLING
                        </Badge>
                        
                        <h2 className="text-4xl md:text-6xl font-bold text-white">
                            <span className="text-red-500">AI-Powered</span> diagnostics and calling
                        </h2>
                        
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Advanced AI technology that analyzes vehicle data, provides diagnostic insights, 
                            and automates customer communication for faster, more accurate service delivery.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">Automated diagnostic analysis</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">AI-powered customer calls</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">Predictive maintenance alerts</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">Intelligent repair recommendations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
