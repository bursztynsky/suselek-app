import type { Metadata } from 'next';
import HotelSection from '../components/home/HotelSection';
import CheckOfferSection from '../components/home/ChekOfferSection';
import AdvantagesSection from '../components/home/ProfessionalSection';
import ServiceSection from '../components/home/ServiceSection';
import ReviewsSection from '../components/home/ReviewsSection';
import GallerySection from '../components/shared/GallerySection';
import krolik2 from '../assets/krolik2.png';
import krolik3 from '../assets/krolik3.png';
import swinka1 from '../assets/swinka1.png';

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
      <ServiceSection
        id="hotel"
        badge="Króliki i gryzonie"
        title="Profesjonalna"
        titleBold="opieka"
        description="Wyjeżdżasz i nie masz z kim zostawić swojego pupila? Masz zwierzaka po zabiegu, którym nie możesz się zaopiekować? Jeśli szukasz profesjonalnej opieki popartej wieloletnim doświadczeniem i chcesz spokojnie odpocząć na urlopie wiedząc, że Twój podopieczny jest w najlepszych rękach - idealnie trafiłeś/aś!"
        image={krolik2}
        imageAlt="Królik"
        imagePosition="left"
        titleStyle="italic-bold"
      />
      <ServiceSection
        id="strzyzenie"
        badge="Króliki i świnki morskie"
        title="Strzyżenie"
        description="Masz królika angorę i ciężko Ci zapanować nad jego futrem? Twój królik ma krótkie futro, ale ma tendencje do 'zatkań' przewodu pokarmowego? A może świnka długowłosa niezupełnie radzi sobie z utrzymaniem higieny? Powodów, dla których strzyżenie jest przydatne, jest wiele. Strzyżenie to skuteczny sposób na profilaktykę. Jeśli masz wątpliwości – wyjaśnię i pomogę zdecydować, czy Twój pupil potrzebuje strzyżenia."
        image={krolik3}
        imageAlt="Królik"
        imagePosition="right"
        titleStyle="bold-italic"
      />
      <ServiceSection
        id="psychologia"
        badge="Króliki i świnki morskie"
        title="Psychologia"
        titleBold="zwierząt"
        description="Boisz się połączyć swoje króliki? Przeraża Cię łączenie szczurów w stado? A może nie wiesz, czy dane łączenie ma przyszłość? Pomagam w socjalizacji i łączeniu w stada zwierząt tego samego gatunku. Jeśli łączenie wymaga korekty – wspieram online. Jeśli wcześniejsze próby się nie powiodły, możesz powierzyć zwierzęta mnie – przeprowadzę łączenie osobiście."
        image={swinka1}
        imageAlt="Świnka morska"
        imagePosition="left"
        titleStyle="italic-bold"
      />
      <ReviewsSection />
      <GallerySection />
    </>
  );
}
