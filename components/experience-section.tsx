"use client"

import React, { useState, useRef } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { profileData } from '@/data/mock-data';
import { AnimatePresence, motion } from 'framer-motion';

const ExperienceSection = () => {
    const [expandedExp, setExpandedExp] = useState<number | null>(null);
    const sectionRef = useRef(null);

    const toggleExpanded = (id: number) => {
        setExpandedExp(expandedExp === id ? null : id);
    };

    return (
        <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Professional <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Journey</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From intern to full-stack developer, each role has shaped my expertise and passion for creating impactful technology solutions.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full" style={{ height: 'calc(100% - 100px)', top: '50px' }}></div>

                    {/* Experience Cards */}
                    <div className="space-y-12">
                        <AnimatePresence>
                            {profileData.experience.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                                    {/* Experience Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut", delay: index / 10 }}
                                    >
                                        <Card className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'} shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm`}>
                                            <div className="p-6 space-y-4">
                                                {/* Header */}
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <div className="flex items-center mb-2">
                                                            <Building className="w-5 h-5 text-purple-600 mr-2" />
                                                            <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>
                                                        </div>
                                                        <h4 className="text-xl font-bold text-purple-700 mb-2">{exp.role}</h4>
                                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                                                            <div className="flex items-center">
                                                                <Calendar className="w-4 h-4 mr-1" />
                                                                {exp.duration}
                                                            </div>
                                                            <div className="flex items-center">
                                                                <MapPin className="w-4 h-4 mr-1" />
                                                                {exp.location}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-600 leading-relaxed">{exp.description}</p>

                                                {/* Achievements Preview */}
                                                <div>
                                                    <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                                                        <TrendingUp className="w-4 h-4 text-purple-600 mr-2" />
                                                        Key Achievements
                                                    </h5>
                                                    <ul className="space-y-2">
                                                        {(expandedExp === exp.id ? exp.achievements : exp.achievements.slice(0, 2)).map((achievement, idx) => (
                                                            <li key={idx} className="flex items-start text-sm text-gray-700">
                                                                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {exp.achievements.length > 2 && (
                                                        <button
                                                            onClick={() => toggleExpanded(exp.id)}
                                                            className="mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center transition-colors duration-200 cursor-pointer"
                                                        >
                                                            {expandedExp === exp.id ? (
                                                                <>
                                                                    Show Less
                                                                    <ChevronUp className="w-4 h-4 ml-1" />
                                                                </>
                                                            ) : (
                                                                <>
                                                                    Show More ({exp.achievements.length - 2} more)
                                                                    <ChevronDown className="w-4 h-4 ml-1" />
                                                                </>
                                                            )}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </Card>

                                        {/* Role Badge */}
                                        <div className={`hidden lg:block absolute top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'
                                            }`}>
                                            <Badge
                                                variant="secondary"
                                                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-3 py-1 shadow-lg"
                                            >
                                                {index === 0 ? 'Current' : `${profileData.experience.length - index} years ago`}
                                            </Badge>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Career Stats */}
                <div className="mt-16 grid md:grid-cols-4 gap-6">
                    <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                        <h4 className="text-3xl font-bold text-purple-700 mb-2">2+</h4>
                        <p className="text-purple-600 text-sm font-medium">Years Experience</p>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                        <h4 className="text-3xl font-bold text-blue-700 mb-2">3</h4>
                        <p className="text-blue-600 text-sm font-medium">Companies</p>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                        <h4 className="text-3xl font-bold text-green-700 mb-2">5+</h4>
                        <p className="text-green-600 text-sm font-medium">Major Projects</p>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
                        <h4 className="text-3xl font-bold text-pink-700 mb-2">40%</h4>
                        <p className="text-pink-600 text-sm font-medium">Avg Impact Improvement</p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;