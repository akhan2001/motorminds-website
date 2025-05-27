import { Mail, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-gray-900 rounded-lg p-8">
      <h3 className="text-2xl font-semibold text-red-500 mb-6">Support</h3>
      
      <div className="space-y-6">
        <p className="text-gray-400">
          Get in touch via email, phone, or the contact form. Someone will get back to you shortly!
        </p>

        <div className="space-y-4">
          <a 
            href="mailto:info@motorminds.ca?subject=Information%20Contact"
            className="flex items-center space-x-3 text-white hover:text-red-500 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>info@motorminds.ca</span>
          </a>

          <a 
            href="tel:9058053844"
            className="flex items-center space-x-3 text-white hover:text-red-500 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+1 (905) 805-3844</span>
          </a>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <h4 className="text-lg font-medium mb-4">Office Hours</h4>
          <div className="space-y-2 text-gray-400">
            <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
} 