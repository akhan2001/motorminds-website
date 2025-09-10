import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import HeroBanner from "@/components/hero-banner";
import Image from "next/image";

export default function Features() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Navbar />
			<main>
				<HeroBanner 
					title="Features" 
					backgroundImage="/features-page-image(1).png" 
					imageAlt="MotorMinds Features" 
				/>

				{/* Content Section */}
				<section className="py-20 bg-black">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Coming Soon</h2>
							<p className="text-gray-300 text-lg">
								We're working on something amazing. Check back soon to see our full feature set.
							</p>
						</div>
					</div>
				</section>

				<CTABanner />
			</main>
			<Footer />
		</div>
	);
} 