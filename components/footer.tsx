'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo & Branding */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/motorminds-logo-white.png"
                alt="Motorminds Logo"
                width={30}
                height={30}
              />
              <span className="text-xl font-semibold text-white">MOTORMINDS</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Revolutionizing auto shop management with intelligent solutions for the modern automotive industry.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/solutions/service-management" className="text-gray-300 hover:text-white transition-colors">
                  Service Management
                </Link>
              </li>
              <li>
                <Link href="/solutions/inventory" className="text-gray-300 hover:text-white transition-colors">
                  Inventory Control
                </Link>
              </li>
              <li>
                <Link href="/solutions/customer-management" className="text-gray-300 hover:text-white transition-colors">
                  Customer Management
                </Link>
              </li>
              <li>
                <Link href="/solutions/analytics" className="text-gray-300 hover:text-white transition-colors">
                  Analytics & Reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#111] text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
                <button className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#222]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div>
              © {currentYear} MotorMinds. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 