import type { Metadata } from 'next';
import HotelSection from '../components/home/HotelSection';
import CheckOfferSection from '../components/home/ChekOfferSection';
import AdvantagesSection from '../components/home/ProfessionalSection';
import ProfessionalCareSection from '../components/home/ProfessionalCareSection';
import GroomingSection from '../components/home/GroomingSection';
import AnimalPsychologySection from '../components/home/AnimalPsychologySection';
import ReviewsSection from '../components/home/ReviewsSection';
import GallerySection from '../components/shared/GallerySection';

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
