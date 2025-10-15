import { Navbar } from "@/app/(pages)/components/common/NavBar"
import Footer from "@/components/footer"
import CTABanner from "@/components/cta-banner"

export default function TermsOfService() {
	return (
		<div className="min-h-screen bg-black">
			<Navbar />
			<main className="mx-auto px-4 py-24">
				<div className="max-w-[950px] mx-auto">
					<h1 className="text-2xl font-bold text-white mb-6">Terms of Service</h1>
					<div className="prose prose-invert max-w-none text-[15px]">
						<p className="text-gray-300 mb-4 text-[15px]">
							Effective Date: May 7, 2025
						</p>

						<p className="text-gray-300 mb-6 text-[15px]">
							Welcome to MotorMinds! Please read these Terms of Service ("Terms") carefully before accessing or using our services. By using our website, applications, or services, you agree to be bound by these Terms.
						</p>

						{[
							{
								title: "1. OUR SERVICES",
								content: "MotorMinds offers a cloud-based CRM platform, digital marketing services, lead generation tools, AI assistance, and other automotive-focused digital solutions for auto shops and enthusiasts."
							},
							{
								title: "2. INTELLECTUAL PROPERTY RIGHTS",
								content: "All content, software, logos, trademarks, and materials on this site are owned or licensed by MotorMinds. You may not use, copy, or distribute our materials without written permission."
							},
							{
								title: "3. USER REPRESENTATIONS",
								content: "By using our services, you represent that:",
								list: [
									"You are 18 years or older",
									"You have legal authority to enter into this agreement",
									"You will comply with these Terms and all applicable laws"
								]
							},
							{
								title: "4. PURCHASES AND PAYMENT",
								content: "If you purchase any products or subscriptions, you agree to provide current, complete, and accurate billing and account information. All payments are final unless stated otherwise."
							},
							{
								title: "5. CANCELLATION",
								content: "You may cancel your subscription at any time. Cancellations will take effect at the end of the current billing cycle. No refunds are provided for partial use unless required by law."
							},
							{
								title: "6. PROHIBITED ACTIVITIES",
								content: "You agree not to:",
								list: [
									"Use the platform for illegal or unauthorized purposes",
									"Interfere with or disrupt service functionality",
									"Reverse-engineer our software",
									"Submit false or misleading information"
								]
							},
							{
								title: "7. USER GENERATED CONTRIBUTIONS",
								content: "Users may submit content, such as reviews or suggestions. You are responsible for ensuring such content is legal and non-infringing."
							},
							{
								title: "8. CONTRIBUTION LICENSE",
								content: "By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute it in connection with our services."
							},
							{
								title: "9. GUIDELINES FOR REVIEWS",
								content: "Reviews must be truthful, non-offensive, and not violate third-party rights. We reserve the right to moderate or remove reviews at our discretion."
							},
							{
								title: "10. THIRD-PARTY WEBSITES AND CONTENT",
								content: "We may link to or integrate third-party websites or tools. We are not responsible for their content, privacy practices, or reliability."
							},
							{
								title: "11. SERVICES MANAGEMENT",
								content: "We reserve the right to monitor, suspend, or modify our services at any time for performance, legal, or business reasons."
							},
							{
								title: "12. PRIVACY POLICY",
								content: "Please refer to our Privacy Policy for details on how we collect, use, and protect your information."
							},
							{
								title: "13. COPYRIGHT INFRINGEMENTS",
								content: "If you believe content on our site violates your copyright, contact us at legal@motorminds.ca with proper notice as required under DMCA or applicable law."
							},
							{
								title: "14. TERM AND TERMINATION",
								content: "These Terms remain in effect until terminated by either party. We may terminate access to the services if you violate these Terms or applicable laws."
							},
							{
								title: "15. MODIFICATIONS AND INTERRUPTIONS",
								content: "We may modify these Terms or the service at any time. We are not liable for service interruptions or downtime but will aim to notify users when possible."
							},
							{
								title: "16. GOVERNING LAW",
								content: "These Terms are governed by the laws of the Province of Ontario, Canada, without regard to conflict of law principles."
							},
							{
								title: "17. DISPUTE RESOLUTION",
								content: "Disputes shall first be attempted to resolve informally. If unresolved, they shall be subject to binding arbitration in Ontario, unless prohibited by local law."
							},
							{
								title: "18. CORRECTIONS",
								content: "We may correct errors or update information on the site without prior notice."
							},
							{
								title: "19. DISCLAIMER",
								content: "Services are provided \"as-is\" and \"as available.\" We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose."
							},
							{
								title: "20. LIMITATIONS OF LIABILITY",
								content: "MotorMinds is not liable for indirect, incidental, or consequential damages, including lost profits or business interruptions."
							},
							{
								title: "21. INDEMNIFICATION",
								content: "You agree to indemnify and hold harmless MotorMinds and its affiliates from any claims arising out of your use of the services or violation of these Terms."
							},
							{
								title: "22. USER DATA",
								content: "We store data you submit to the platform. You are responsible for backing up your own data. We are not liable for data loss."
							},
							{
								title: "23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
								content: "Using our services constitutes electronic communication. You consent to receive communications electronically and agree to electronic records and signatures."
							},
							{
								title: "24. MISCELLANEOUS",
								content: "These Terms constitute the entire agreement between you and MotorMinds. If any provision is found invalid, the remaining provisions remain enforceable."
							}
						].map((section) => (
							<section key={section.title} className="mb-6">
								<h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
								<p className="text-gray-300 mb-3 text-[15px]">{section.content}</p>
								{section.list && (
									<ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
										{section.list.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								)}
							</section>
						))}

						<section className="mb-6">
							<h2 className="text-xl font-semibold text-white mb-3">CONTACT US</h2>
							<p className="text-gray-300 mb-3 text-[15px]">
								If you have any questions about these Terms, please contact:
							</p>
							<div className="text-gray-300 text-[15px]">
								<p className="font-semibold text-white">MotorMinds</p>
								<p>Email: info@motorminds.ca</p>
								<p>Website: www.motorminds.ca</p>
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