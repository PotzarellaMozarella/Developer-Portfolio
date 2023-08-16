import React from 'react';
import Header from '../../components/Header'
import AboutSection from '../../components/HomePage/About'
import ProjectSection from '../../components/HomePage/Projects'
import TechStack from '../../components/HomePage/TeckStack';
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <AboutSection />
            <ProjectSection />
            <TechStack />
            <Footer />
        </>

    )
};