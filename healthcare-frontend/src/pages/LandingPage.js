// LandingPage.js
import React from 'react';
import { NavigationalBar } from './NavigationalBar'; // Importing the redesigned Navbar
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutPage from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import AppointmentSection from '../components/AppointmentManagementSection';
import ServicesSection from '../components/ServicesScetion';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <NavigationalBar /> {/* Using the new Navbar component */}

      {/* Hero Section */}
      <HeroSection />

      <AppointmentSection />
      {/* About Section */}
      <AboutPage />
        <ServicesSection />
      <Testimonials />

      {/* Footer Section */}
    <Footer />
    </div>
  );
}

export default LandingPage;
