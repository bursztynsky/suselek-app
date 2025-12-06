// src/pages/LandingPage.tsx
import React from 'react';
import HotelSection from '../components/HotelSection.tsx';
import CheckOfferSection from '../components/ChekOfferSection';
import AdvantagesSection from '../components/ProfessionalSection';
import ProfessionalCareSection from '../components/ProfessionalCareSection';
import GroomingSection from '../components/GroomingSection';
import AnimalPsychologySection from '../components/AnimalPsychologySection';
import ReviewsSection from '../components/ReviewsSection';
import InstagramSection from '../components/InstagramSection';

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
      <InstagramSection />
    </>
  );
};

export default LandingPage;
