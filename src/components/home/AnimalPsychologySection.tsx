// src/components/AnimalPsychologySection.tsx
import React from 'react';
import swinka1 from '../../assets/swinka1.png';

const AnimalPsychologySection: React.FC = () => {
  return (
    <section id="psychologia" className="bg-bg-secondary py-20 px-4">
      <div className="container mx-auto max-w-[var(--width-container)]">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 max-w-md">
            <img src={swinka1.src} alt="Świnka morska" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-[var(--radius-pill)] text-sm font-semibold mb-6">
              Króliki i świnki morskie
            </div>

            <h2 className="font-bold text-3xl md:text-5xl text-primary mb-6">
              Psychologia <span className="font-light italic">zwierząt</span>
            </h2>

            <p className="text-text text-base md:text-lg leading-relaxed">
              Boisz się połączyć swoje króliki? Przeraża Cię łączenie szczurów w stado? A może nie
              wiesz, czy dane łączenie ma przyszłość? Pomagam w socjalizacji i łączeniu w stada
              zwierząt tego samego gatunku. Jeśli łączenie wymaga korekty – wspieram online. Jeśli
              wcześniejsze próby się nie powiodły, możesz powierzyć zwierzęta mnie – przeprowadzę
              łączenie osobiście.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimalPsychologySection;
