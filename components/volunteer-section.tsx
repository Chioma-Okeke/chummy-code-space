import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Heart, Users, BookOpen, Award, ExternalLink } from 'lucide-react';
import { profileData } from '@/data/mock-data';

const VolunteerSection = () => {
    return (
        <section id="volunteer" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Community <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Impact</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Beyond code, I&apos;m passionate about empowering the next generation of developers and fostering inclusive tech communities.
                    </p>
                </div>

                {/* Main Volunteer Experience */}
                {profileData.volunteerWork.map((volunteer) => (
                    <Card key={volunteer.id} className="mb-8 overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Image Section */}
                            <div className="relative h-64 lg:h-auto">
                                <img
                                    src={volunteer.image}
                                    alt={volunteer.organization}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-600/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <Badge className="bg-white/90 text-purple-700 backdrop-blur-sm px-3 py-1">
                                        {volunteer.duration}
                                    </Badge>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 lg:p-12 space-y-6">
                                <div>
                                    <div className="flex items-center mb-4">
                                        <Heart className="w-6 h-6 text-purple-600 mr-3" />
                                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{volunteer.organization}</h3>
                                    </div>
                                    <h4 className="text-xl font-semibold text-purple-700 mb-3">{volunteer.role}</h4>
                                    <p className="text-gray-600 leading-relaxed mb-6">{volunteer.description}</p>
                                </div>

                                {/* Achievements */}
                                <div>
                                    <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                                        <Award className="w-5 h-5 text-purple-600 mr-2" />
                                        Impact & Achievements
                                    </h5>
                                    <div className="grid gap-4">
                                        {volunteer.achievements.map((achievement, idx) => (
                                            <div key={idx} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                                                <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-4 flex-shrink-0">
                                                    {idx + 1}
                                                </span>
                                                <p className="text-gray-700 leading-relaxed">{achievement}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <div className="pt-4">
                                    <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-purple-200 transition-all duration-300">
                                        Learn More About She Code Africa
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}

                {/* Community Values */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Community Matters to Me</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-white border-purple-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Inclusive Growth</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Creating opportunities for underrepresented groups in tech, ensuring everyone has access to quality learning resources and mentorship.
                            </p>
                        </Card>

                        <Card className="p-6 text-center bg-gradient-to-br from-pink-50 to-white border-pink-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Knowledge Sharing</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Believing that teaching is learning twice, I share my experiences and lessons learned to help others navigate their tech journey more effectively.
                            </p>
                        </Card>

                        <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Paying It Forward</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Having benefited from community support throughout my journey, I am committed to giving back and helping the next generation of developers thrive.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* Community Stats */}
                <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold text-center mb-8">Community Impact by Numbers</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <h4 className="text-3xl font-bold mb-2">90%</h4>
                            <p className="text-purple-100 text-sm">Learners Impacted</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-3xl font-bold mb-2">50+</h4>
                            <p className="text-purple-100 text-sm">Mentorship Sessions</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-3xl font-bold mb-2">12</h4>
                            <p className="text-purple-100 text-sm">Months Leadership</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-3xl font-bold mb-2">100+</h4>
                            <p className="text-purple-100 text-sm">Community Members Reached</p>
                        </div>
                    </div>
                </div>

                {/* Join the Movement */}
                <Card className="mt-12 p-8 text-center bg-gradient-to-br from-gray-50 to-white border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Community Work?</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        I am always looking for opportunities to collaborate on initiatives that promote diversity and inclusion in tech.
                        Let us create positive change together.
                    </p>
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-3 rounded-full"
                    >
                        Let us Collaborate
                    </Button>
                </Card>
            </div>
        </section>
    );
};

export default VolunteerSection;