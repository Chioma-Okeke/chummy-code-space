import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Calendar, Clock, PenTool } from 'lucide-react';
import { profileData } from '@/data/mock-data';
import Link from 'next/link';
import { AnimatedSection } from './shared/animated-section';

const BlogSection = () => {
    return (
        <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
            <AnimatedSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Tech <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Writing</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Sharing insights, tutorials, and lessons learned from my journey in full-stack development and cybersecurity.
                        </p>
                    </div>

                    {/* Blog Platform Info */}
                    <Card className="mb-12 p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0 shadow-xl">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex flex-col md:flex-row max-md:gap-4 md:items-center mb-4 md:mb-0">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                                    <PenTool className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Follow My Tech Blog</h3>
                                    <p className="text-purple-100">
                                        I write about React concepts, software security practices, and full-stack development insights on {profileData.blog.platform}
                                    </p>
                                </div>
                            </div>
                            <Link
                                href="https://chummygeraldine.hashnode.dev/"
                                target='_blank'
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-6 py-2 rounded-full backdrop-blur-sm flex items-center transition-all duration-300 ease-in-out"
                            >
                                Visit My Blog
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </Card>

                    {/* Recent Posts */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Articles</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {profileData.blog.recentPosts.map((post) => (
                                <Card
                                    key={post.id}
                                    className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
                                >
                                    {/* Post Header */}
                                    <div className="p-6 space-y-4 flex flex-col justify-between h-full">
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                                                {post.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                        </div>

                                        {/* Tags based on content */}
                                        <div className="flex flex-wrap gap-2">
                                            {post.title.includes('React') && (
                                                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                                                    React
                                                </Badge>
                                            )}
                                            {post.title.includes('Cybersecurity') && (
                                                <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200 text-xs">
                                                    Cybersecurity
                                                </Badge>
                                            )}
                                            {post.title.includes('Node') && (
                                                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 text-xs">
                                                    Node.js
                                                </Badge>
                                            )}
                                            {post.title.includes('Hook') && (
                                                <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 text-xs">
                                                    Hooks
                                                </Badge>
                                            )}
                                        </div>

                                        <Link
                                            href={post.url}
                                            target='_blank'
                                            className="w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition-colors duration-300 mt-4 flex items-center justify-center py-2"
                                        >
                                            Read Article
                                            <ExternalLink className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Writing Topics */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What I Write About</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="p-6 text-center bg-white border-purple-200 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-lg">⚛️</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Frontend Development</h4>
                                <p className="text-gray-600 text-sm">Hooks, performance optimization, and best practices</p>
                            </Card>

                            <Card className="p-6 text-center bg-white border-purple-200 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-lg">🚀</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Backend Development</h4>
                                <p className="text-gray-600 text-sm">Node.js, API design, and scalable architectures</p>
                            </Card>

                            <Card className="p-6 text-center bg-white border-purple-200 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-lg">🔒</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Software and System Security</h4>
                                <p className="text-gray-600 text-sm">Web security, best practices, and threat prevention</p>
                            </Card>

                            <Card className="p-6 text-center bg-white border-purple-200 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-lg">💡</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Lessons from my Career Journey</h4>
                                <p className="text-gray-600 text-sm">Learning strategies and professional development</p>
                            </Card>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    {/* <Card className="mt-16 p-8 bg-gradient-to-br from-purple-600 to-purple-700 text-white border-0">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                            Get notified when I publish new articles about React, cybersecurity, and full-stack development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <Button className="bg-white text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-lg font-medium">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-purple-200 text-sm mt-3">
                            No spam, just quality tech content. Unsubscribe anytime.
                        </p>
                    </div>
                </Card> */}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default BlogSection;