import React from 'react';
import Header from './layout/header';
import HeroSection from './hero-section';
import AboutSection from './about-section';
import SkillsSection from './skills-section';
import ExperienceSection from './experience-section';
import ProjectsSection from './project-section';
import VolunteerSection from './volunteer-section';
import BlogSection from './blog-section';
import ContactSection from './contact-section';
import Footer from './layout/footer';


const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
                <VolunteerSection />
                <BlogSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;