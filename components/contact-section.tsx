"use client"

import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
    Mail,
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
import z from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { AnimatedSection } from './shared/animated-section';

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormValues = z.infer<typeof formSchema>

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    const onSubmit = async (values: FormValues) => {
        console.log("Form submitted:", values)
        try {
            setIsSubmitting(true)
            await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(values)
            })
            form.reset()
            toast.success("Message Successfully Sent", {
                description: "Thank you for your message. I will get back to you soon."
            })
        } catch (error) {
            console.error(error)
            toast.error("Message Not Sent", {
                description: "An error occurred while sending message"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: profileData.email,
            href: `mailto:${profileData.email}`,
            color: 'from-blue-600 to-blue-500'
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
            <AnimatedSection>
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

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Name <span className='text-sm text-red-500'>*</span></FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your name" className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200' {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email <span className='text-sm text-red-500'>*</span></FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="your.email@example.com" className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200' {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message <span className='text-sm text-red-500'>*</span></FormLabel>
                                                <FormControl>
                                                    <Textarea rows={7} placeholder="Tell me about your project or opportunity..." className='w-full h-28 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-vertical' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

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
                                            <div className='flex items-center'>
                                                Send Message
                                                <Send className="w-4 h-4 ml-2" />
                                            </div>
                                        )}
                                    </Button>
                                </form>
                            </Form>
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
                                                <span className="text-gray-700 text-sm">Open to internship roles for Summer 2026</span>
                                            </div>
                                            {/* <div className="flex items-center">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                            <span className="text-gray-700 text-sm">Available for freelance projects</span>
                                        </div> */}
                                            {/* <div className="flex items-center">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                            <span className="text-gray-700 text-sm">Open to mentoring opportunities</span>
                                        </div> */}
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
                                        {/* <p className="text-gray-600 text-sm mt-2">
                                            Open to remote work and relocation opportunities
                                        </p> */}
                                    </div>
                                </div>
                            </Card>

                            {/* Response Time */}
                            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                                <h4 className="font-semibold text-gray-900 mb-4 text-center">Why Work With Me?</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        <span className="text-gray-700 text-sm">Bridge technology and impact by aligning strong technical execution with real business goals to build scalable, user-centered solutions</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        <span className="text-gray-700 text-sm">Demonstrated record of delivering production-grade web applications that enhance performance, usability, and reliability.</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        <span className="text-gray-700 text-sm">Passionate about continuous learning and exploring emerging technologies and security practices to create innovative, future-ready products.</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default ContactSection;