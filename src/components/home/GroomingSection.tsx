// src/components/GroomingSection.tsx
import React from 'react';
import krolik3 from '../../assets/krolik3.png';

const GroomingSection: React.FC = () => {
  return (
    <section id="strzyzenie" className="bg-secondary py-20 px-4">
      <div className="container mx-auto max-w-[var(--width-container)]">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 max-w-2xl">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-[var(--radius-pill)] text-sm font-semibold mb-6">
              Króliki i świnki morskie
            </div>

            <h2 className="font-bold text-3xl md:text-5xl text-primary mb-6">
              <span className="font-light italic">Strzyżenie</span>
            </h2>

            <p className="text-text text-base md:text-lg leading-relaxed">
              Masz królika angorę i ciężko Ci zapanować nad jego futrem? Twój królik ma krótkie
              futro, ale ma tendencje do „zatkań" przewodu pokarmowego? A może świnka długowłosa
              niezupełnie radzi sobie z utrzymaniem higieny? Powodów, dla których strzyżenie jest
              przydatne, jest wiele. Strzyżenie to skuteczny sposób na profilaktykę. Jeśli masz
              wątpliwości – wyjaśnię i pomogę zdecydować, czy Twój pupil potrzebuje strzyżenia.
            </p>
          </div>

          <div className="flex-1 max-w-md">
            <img src={krolik3.src} alt="Królik" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomingSection;
