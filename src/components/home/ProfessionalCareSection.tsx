// src/components/ProfessionalCareSection.tsx
import React from 'react';
import krolik2 from '../../assets/krolik2.png';

const ProfessionalCareSection: React.FC = () => {
  return (
    <section id="hotel" className="bg-bg-secondary py-20 px-4">
      <div className="container mx-auto max-w-[var(--width-container)]">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 max-w-md">
            <img src={krolik2.src} alt="Królik" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-[var(--radius-pill)] text-sm font-semibold mb-6">
              Króliki i gryzonie
            </div>

            <h2 className="font-bold text-3xl md:text-5xl text-primary mb-6">
              Profesjonalna <span className="font-light italic">opieka</span>
            </h2>

            <p className="text-text text-base md:text-lg leading-relaxed">
              Wyjeżdżasz i nie masz z kim zostawić swojego pupila? Masz zwierzaka po zabiegu, którym
              nie możesz się zaopiekować? Jeśli szukasz profesjonalnej opieki popartej wieloletnim
              doświadczeniem i chcesz spokojnie odpocząć na urlopie wiedząc, że Twój podopieczny
              jest w najlepszych rękach - idealnie trafiłeś/aś!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCareSection;
