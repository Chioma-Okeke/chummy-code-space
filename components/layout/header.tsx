"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Volunteer', href: '#volunteer' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-purple-100'
                : 'bg-transparent'
            }`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => scrollToSection('#hero')}
                            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
                        >
                            CO
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(item.href)}
                                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                        <Button
                            onClick={() => scrollToSection('#contact')}
                            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-200"
                        >
                            Get In Touch
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-purple-600"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-purple-100 mb-4">
                            {navItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors duration-200"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <Button
                                onClick={() => scrollToSection('#contact')}
                                className="w-full mt-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white"
                            >
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;