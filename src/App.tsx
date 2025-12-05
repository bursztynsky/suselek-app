import React from 'react';
import './index.scss';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HomeSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
