"use client"

import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';
import { profileData } from '@/data/mock-data';
import { Separator } from '../ui/separator';
import { scrollToSection } from '@/lib/utils';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Volunteer', href: '#volunteer' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' }
    ];

    const technologies = [
        'React.js', 'Node.js', 'TypeScript', 'Python',
        'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'FastAPI'
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                                Chioma Okeke
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Full-Stack Developer & Software Security enthusiast passionate about creating secure,
                                scalable applications and empowering the next generation of developers.
                            </p>
                            <p className="text-gray-400 text-sm">
                                Currently pursuing M.S. in Computer Science at Arizona State University while
                                contributing to impactful technology solutions.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-6">
                            <a
                                title='LinkedIn Profile'
                                href={profileData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                title='Github Profile'
                                href={profileData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                title='email address'
                                href={`mailto:${profileData.email}`}
                                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full border border-purple-800/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6">
                            <h5 className="text-sm font-medium text-gray-300 mb-3">Current Focus</h5>
                            <ul className="text-xs text-gray-400 space-y-1">
                                <li>• M.S. Computer Science - Cybersecurity</li>
                                <li>• Healthcare Technology Solutions</li>
                                <li>• Community Mentorship</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Separator className="bg-gray-700" />

                {/* Bottom Footer */}
                <div className="py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="flex items-center text-sm text-gray-400">
                            <span>© {currentYear} Chioma Okeke. Built with</span>
                            <Heart className="w-4 h-4 text-red-400 mx-2" />
                            <span>and</span>
                            <Code className="w-4 h-4 text-purple-400 mx-2" />
                            <span>in React</span>
                        </div>

                        {/* Made with love */}
                        <div className="flex items-center text-sm text-gray-400">
                            <Coffee className="w-4 h-4 text-amber-400 mr-2" />
                            <span>Fueled by passion for technology</span>
                        </div>
                    </div>

                    {/* Additional Links */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-500">
                            This portfolio showcases my journey as a developer. Feel free to reach out for collaborations or opportunities.
                        </p>
                        <div className="mt-2 space-x-4">
                            <button
                                onClick={() => scrollToSection('#contact')}
                                className="text-xs text-purple-400 hover:text-purple-300 transition-colors duration-300"
                            >
                                Get In Touch
                            </button>
                            <span className="text-gray-600">•</span>
                            <a
                                href="#"
                                className="text-xs text-purple-400 hover:text-purple-300 transition-colors duration-300"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;