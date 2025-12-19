// src/components/ProfessionalCareSection.tsx
import React from 'react';
import ServiceSection from './ServiceSection';
import krolik2 from '../../assets/krolik2.png';

const ProfessionalCareSection: React.FC = () => {
  return (
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
  );
};

export default ProfessionalCareSection;
