import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Hero() {
	return (
		<section className="relative w-full min-h-screen bg-black overflow-hidden">
			{/* Main Content */}
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
				{/* Main Headline */}
				<div className="text-center max-w-4xl mx-auto mb-8">
					<h1 className="text-5xl= md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
						MotorMinds: Driving the Future of
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
							Automotive Intelligence
						</span>
					</h1>
					
					<p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
						AI-powered diagnostics, CRM, and shop management — built for modern auto shops.
					</p>
				</div>

				{/* CTA Button */}
				<Button 
					size="lg"
					className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
				>
					Start Exploring
					<ChevronRight className="ml-2 h-5 w-5" />
				</Button>
			</div>

			{/* Gradient Wave Overlay */}
			<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent via-transparent to-black/20">
				<div className="absolute bottom-0 left-0 w-full h-full">
					{/* Reddish gradient wave */}
					<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-500/30 via-red-600/20 to-red-700/10 rounded-t-full blur-sm"></div>
					<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-red-400/40 via-red-500/30 to-red-600/20 rounded-t-full blur-md"></div>
					<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-red-500/50 via-red-600/30 to-red-700/20 rounded-t-full blur-lg"></div>
				</div>
			</div>

			{/* MotorMinds Logo - Half Hidden */}
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
				<div className="relative w-40 h-40">
					<Image
						src="/motorminds-logo/motorminds-3d-png.png"
						alt="MotorMinds Logo"
						fill
						className="object-contain drop-shadow-2xl"
						priority
					/>
				</div>
			</div>

			{/* Subtle background patterns */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 right-1/3 w-64 h-64 bg-red-700 rounded-full blur-3xl"></div>
			</div>
		</section>
	)
}