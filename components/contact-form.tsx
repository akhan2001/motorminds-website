'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // EmailJS configuration from environment variables
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
            
            console.log('Environment check:', {
                serviceId: serviceId ? 'Present' : 'Missing',
                publicKey: publicKey ? 'Present' : 'Missing'
            });
            
            if (!serviceId || !publicKey) {
                throw new Error('EmailJS configuration missing - check your .env.local file');
            }
            
            // Create email content
            const emailContent = `
New Contact Form Submission from MotorMinds Website

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}
Subject: ${formData.subject || 'Not provided'}

Message:
${formData.message}

---
This message was sent from the MotorMinds contact form.
            `;

            // Send auto-reply to user using your template
            const templateParams = {
                to_email: formData.email, // Send auto-reply to the user
                name: `${formData.firstName} ${formData.lastName}`,
                title: formData.subject || 'Contact Form Submission'
            };

            console.log('Sending email with params:', templateParams);

            // Using your actual template ID
            const templateId = 'template_qzivm9n';
            
            const result = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            console.log('EmailJS result:', result);
            
            // Success - reset form
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                subject: '',
                message: ''
            });

        } catch (err) {
            console.error('EmailJS Error:', err);
            console.error('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
            console.error('Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Present' : 'Missing');
            setError(`Failed to send message: ${err.message || 'Unknown error'}. Please try again or contact us directly.`);
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (isSubmitted) {
        return (
            <div className="bg-black border border-gray-800 rounded-2xl p-8 animate-scale-in">
                <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Message Sent!</h2>
                    <p className="text-[#c5c6c5] mb-6">
                        Thank you for contacting us. Your email client should have opened with your message ready to send.
                    </p>
                    <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="gradient-red"
                        className="px-8 py-3"
                    >
                        Send Another Message
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black border border-gray-800 rounded-2xl p-8 animate-slide-in-left">
            <div className="mb-8">
                <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-700/20 rounded-[40px] px-6 py-3 mb-6">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                    <span className="text-white text-sm font-medium">GET IN TOUCH</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                    Need assistance or have <span className="text-gray-300">questions?</span>
                </h2>
                <p className="text-[#c5c6c5] text-lg">
                    Fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                    <p className="text-red-400">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#c5c6c5] mb-3">
                            First Name *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-[10px] text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                            placeholder="Enter your first name"
                            maxLength={256}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#c5c6c5] mb-3">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-[10px] text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                            placeholder="Enter your last name"
                            maxLength={256}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#c5c6c5] mb-3">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-[10px] text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                            placeholder="your.email@example.com"
                            maxLength={256}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#c5c6c5] mb-3">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-[10px] text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                            placeholder="(555) 123-4567"
                            maxLength={256}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#c5c6c5] mb-3">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-[10px] text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                        placeholder="Your company name (optional)"
                        maxLength={256}
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#c5c6c5] mb-3">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-[10px] text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                        placeholder="What's this about? (optional)"
                        maxLength={256}
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#c5c6c5] mb-3">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-[10px] text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors min-h-[140px] resize-none"
                        placeholder="Please describe your inquiry, issue, or request in detail..."
                        maxLength={5000}
                    />
                </div>

                <Button 
                    type="submit" 
                    variant="gradient-red" 
                    className="w-full py-4 text-lg font-medium rounded-[10px]"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                        </div>
                    ) : (
                        'Send Message'
                    )}
                </Button>
            </form>
        </div>
    );
} 