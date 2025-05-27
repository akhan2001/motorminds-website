import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-gray-400 text-center text-lg mb-12">
            Get in touch with our team for support or inquiries
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 