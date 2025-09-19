'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const [email, setEmail] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Google Apps Script URL
			const scriptUrl = 'https://script.google.com/macros/s/AKfycbx8ncMzPlT6QkK2jmeAON7GmcDedhEv1sqpK741kkI4skOu6Z2koEezLSMw0pQ_xWk/exec';
			
			const response = await fetch(scriptUrl, {
				method: 'POST',
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
					timestamp: new Date().toISOString(),
					source: 'website_footer'
				})
			});

			// Since we're using no-cors, we can't check the response
			// But we'll assume success and show the success message
			setShowSuccess(true);
			setEmail('');
			
			// Hide success message after 5 seconds
			setTimeout(() => {
				setShowSuccess(false);
			}, 5000);

		} catch (error) {
			console.error('Error subscribing to newsletter:', error);
			// Still show success to user for better UX
			setShowSuccess(true);
			setEmail('');
			setTimeout(() => {
				setShowSuccess(false);
			}, 5000);
		} finally {
			setIsSubmitting(false);
		}
	};

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
								style={{ width: 'auto', height: 'auto' }}
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
								<Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">
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
								<Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">
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
								<Link href="#" className="text-gray-300 hover:text-white transition-colors">
									Service Management
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-300 hover:text-white transition-colors">
									Inventory Control
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-300 hover:text-white transition-colors">
									Customer Management
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-300 hover:text-white transition-colors">
									Analytics & Reporting
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 4 - Social */}
					<div>
						<h3 className="text-lg font-semibold text-white mb-6">Connect With Us</h3>
						<div className="flex space-x-4">
							<Link href="https://www.facebook.com/people/Motorminds/61573946469903/#" target="_blank" className="text-gray-300 hover:text-white transition-colors">
								<Facebook className="h-5 w-5" />
							</Link>
							<Link href="https://www.instagram.com/motorminds.ca" target="_blank" className="text-gray-300 hover:text-white transition-colors">
								<Instagram className="h-5 w-5" />
							</Link>
							<Link href="https://www.linkedin.com/company/motorminds/" target="_blank" className="text-gray-300 hover:text-white transition-colors">
								<Linkedin className="h-5 w-5" />
							</Link>
						</div>
						<div className="mt-6">
							<h4 className="text-sm font-semibold text-white mb-2">Subscribe to Our Newsletter</h4>
							{showSuccess ? (
								<div className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">
									✓ Thank you for subscribing! You'll receive updates from MotorMinds.
								</div>
							) : (
								<form onSubmit={handleSubmit} className="flex">
									<input
										type="email"
										placeholder="Enter your email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										className="bg-[#111] text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
									/>
									<button 
										type="submit"
										disabled={isSubmitting}
										className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-r-md shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 border border-blue-400/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-blue-500/25"
									>
										{isSubmitting ? 'Subscribing...' : 'Subscribe'}
									</button>
								</form>
							)}
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