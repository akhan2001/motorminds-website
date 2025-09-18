import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import HeroBanner from "@/components/hero-banner";
import FeatureSection from "@/components/feature-section";

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

				{/* AI-Powered Automotive Diagnostics */}
				<FeatureSection
					image="/features-image-4.png"
					imageAlt="AI-Powered Automotive Diagnostics"
					title="AI-Powered Automotive Diagnostics"
					description="Revolutionize repair workflows with AI that reads OBD data, analyzes fault codes, and gives predictive maintenance alerts."
					features={[
						"Real-time vehicle health monitoring",
						"Predictive maintenance notifications",
						"Automated fault code analysis",
						"Machine learning-powered repair suggestions"
					]}
				/>

				{/* Smart CRM System for Auto Shops */}
				<FeatureSection
					image="/features-image-3.png"
					imageAlt="Smart CRM System for Auto Shops"
					title="Smart CRM System for Auto Shops"
					description="Manage customers, service history, and loyalty programs with an AI-driven CRM tailored for auto shops."
					features={[
						"Automated appointment scheduling",
						"Service history tracking",
						"Customer communication tools",
						"Loyalty rewards management"
					]}
					reverse={true}
				/>

				{/* Comprehensive Shop Management */}
				<FeatureSection
					image="/features-image-2.png"
					imageAlt="Comprehensive Shop Management"
					title="Comprehensive Shop Management"
					description="Run your shop like a pro with tools for inventory, staff, financials, and parts integration — all in one platform."
					features={[
						"Inventory tracking and supplier integration",
						"Staff scheduling and time tracking",
						"Financial analytics dashboard",
						"Multi-location management"
					]}
				/>

				<CTABanner />
			</main>
			<Footer />
		</div>
	);
} 