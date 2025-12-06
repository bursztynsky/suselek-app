// src/pages/LandingPage.tsx
import React from 'react';
import HotelSection from '../components/HotelSection.tsx';
import CheckOfferSection from '../components/ChekOfferSection';
import AdvantagesSection from '../components/ProfessionalSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import InstagramSection from '../components/InstagramSection';

const LandingPage: React.FC = () => {
  return (
    <>
      <HotelSection />
      <CheckOfferSection />
      <AdvantagesSection />
      <GallerySection />
      <ReviewsSection />
      <InstagramSection />
    </>
  );
};

export default LandingPage;
