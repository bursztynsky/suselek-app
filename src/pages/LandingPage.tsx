// src/pages/LandingPage.tsx
import React from 'react';
import HomeSection from '../components/HomeSection';
import CheckOfferSection from '../components/ChekOfferSection';
import ProfessionalSection from '../components/ProfessionalSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import InstagramSection from '../components/InstagramSection';

const LandingPage: React.FC = () => {
  return (
    <>
      <HomeSection />
      <CheckOfferSection />
      <ProfessionalSection />
      <GallerySection />
      <ReviewsSection />
      <InstagramSection />
    </>
  );
};

export default LandingPage;
