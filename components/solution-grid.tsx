'use client';

import { Brain, Phone, Settings, BarChart3 } from 'lucide-react';

const solutions = [
  {
    icon: Brain,
    title: "AI-Powered Diagnostics",
    description: "Revolutionary AI that reads OBD data, analyzes fault codes, and provides intelligent diagnostic recommendations for faster repairs."
  },
  {
    icon: Phone,
    title: "Smart CRM System",
    description: "AI-driven customer relationship management with automated scheduling, service history tracking, and loyalty program management."
  },
  {
    icon: Settings,
    title: "Shop Management",
    description: "Comprehensive platform for inventory tracking, staff scheduling, financial analytics, and multi-location management."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Advanced reporting and analytics to track performance, optimize operations, and make data-driven business decisions."
  }
];

export default function SolutionGrid() {
	return (
		<section className="bg-black py-24">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Comprehensive Solutions
					</h2>
					<p className="text-gray-300 max-w-2xl mx-auto">
						Discover our range of specialized tools designed to streamline every aspect of your auto shop operations
					</p>
				</div>

				{/* Responsive Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{solutions.map((solution, index) => {
						const Icon = solution.icon;
						const isRed = index % 2 !== 0;

						return (
							<div
								key={solution.title}
								className={`h-full p-8 rounded-none transition-transform hover:transform hover:scale-[1.02] ${isRed ? 'bg-[#1a0000]' : 'bg-[#111]'
									}`}
							>
								<div className="flex flex-col items-start h-full">
									<div className={`p-3 rounded-lg mb-6 ${isRed ? 'bg-[#2a0000]' : 'bg-[#1a1a1a]'
										}`}>
										<Icon className={`h-6 w-6 ${isRed ? 'text-[#ff4444]' : 'text-white'
											}`} />
									</div>
									<h3 className="text-xl font-semibold text-white mb-3">
										{solution.title}
									</h3>
									<p className="text-gray-300 text-sm">
										{solution.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
} 