import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3">
                            <Image
                                src="/motorminds-logo-white.png"
                                alt="MotorMinds Logo"
                                width={30}
                                height={30}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                            <span className="text-xl font-semibold text-white">MOTORMINDS</span>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            MotorMinds is the ultimate all-in-one auto shop management solution.
                        </p>
                        <div className="flex space-x-4">
                            <Link 
                                href="https://www.facebook.com/people/Motorminds/61573946469903/" 
                                target="_blank" 
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                            >
                                <Facebook className="h-5 w-5 text-white" />
                            </Link>
                            <Link 
                                href="https://www.instagram.com/motorminds.ca" 
                                target="_blank" 
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                            >
                                <Instagram className="h-5 w-5 text-white" />
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/company/motorminds/" 
                                target="_blank" 
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                            >
                                <Linkedin className="h-5 w-5 text-white" />
                            </Link>
                        </div>
                    </div>

                    {/* Page Links Column */}
                    <div>
                        <h5 className="text-white font-semibold mb-6">Page</h5>
                        <div className="space-y-3">
                            <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                                Home
                            </Link>
                            <Link href="/about-us" className="block text-gray-400 hover:text-white transition-colors">
                                About Us
                            </Link>
                            <Link href="/pricing" className="block text-gray-400 hover:text-white transition-colors">
                                Pricing
                            </Link>
                            <Link href="/features" className="block text-gray-400 hover:text-white transition-colors">
                                Features
                            </Link>
                            <Link href="/contact-us" className="block text-gray-400 hover:text-white transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Contact Us Column */}
                    <div>
                        <h5 className="text-white font-semibold mb-6">Contact Us</h5>
                        <div className="space-y-3">
                            <p className="text-gray-400">info@motorminds.ca</p>
                            <p className="text-gray-400">+1 (905) 805-3844</p>
                            <p className="text-gray-400">Based in Ontario, Canada</p>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h5 className="text-white font-semibold mb-6">Stay Updated</h5>
                        <p className="text-gray-300 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates and features.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <div>
                            © {currentYear} MotorMinds. All rights reserved.
                        </div>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy-policy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
