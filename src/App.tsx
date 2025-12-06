import React from 'react';
import './index.scss';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import CheckOfferSection from './components/ChekOfferSection';
import ProfessionalSection from './components/ProfessionalSection';
import ReviewsSection from './components/ReviewsSection';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HomeSection />
        <CheckOfferSection />
        <ProfessionalSection />
        <GallerySection />
        <ReviewsSection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
