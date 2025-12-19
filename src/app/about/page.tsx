import type { Metadata } from 'next';
import AboutMeSection from '../../components/AboutMeSection';
import AboutHotelSection from '../../components/AboutHotelSection';
import AdditionalServicesSection from '../../components/AdditionalServicesSection';
import CheckAvailabilitySection from '../../components/CheckAvailabilitySection';
import LetsMeetBeforeSection from '../../components/LetsMeetBeforeSection';
import GallerySection from '../../components/GallerySection';

export const metadata: Metadata = {
  title: 'O Nas - Hotelik "Susełek"',
  description: 'Poznaj nasz hotel dla zwierząt i dowiedz się więcej o naszych usługach oraz dodatkowych udogodnieniach dla Twoich pupili.',
  keywords: 'o nas, hotel dla zwierząt, usługi dodatkowe, opieka nad zwierzętami',
};

export default function AboutPage() {
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
}

