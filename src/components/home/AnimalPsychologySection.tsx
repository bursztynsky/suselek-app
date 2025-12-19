// src/components/AnimalPsychologySection.tsx
import React from 'react';
import ServiceSection from './ServiceSection';
import swinka1 from '../../assets/swinka1.png';

const AnimalPsychologySection: React.FC = () => {
  return (
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
  );
};

export default AnimalPsychologySection;
