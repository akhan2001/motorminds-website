import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export default function ContactInfo() {
    return (
        <div className="bg-black border border-gray-800 rounded-2xl p-8 animate-slide-in-right">
            <div className="mb-8">
                <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-700/20 rounded-[40px] px-6 py-3 mb-6">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                    <span className="text-white text-sm font-medium">CONTACT INFO</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                    Get in <span className="text-gray-300">touch</span>
                </h3>
                <p className="text-[#c5c6c5] text-lg">
                    Reach out to us via email, phone, or the contact form. We'll get back to you shortly!
                </p>
            </div>

            <div className="space-y-8">
                {/* Email */}
                <div className="group">
                    <div className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-[10px] hover:border-white/30 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-[10px] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-1">Email Us</h4>
                            <a 
                                href="mailto:info@motorminds.ca?subject=Information%20Contact"
                                className="text-[#c5c6c5] hover:text-white transition-colors"
                            >
                                info@motorminds.ca
                            </a>
                        </div>
                    </div>
                </div>

                {/* Phone */}
                <div className="group">
                    <div className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-[10px] hover:border-white/30 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-[10px] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Phone className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-1">Call Us</h4>
                            <a 
                                href="tel:9058053844"
                                className="text-[#c5c6c5] hover:text-white transition-colors"
                            >
                                +1 (905) 805-3844
                            </a>
                        </div>
                    </div>
                </div>

                {/* Office Hours */}
                <div className="group">
                    <div className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-[10px] hover:border-white/30 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-[10px] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Clock className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-1">Office Hours</h4>
                            <div className="text-[#c5c6c5] space-y-1">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                                <p>Saturday - Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location */}
                <div className="group">
                    <div className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-[10px] hover:border-white/30 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-[10px] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <MapPin className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-1">Location</h4>
                            <p className="text-[#c5c6c5]">Based in Ontario, Canada</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 p-6 bg-gray-900 border border-gray-700/20 rounded-[10px]">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 8 8">
                            <path d="M6.564.75L3.5 3.814 1.436 1.75.75 2.436l2.75 2.75 3.75-3.75z"/>
                        </svg>
                    </div>
                    <h4 className="text-white font-medium">Quick Response</h4>
                </div>
                <p className="text-[#c5c6c5] text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                </p>
            </div>
        </div>
    );
} 