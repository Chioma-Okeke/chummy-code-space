"use client"

import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Send,
    MessageCircle,
    Clock,
    CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';
import { profileData } from '@/data/mock-data';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Message sent successfully!", {
                description: "Thank you for reaching out. I'll get back to you soon.",
            });
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
};

const contactMethods = [
    {
        icon: Mail,
        label: 'Email',
        value: profileData.email,
        href: `mailto:${profileData.email}`,
        color: 'from-blue-600 to-blue-500'
    },
    {
        icon: Phone,
        label: 'Phone',
        value: profileData.phone,
        href: `tel:${profileData.phone}`,
        color: 'from-green-600 to-green-500'
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'chioma-okeke',
        href: profileData.linkedin,
        color: 'from-blue-700 to-blue-600'
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'Chioma-Okeke',
        href: profileData.github,
        color: 'from-gray-700 to-gray-600'
    }
];

return (
    <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Let us <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Connect</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Ready to collaborate on exciting projects or discuss opportunities? I would love to hear from you.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-white to-purple-50">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                            <MessageCircle className="w-6 h-6 text-purple-600 mr-3" />
                            Send me a message
                        </h3>
                        <p className="text-gray-600">
                            Fill out the form below and I will respond within 24 hours.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                                    placeholder="Your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Subject *
                            </label>
                            <input
                                type="text"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                                placeholder="What would you like to discuss?"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message *
                            </label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                                placeholder="Tell me about your project or opportunity..."
                            ></textarea>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-200"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-4 h-4 ml-2" />
                                </>
                            )}
                        </Button>
                    </form>
                </Card>

                {/* Contact Information */}
                <div className="space-y-8">
                    {/* Contact Methods */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                        <div className="space-y-4">
                            {contactMethods.map((method, index) => {
                                const IconComponent = method.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="p-4 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-r from-white to-gray-50 group cursor-pointer"
                                    >
                                        <a
                                            href={method.href}
                                            target={method.href.includes('http') ? "_blank" : "_self"}
                                            rel={method.href.includes('http') ? "noopener noreferrer" : ""}
                                            className="flex items-center"
                                        >
                                            <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-105 transition-transform duration-200`}>
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{method.label}</p>
                                                <p className="text-gray-600 text-sm">{method.value}</p>
                                            </div>
                                        </a>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>

                    {/* Availability */}
                    <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mr-4">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Current Availability</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                        <span className="text-gray-700 text-sm">Open to new opportunities</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                        <span className="text-gray-700 text-sm">Available for freelance projects</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                        <span className="text-gray-700 text-sm">Open to mentoring opportunities</span>
                                    </div>
                                </div>
                                <Badge className="bg-green-600 text-white mt-3">
                                    Actively Looking for Opportunities
                                </Badge>
                            </div>
                        </div>
                    </Card>

                    {/* Location */}
                    <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mr-4">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                                <p className="text-gray-700">{profileData.location}</p>
                                <p className="text-gray-600 text-sm mt-2">
                                    Open to remote work and relocation opportunities
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Response Time */}
                    <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                        <h4 className="font-semibold text-gray-900 mb-4 text-center">Why Work With Me?</h4>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                <span className="text-gray-700 text-sm">Quick response time (within 24 hours)</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                <span className="text-gray-700 text-sm">Strong technical skills with business acumen</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                <span className="text-gray-700 text-sm">Proven track record of delivering results</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                <span className="text-gray-700 text-sm">Passionate about continuous learning</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
);
};

export default ContactSection;