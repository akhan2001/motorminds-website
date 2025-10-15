import { Navbar } from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">
                        <span className="text-red-500">Powering</span> the Future of Auto Shop Management
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        At MotorMinds, we're transforming the way auto shops operate with intelligent solutions.
                    </p>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <Badge 
                                    variant="outline" 
                                    className="bg-[#131412] border-[#1f250e] text-red-500 hover:bg-[#131412] py-2 px-4 rounded-full"
                                >
                                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                                    ABOUT US
                                </Badge>
                            </div>
                            
                            <h2 className="text-4xl md:text-6xl font-bold">
                                <span className="text-red-500">Streamlining</span> Auto Shops. <span className="text-white">Scaling</span> Success.
                            </h2>
                            
                            <div className="flex justify-start">
                                <Link href="/contact-us">
                                    <Button 
                                        variant="gradient-red"
                                        className="px-8 py-4 text-lg font-medium rounded-full"
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                            
                            <p className="text-lg text-gray-300 leading-relaxed">
                                We created MotorMinds to solve the headaches auto shops face every day—manual work orders, 
                                scattered customer data, delayed payments, and inefficient scheduling.
                                <br /><br />
                                With our software, you get a powerful, modern dashboard that puts everything in one place—from 
                                work order creation and digital signatures to payment processing, appointment management, and AI-powered customer communication.
                            </p>
                        </div>
                        
                        {/* Image */}
                        <div className="relative">
                            <div className="aspect-[4/5] bg-[#131412] rounded-2xl overflow-hidden">
                                <Image
                                    src="/about-hero.png"
                                    alt="MotorMinds Auto Shop Management"
                                    fill
                                    className="object-cover"
                                    unoptimized={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-[4/5] bg-[#131412] rounded-2xl overflow-hidden">
                                <Image
                                    src="/motorminds-background-hero.png"
                                    alt="MotorMinds Dashboard"
                                    fill
                                    className="object-cover"
                                    unoptimized={true}
                                />
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="flex items-center gap-3">
                                <Badge 
                                    variant="outline" 
                                    className="bg-[#131412] border-[#1f250e] text-red-500 hover:bg-[#131412] py-2 px-4 rounded-full"
                                >
                                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                                    ACHIEVEMENT
                                </Badge>
                            </div>
                            
                            <h2 className="text-4xl md:text-6xl font-bold">
                                The <span className="text-red-500">Smarter</span> Way to Run Your <span className="text-white">Auto Shop</span>
                            </h2>
                            
                            <p className="text-lg text-gray-300">
                                Simple, smart, and scalable software that delivers real results.
                            </p>
                            
                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h3 className="text-4xl font-bold text-white">500+</h3>
                                    <p className="text-gray-400">Repairs Completed</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-4xl font-bold text-white">50+</h3>
                                    <p className="text-gray-400">Auto Shops Joined</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-4xl font-bold text-white">$2.5m</h3>
                                    <p className="text-gray-400">Payments Processed</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-4xl font-bold text-white">98%</h3>
                                    <p className="text-gray-400">Customer Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-[#131412] border border-[#1f250e] rounded-2xl p-12">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Where <span className="text-red-500">Smart Auto Shops</span> Begin
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join hundreds of auto shops worldwide who trust MotorMinds to streamline their operations and drive success.
                        </p>
                        <div className="flex justify-center">
                            <Link href="/contact-us">
                                <Button 
                                    variant="gradient-red"
                                    className="px-12 py-4 text-lg font-medium rounded-full"
                                >
                                    Get Started Today
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
