import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Hero() {
	return (
		<section className="relative w-full h-screen overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 animate-fade-in">
				<Image
					src="/motorminds-logo/motorminds-presentation-slide.png"
					alt="MotorMinds Hero Background"
					fill
					className="object-cover"
					priority
				/>
			</div>

			{/* Dark Gradient Overlay from Bottom */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

			{/* Main Content */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
				{/* Header */}
				<div className="text-center max-w-4xl mx-auto mb-8 animate-fade-up-delay-1">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
						Driving the Future of Automotive Intelligence
					</h1>
					
					{/* Tagline */}
					<p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-up-delay-2">
						AI-powered diagnostics, CRM, and shop management — built for modern auto shops.
					</p>
				</div>

				{/* CTA Button */}
				<div className="animate-fade-up-delay-3">
					<Button 
						size="lg"
						className="bg-[#B22222] text-white hover:bg-[#B22222]/90 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:bg-[#B22222]/90"
					>
						Start Exploring
						<ChevronRight className="ml-2 h-5 w-5" />
					</Button>
				</div>
			</div>
		</section>
	)
}