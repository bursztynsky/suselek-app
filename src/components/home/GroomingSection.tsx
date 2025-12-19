// src/components/GroomingSection.tsx
import React from 'react';
import ServiceSection from './ServiceSection';
import krolik3 from '../../assets/krolik3.png';

const GroomingSection: React.FC = () => {
  return (
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
  );
};

export default GroomingSection;
