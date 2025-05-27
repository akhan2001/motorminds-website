import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import CTABanner from "@/components/cta-banner"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="mx-auto px-4 py-24">
        <div className="max-w-[950px] mx-auto">
          <h1 className="text-2xl font-bold text-white mb-6">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none text-[15px]">
            <p className="text-gray-300 mb-4 text-[15px]">
              Last Updated: May 7, 2025
            </p>
            
            <p className="text-gray-300 mb-6 text-[15px]">
              MotorMinds ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains what data we collect, how we use and store it, and your rights regarding your information.
            </p>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
              <p className="text-gray-300 mb-3 text-[15px]">
                We collect the following types of data through our website and services:
              </p>
              <div className="mb-4">
                <h3 className="text-lg text-white mb-2">a) Information You Provide</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
                  <li>Name, email, phone number (when you submit a form or sign up)</li>
                  <li>Shop/business details (if applicable)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg text-white mb-2">b) Automatically Collected Data</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
                  <li>IP address</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral links or sources</li>
                  <li>Cookie identifiers</li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-3 text-[15px]">We use your data to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
                <li>Contact you with relevant offers or updates</li>
                <li>Provide and improve our services</li>
                <li>Generate leads and follow up with you if you request more information</li>
                <li>Monitor site performance and traffic analytics</li>
                <li>Ensure website functionality and security</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Store and Protect Your Data</h2>
              <p className="text-gray-300 text-[15px]">
                Your data is stored securely using encrypted cloud storage solutions. We take technical and organizational measures to protect your information against unauthorized access, alteration, or destruction.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-3">4. How We Share Your Data</h2>
              <p className="text-gray-300 mb-3 text-[15px]">
                We do not sell your personal data. We may share data with:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-[15px]">
                <li>Our service providers (hosting, analytics, CRM platforms)</li>
                <li>Legal or government authorities when required by law</li>
                <li>Marketing platforms (e.g. email delivery tools) – for communication purposes only</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-3">5. Opt-Out or Data Request Instructions</h2>
              <p className="text-gray-300 text-[15px]">
                To exercise your rights, email us at info@motorminds.ca with the subject line: "Privacy Request". Please include your name and the nature of your request.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-3">6. Cookies & Tracking Technologies</h2>
              <p className="text-gray-300 mb-3 text-[15px]">We use cookies for:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4 text-[15px]">
                <li>Analytics (e.g., Google Analytics): Understand website usage and improve performance</li>
                <li>Functional: Keep your session and preferences consistent</li>
                <li>Marketing/Lead Tracking: Measure effectiveness of ad campaigns and follow up with interested leads</li>
              </ul>
              <h3 className="text-lg text-white mb-2">Cookie Banner</h3>
              <p className="text-gray-300 mb-3 text-[15px]">
                A banner will appear when you visit our site to inform you that cookies are in use and provide a way to accept or manage cookie preferences.
                You may disable cookies in your browser settings, though some features of our site may not function properly.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-3">7. Contact Us</h2>
              <p className="text-gray-300 mb-3 text-[15px]">
                If you have any questions about this policy or your personal data, you can contact:
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