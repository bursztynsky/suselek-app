import type { Metadata } from 'next';
import HotelSection from '../components/HotelSection';
import CheckOfferSection from '../components/ChekOfferSection';
import AdvantagesSection from '../components/ProfessionalSection';
import ProfessionalCareSection from '../components/ProfessionalCareSection';
import GroomingSection from '../components/GroomingSection';
import AnimalPsychologySection from '../components/AnimalPsychologySection';
import ReviewsSection from '../components/ReviewsSection';
import GallerySection from '../components/GallerySection';

export const metadata: Metadata = {
  title: 'Hotelik "Susełek" - Hotel dla Zwierząt',
  description:
    'Profesjonalny hotel dla zwierząt oferujący opiekę, grooming i psychologię zwierząt. Zapewniamy najwyższą jakość usług dla Twoich pupili.',
  keywords:
    'hotel dla zwierząt, opieka nad zwierzętami, grooming, pielęgnacja zwierząt, psychologia zwierząt',
};

export default function HomePage() {
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
}
