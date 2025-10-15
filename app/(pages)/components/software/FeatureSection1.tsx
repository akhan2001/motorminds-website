import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function FeatureSection1() {
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
                            SHOP MANAGEMENT
                        </Badge>
                        
                        <h2 className="text-4xl md:text-6xl font-bold text-white">
                            <span className="text-red-500">Streamline</span> your shop operations
                        </h2>
                        
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Comprehensive shop management tools to handle appointments, customer records, 
                            inventory tracking, and staff scheduling all in one powerful platform.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">Automated appointment scheduling</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">Customer relationship management</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">Inventory and parts tracking</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300">Staff scheduling and time tracking</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image - Right */}
                    <div className="relative">
                        <div className="aspect-square bg-[#131412] border-2 border-red-500 rounded-2xl overflow-hidden">
                            <Image
                                src="/dashboard/management-image.png"
                                alt="Shop Management Dashboard"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover border-1 border-red-600 rounded-2xl"
                                unoptimized={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
