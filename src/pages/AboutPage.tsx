import React from 'react';
import AboutMeSection from '../components/AboutMeSection';
import AboutHotelSection from '../components/AboutHotelSection';
import AdditionalServicesSection from '../components/AdditionalServicesSection';
import CheckAvailabilitySection from '../components/CheckAvailabilitySection';
import LetsMeetBeforeSection from '../components/LetsMeetBeforeSection';
import GallerySection from '../components/GallerySection';

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutMeSection />
      <AboutHotelSection />
      <AdditionalServicesSection />
      <CheckAvailabilitySection />
      <LetsMeetBeforeSection />
      <GallerySection />
    </>
  );
};
export default AboutPage;
