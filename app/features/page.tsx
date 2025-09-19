import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import HeroBanner from "@/components/hero-banner";
import FeatureSection from "@/components/feature-section";
import { features } from "./components/features-data";

export default function Features() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Navbar />
			<main>
				<HeroBanner 
					title="Features" 
					backgroundImage="/cta-banner.png"
					imageAlt="MotorMinds Features"
				/>

				{features.map((feature) => (
					<FeatureSection
						key={feature.id}
						image={feature.image}
						imageAlt={feature.imageAlt}
						title={feature.title}
						description={feature.description}
						features={feature.features}
						reverse={feature.reverse}
					/>
				))}

				<CTABanner />
			</main>
			<Footer />
		</div>
	);
} 