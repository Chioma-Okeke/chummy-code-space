"use client"

import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Calendar, TrendingUp } from 'lucide-react';
import { profileData } from '@/data/mock-data';

const ProjectsSection = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Featured <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A showcase of impactful solutions I have built, demonstrating my expertise in full-stack development
                        and commitment to creating user-centered applications.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {profileData.projects.map((project, index) => (
                        <Card
                            key={project.id}
                            className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${hoveredProject === project.id ? 'ring-2 ring-purple-400 ring-opacity-50' : ''
                                }`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Floating Date */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-xs font-medium text-gray-700">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {project.date}
                                </div>

                                {/* Overlay Links */}
                                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <Button
                                        size="sm"
                                        className="flex-1 bg-white/90 hover:bg-white text-gray-900 backdrop-blur-sm"
                                    >
                                        <ExternalLink className="w-3 h-3 mr-1" />
                                        Demo
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="flex-1 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                                    >
                                        <Github className="w-3 h-3 mr-1" />
                                        Code
                                    </Button>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-2">Technologies Used</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <Badge
                                                key={idx}
                                                variant="secondary"
                                                className="text-xs bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 transition-colors duration-200"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-2 flex items-center">
                                        <TrendingUp className="w-3 h-3 mr-1" />
                                        Key Achievements
                                    </p>
                                    <ul className="space-y-1">
                                        {project.achievements.slice(0, 2).map((achievement, idx) => (
                                            <li key={idx} className="text-xs text-gray-600 flex items-start">
                                                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                    {project.achievements.length > 2 && (
                                        <p className="text-xs text-purple-600 font-medium mt-2">
                                            +{project.achievements.length - 2} more achievements
                                        </p>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Project Stats */}
                <div className="mt-16 grid md:grid-cols-4 gap-6">
                    <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                        <h4 className="text-2xl font-bold text-purple-700 mb-2">3+</h4>
                        <p className="text-purple-600 text-sm">Major Projects</p>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
                        <h4 className="text-2xl font-bold text-pink-700 mb-2">100%</h4>
                        <p className="text-pink-600 text-sm">On-Time Delivery</p>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                        <h4 className="text-2xl font-bold text-blue-700 mb-2">40%</h4>
                        <p className="text-blue-600 text-sm">Avg Performance Gain</p>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                        <h4 className="text-2xl font-bold text-green-700 mb-2">90%+</h4>
                        <p className="text-green-600 text-sm">User Engagement</p>
                    </Card>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <Card className="p-8 bg-gradient-to-r from-purple-600 to-purple-700 border-0 text-white">
                        <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
                        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                            I am always excited to take on new challenges and create innovative solutions.
                            Let us discuss how I can help bring your ideas to life.
                        </p>
                        <Button
                            size="lg"
                            className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-full font-medium"
                        >
                            Start a Conversation
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;