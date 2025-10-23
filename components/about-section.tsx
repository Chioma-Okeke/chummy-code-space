import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, Heart } from 'lucide-react';
import { profileData } from '@/data/mock-data';
import { AnimatedSection } from './shared/animated-section';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <AnimatedSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            About <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Me</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            When I am not busy debugging lines of code, you will probably catch me binge-watching anime, re-watching my favorite movies, or laughing at my own bad jokes.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center lg:items-start">
                        {/* Left - Story & Education */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <Heart className="w-6 h-6 text-purple-600 mr-3" />
                                    My Story
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {profileData.about.summary}
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    The journey began in Nigeria with a Bachelor’s degree in Computer Engineering from Covenant University, where a curiosity for how technology can solve real problems evolved into a drive to create purposeful software.
                                    Now pursuing an M.S. in Computer Science at Arizona State University, with a focus on Systems and Software Security, while contributing as a Web Application Developer Assistant at EdPlus.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    This role provides the opportunity to blend academic growth with hands-on experience, strengthening skills in developing robust systems, improving application reliability, and integrating secure engineering principles into every layer of development.
                                </p>
                            </div>

                            {/* Education Cards */}
                            <div className="space-y-4">
                                <h4 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
                                    <GraduationCap className="w-5 h-5 text-purple-600 mr-2" />
                                    Education
                                </h4>
                                {profileData.education.map((edu) => (
                                    <Card key={edu.id} className="p-6 border-l-4 border-purple-400 hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                            <div>
                                                <h5 className="font-semibold text-gray-900">{edu.degree}</h5>
                                                {edu.major && <p className="text-purple-600 font-medium">Major: {edu.major}</p>}
                                                <p className="text-gray-600">{edu.school}</p>
                                            </div>
                                            <div className="text-right text-sm text-gray-500 mt-2 sm:mt-0">
                                                <p>{edu.duration}</p>
                                                {edu.gpa && <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">{edu.gpa}</Badge>}
                                            </div>
                                        </div>
                                        {edu.coursework.length > 0 && (
                                            <div>
                                                <p className="text-sm text-gray-600 mb-2">Relevant Coursework:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.coursework.map((course, idx) => (
                                                        <Badge key={idx} variant="outline" className="text-xs">{course}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Right - Achievements & Goals */}
                        <div className="space-y-8">
                            {/* Key Achievements */}
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900 flex items-center mb-6">
                                    <Award className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Achievements
                                </h4>
                                <div className="space-y-4">
                                    {profileData.about.highlights.map((highlight, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-400 hover:shadow-md transition-shadow duration-300"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-4">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">{highlight}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Goals & Interests */}
                            {/* <div>
                            <h4 className="text-xl font-semibold text-gray-900 flex items-center mb-6">
                                <Target className="w-5 h-5 text-purple-600 mr-2" />
                                Goals & Interests
                            </h4>
                            <Card className="p-6 bg-gradient-to-br from-purple-50 to-white border-purple-200">
                                <div className="space-y-4">
                                    <div>
                                        <h5 className="font-semibold text-purple-900 mb-2">Professional Goals</h5>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Seeking opportunities to leverage my full-stack development skills and cybersecurity expertise
                                            in creating secure, scalable applications that make a positive impact on users&apos; lives.
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-purple-900 mb-2">Interests</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {["Cybersecurity Research", "React Ecosystem", "Healthcare Technology", "Mentorship", "Open Source"].map((interest, idx) => (
                                                <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                                                    {interest}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-purple-900 mb-2">Current Focus</h5>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Balancing graduate studies in Cybersecurity with hands-on development work, while actively
                                            mentoring the next generation of developers through She Code Africa.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div> */}
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default AboutSection;