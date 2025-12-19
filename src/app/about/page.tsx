import type { Metadata } from 'next';
import AboutMeSection from '../../components/about/AboutMeSection';
import AboutHotelSection from '../../components/about/AboutHotelSection';
import AdditionalServicesSection from '../../components/about/AdditionalServicesSection';
import CheckAvailabilitySection from '../../components/about/CheckAvailabilitySection';
import LetsMeetBeforeSection from '../../components/about/LetsMeetBeforeSection';
import GallerySection from '../../components/shared/GallerySection';

export const metadata: Metadata = {
  title: 'O Nas - Hotelik "Susełek"',
  description:
    'Poznaj nasz hotel dla zwierząt i dowiedz się więcej o naszych usługach oraz dodatkowych udogodnieniach dla Twoich pupili. Profesjonalna opieka nad królikami, świnkami morskimi i gryzoniami.',
  keywords: [
    'o nas',
    'hotel dla zwierząt',
    'usługi dodatkowe',
    'opieka nad zwierzętami',
    'grooming',
    'strzyżenie',
    'psychologia zwierząt',
  ],
  openGraph: {
    title: 'O Nas - Hotelik "Susełek"',
    description:
      'Poznaj nasz hotel dla zwierząt i dowiedz się więcej o naszych usługach oraz dodatkowych udogodnieniach dla Twoich pupili.',
    type: 'website',
  },
  alternates: {
    canonical: '/about',
  },
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
