// src/pages/LandingPage.tsx
import React from 'react';
import HotelSection from '../components/HotelSection.tsx';
import CheckOfferSection from '../components/ChekOfferSection';
import AdvantagesSection from '../components/ProfessionalSection';
import ProfessionalCareSection from '../components/ProfessionalCareSection';
import GroomingSection from '../components/GroomingSection';
import AnimalPsychologySection from '../components/AnimalPsychologySection';
import ReviewsSection from '../components/ReviewsSection';
import GallerySection from '../components/GallerySection.tsx';

const LandingPage: React.FC = () => {
  return (
    <>
      <HotelSection />
      <CheckOfferSection />
      <AdvantagesSection />
      <ProfessionalCareSection />
      <GroomingSection />
      <AnimalPsychologySection />
      <ReviewsSection />
      <GallerySection />
    </>
  );
};

export default LandingPage;
