"use client"

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { profileData } from '@/data/mock-data';
import Image from 'next/image';

const HeroSection = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = [
        "Full-Stack Developer",
        "React Expert",
        "Secured Software Engineer"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                                <MapPin className="w-4 h-4 text-purple-600" />
                                <span className="text-gray-600 font-medium">{profileData.location}</span>
                                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                                    Available for opportunities
                                </Badge>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                Hi, I am{' '}
                                <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Chioma
                                </span>
                            </h1>

                            <div className="text-2xl lg:text-3xl text-gray-700 h-12 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                                <span className="mr-3">A passionate</span>
                                <span
                                    key={currentRole}
                                    className="font-semibold text-purple-600 animate-fadeIn"
                                >
                                    {roles[currentRole]}
                                </span>
                            </div>
                        </div>

                        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                            Crafting scalable web applications and secure systems with expertise in React, Node.js, and Cybersecurity.
                            Currently pursuing M.S. in Computer Science while making impactful contributions at EdPlus, Arizona State University.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                onClick={() => scrollToSection('#projects')}
                                size="lg"
                                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-purple-200 transition-all duration-300 group"
                            >
                                View My Work
                                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-full transition-all duration-300"
                            >
                                <Download className="mr-2 w-4 h-4" />
                                Download Resume
                            </Button>
                        </div>

                        <div className="flex justify-center lg:justify-start space-x-6">
                            <a
                                title='LiknedIn'
                                href={profileData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 group"
                            >
                                <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                            </a>
                            <a
                                title='Github'
                                href={profileData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 group"
                            >
                                <Github className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                            </a>
                            <a
                                title='Contact'
                                onClick={() => scrollToSection('#contact')}
                                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 group"
                            >
                                <Mail className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
                                <Image alt='Chioma Okeke' src={profileData.profileImage} fill className='object-cover object-top' priority />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent"></div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg border border-purple-100 animate-bounce animation-delay-1000">
                                <span className="text-2xl">💻</span>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg border border-purple-100 animate-bounce animation-delay-3000">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <div className="absolute top-1/2 -left-8 bg-white rounded-full p-3 shadow-lg border border-purple-100 animate-pulse">
                                <span className="text-xl">⚛️</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden lg:block z-20 absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Button
                    onClick={() => scrollToSection('#about')}
                    variant="scroll"
                    className="p-2 text-purple-600 hover:text-purple-700 hover:scale-125"
                >
                    <ArrowDown className="size-6" />
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;