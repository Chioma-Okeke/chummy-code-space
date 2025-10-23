"use client"

import React, { useRef } from 'react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Code, Database, Wrench } from 'lucide-react';
import { profileData } from '@/data/mock-data';
import { ISkill } from '@/types';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion"
import { AnimatedSection } from './shared/animated-section';

const SkillsSection = () => {
    const sectionRef = useRef(null);

    const skillCategories = [
        {
            id: 'programming',
            label: 'Programming',
            icon: Code,
            color: 'from-purple-600 to-blue-600',
            skills: profileData.skills.programming.map(skill => ({
                name: skill,
                level: skill === 'JavaScript' ? 85 : skill === 'Python' ? 70 : skill === 'TypeScript' ? 85 : 60
            }))
        },
        {
            id: 'frontend',
            label: 'Frontend',
            icon: Code,
            color: 'from-pink-600 to-purple-600',
            skills: profileData.skills.frontend.map(skill => ({
                name: skill,
                level: skill.includes('React') ? 95 : skill.includes('CSS') || skill.includes('HTML') ? 90 : 85
            }))
        },
        {
            id: 'backend',
            label: 'Backend',
            icon: Database,
            color: 'from-blue-600 to-cyan-600',
            skills: profileData.skills.backend.map(skill => ({
                name: skill,
                level: skill.includes('Node') ? 90 : skill.includes('Express') ? 88 : skill.includes('RESTful') ? 80 : 75
            }))
        },
        {
            id: 'tools',
            label: 'Tools & Technologies',
            icon: Wrench,
            color: 'from-green-600 to-blue-600',
            skills: [...profileData.skills.databases, ...profileData.skills.tools].map(skill => ({
                name: skill,
                level: skill.includes('Git') ? 92 : skill.includes('MongoDB') ? 88 : 70
            }))
        },
    ];

    const SkillBar = ({ skill, index, color }: { skill: ISkill, index: number, color: string }) => {
        const indicatorColor = `bg-gradient-to-r ${color}`
        return (
            <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                </div>
                <div className='w-full h-2 rounded-full bg-gray-200'>
                    <motion.div
                        className={cn("h-full rounded-full flex-1", indicatorColor)}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level || 0}%` }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: index / 10 }}></motion.div>
                </div>
            </div>
        )
    };

    return (
        <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
            <AnimatedSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Technical <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Skills</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            A comprehensive toolkit built through years of hands-on development, continuous learning, and real-world application.
                        </p>
                    </div>

                    <Tabs defaultValue="programming" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white shadow-sm">
                            {skillCategories.map((category) => {
                                const IconComponent = category.icon;
                                return (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.id}
                                        className="flex items-center gap-2 data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 cursor-pointer hover:text-purple-700"
                                    >
                                        <IconComponent className="w-4 h-4" />
                                        <span className="hidden sm:inline">{category.label}</span>
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>

                        {skillCategories.map((category) => (
                            <TabsContent key={category.id} value={category.id} className="mt-6">
                                <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200 shadow-lg">
                                    <div className="flex items-center mb-6">
                                        <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                                            <category.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">{category.label}</h3>
                                            <p className="text-gray-600 text-sm">
                                                {category.skills.length} skills • Proficiency levels based on project experience
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {category.skills.map((skill, index) => (
                                            <SkillBar key={skill.name} color={category.color} skill={skill} index={index} />
                                        ))}
                                    </div>
                                </Card>
                            </TabsContent>
                        ))}
                    </Tabs>

                    {/* Skills Summary */}
                    {/* <div className="mt-12 grid md:grid-cols-3 gap-6">
                        <Card className="p-6 text-center bg-gradient-to-br from-purple-600 to-purple-700 text-white">
                            <h4 className="text-2xl font-bold mb-2">2+</h4>
                            <p className="text-purple-100">Years of Programming</p>
                        </Card>
                        <Card className="p-6 text-center bg-gradient-to-br from-pink-600 to-pink-700 text-white">
                            <h4 className="text-2xl font-bold mb-2">15+</h4>
                            <p className="text-pink-100">Technologies Mastered</p>
                        </Card>
                        <Card className="p-6 text-center bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                            <h4 className="text-2xl font-bold mb-2">3+</h4>
                            <p className="text-blue-100">Projects Delivered</p>
                        </Card>
                    </div> */}

                    {/* Skill Philosophy */}
                    <Card className="mt-8 p-6 bg-white border-l-4 border-purple-400">
                        <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                            &quot;Technology is best when it brings people together. I believe in writing clean, maintainable code
                            that not only solves problems but also enables teams to collaborate effectively and build upon each other&apos;s work.&quot;
                        </blockquote>
                        <cite className="block text-right text-purple-600 font-medium mt-4">— Chioma Okeke</cite>
                    </Card>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default SkillsSection;