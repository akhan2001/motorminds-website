import { Navbar } from "@/app/(pages)/components/common/NavBar"
import Footer from "@/app/(pages)/components/common/Footer"
import CTABanner from "@/app/(pages)/components/common/CTABanner"

export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-black">
			<Navbar />
			<main className="mx-auto px-4 py-24">
				<div className="max-w-[950px] mx-auto">
					<h1 className="text-2xl font-bold text-white mb-6">Privacy Policy</h1>
					<div className="prose prose-invert max-w-none text-[15px]">
						<p className="text-gray-300 mb-4 text-[15px]">
							<strong>Last Updated: December 30, 2025</strong>
						</p>

						<p className="text-gray-300 mb-6 text-[15px]">
							MotorMinds ("we", "our", or "us") is committed to protecting your privacy and safeguarding shop, vehicle, and customer data. This Privacy Policy explains what data we collect, how it is used, how it is protected, and the choices available to you.
						</p>

						<section className="mb-6">
							<h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
							<p className="text-gray-300 mb-3 text-[15px]">
								We collect data necessary to operate our platform, provide AI-powered diagnostics, and improve our services.
							</p>
							<div className="mb-4">
								<h3 className="text-lg text-white mb-2">a) Information You Provide</h3>
								<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
									<li>Name, email address, phone number</li>
									<li>Shop or business details</li>
									<li>Account credentials and preferences</li>
									<li>Communications with MotorMinds (support, feedback, inquiries)</li>
								</ul>
							</div>
							<div className="mb-4">
								<h3 className="text-lg text-white mb-2">b) Operational & Platform Data</h3>
								<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
									<li>Vehicle data (year, make, model, VIN, specifications)</li>
									<li>Work order and service history</li>
									<li>Diagnostic inputs and repair context</li>
									<li>Usage metadata (features used, session activity)</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg text-white mb-2">c) Automatically Collected Data</h3>
								<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
									<li>IP address</li>
									<li>Browser and device information</li>
									<li>Pages visited and time spent</li>
									<li>Referral sources</li>
									<li>Cookie identifiers</li>
								</ul>
							</div>
						</section>

						<section className="mb-6">
							<h2 className="text-xl font-semibold text-white mb-3">2. AI Diagnostics & Data Usage</h2>
							<p className="text-gray-300 mb-3 text-[15px]">
								MotorMinds provides AI-powered diagnostics using third-party AI providers.
							</p>
							<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4 text-[15px]">
								<li><strong>By default, no shop data is shared with third-party AI providers</strong></li>
								<li>Data sharing only occurs based on your <strong>explicit opt-in selection</strong> within AI Diagnostics Settings</li>
								<li>Shared data is used <strong>solely to generate responses</strong> and is <strong>not retained</strong> or used to train third-party models</li>
							</ul>
							<h3 className="text-lg text-white mb-2">AI Data Sharing Levels</h3>
							<p className="text-gray-300 mb-2 text-[15px]">You control what data is shared:</p>
							<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
								<li>Disabled (no data shared)</li>
								<li>Vehicle-only data</li>
								<li>Vehicle + work order history (with customer data anonymized)</li>
								<li>Full access (maximum personalization)</li>
							</ul>
						</section>

						<section className="mb-6">
							<h2 className="text-xl font-semibold text-white mb-3">3. HIPAA & Regulated Data</h2>
							<p className="text-gray-300 mb-3 text-[15px]">
								For organizations with HIPAA compliance enabled:
							</p>
							<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-3 text-[15px]">
								<li>Data is shared <strong>only</strong> with AI providers under an executed <strong>Business Associate Agreement (BAA)</strong></li>
								<li>Access controls, audit logs, and safeguards are enforced</li>
							</ul>
							<p className="text-gray-300 text-[15px]">
								MotorMinds does not require HIPAA data for standard operation.
							</p>
						</section>

						<section className="mb-6">
							<h2 className="text-xl font-semibold text-white mb-3">4. How We Use Your Information</h2>
							<p className="text-gray-300 mb-3 text-[15px]">We use collected data to:</p>
							<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
								<li>Deliver and operate the MotorMinds platform</li>
								<li>Provide AI diagnostics and recommendations</li>
								<li>Improve product performance and reliability</li>
								<li>Communicate service updates or support messages</li>
								<li>Ensure security, compliance, and abuse prevention</li>
								<li>Analyze aggregate usage trends (non-identifiable)</li>
							</ul>
						</section>

						<section className="mb-6">
							<h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
							<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
								<li>Operational data is retained only as long as necessary to provide services</li>
								<li>AI interaction data is processed ephemerally where possible</li>
								<li>You may request deletion of your data at any time, subject to legal obligations</li>
							</ul>
						</section>

						<section className="mb-6">
							<h2 className="text-xl font-semibold text-white mb-3">6. How We Share Your Data</h2>
							<p className="text-gray-300 mb-3 text-[15px]">
								We <strong>do not sell</strong> personal or shop data.
							</p>
							<p className="text-gray-300 mb-3 text-[15px]">
								Data may be shared only with:
							</p>
							<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-3 text-[15px]">
								<li>Infrastructure and service providers (hosting, analytics, monitoring)</li>
								<li>AI providers, strictly per your selected opt-in level</li>
								<li>Legal or regulatory authorities when required by law</li>
							</ul>
							<p className="text-gray-300 text-[15px]">
								All vendors are contractually required to maintain confidentiality and security standards.
							</p>
						</section>

						<section className="mb-6">
							<h2 className="text-xl font-semibold text-white mb-3">7. Data Security</h2>
							<p className="text-gray-300 mb-3 text-[15px]">We protect your data using:</p>
							<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
								<li>Encryption at rest and in transit</li>
								<li>Role-based access controls</li>
								<li>Secure cloud infrastructure</li>
								<li>Ongoing monitoring and auditing practices</li>
							</ul>
						</section>

						<section className="mb-6">
							<h2 className="text-xl font-semibold text-white mb-3">8. Cookies & Tracking Technologies</h2>
							<p className="text-gray-300 mb-3 text-[15px]">We use cookies for:</p>
							<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4 text-[15px]">
								<li>Functional operation</li>
								<li>Analytics and performance monitoring</li>
								<li>Marketing and lead attribution (where applicable)</li>
							</ul>
							<p className="text-gray-300 text-[15px]">
								A cookie banner allows you to manage preferences. Disabling cookies may impact site functionality.
							</p>
						</section>

						<section className="mb-6">
							<h2 className="text-xl font-semibold text-white mb-3">9. Your Rights & Requests</h2>
							<p className="text-gray-300 mb-3 text-[15px]">
								You may request access, correction, or deletion of your data by contacting:
							</p>
							<div className="text-gray-300 text-[15px]">
								<p><strong>Email:</strong> <a href="mailto:info@motorminds.ca" className="text-blue-400 hover:text-blue-300">info@motorminds.ca</a></p>
								<p><strong>Subject:</strong> Privacy Request</p>
							</div>
						</section>

						<section className="mb-6">
							<h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
							<div className="text-gray-300 text-[15px]">
								<p className="font-semibold text-white mb-2">MotorMinds</p>
								<p>Email: <a href="mailto:info@motorminds.ca" className="text-blue-400 hover:text-blue-300">info@motorminds.ca</a></p>
								<p>Website: <a href="https://www.motorminds.ca" className="text-blue-400 hover:text-blue-300">https://www.motorminds.ca</a></p>
							</div>
						</section>
					</div>
				</div>
			</main>

			<CTABanner />
			<Footer />
		</div>
	)
} 