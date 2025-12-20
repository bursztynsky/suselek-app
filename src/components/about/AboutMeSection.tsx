import React from 'react';
import aboutMeImage from '../../assets/aboutMe.png';
import Button from '../shared/Button';

const AboutMeSection: React.FC = () => {
  return (
    <section id="o-mnie" className="bg-color-secondary py-32 px-4">
      <div className="container mx-auto max-w-[var(--width-container)] flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 md:flex-[1_1_50%] max-w-[600px]">
          <img
            src={aboutMeImage.src}
            alt="Aleksandra Bursztyńska-Kostrzewa"
            className="w-[588px] h-[633px] rounded-[var(--radius-xl)] shadow-xl object-cover"
          />
        </div>
        <div className="flex-1 md:flex-[1_1_50%] max-w-2xl">
          <h2 className="text-[64px] font-light italic text-text-primary mb-8">Poznajmy się</h2>
          <div className="text-text-primary text-[16px] font-normal leading-relaxed space-y-1">
            <p>Witam! Nazywam się Aleksandra Bursztyńska-Kostrzewa.</p>
            <p>
              Jestem technikiem weterynarii z ponad 6-letnim doświadczeniem w warszawskich
              przychodniach:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Oaza</li>
              <li>Anima</li>
              <li>Medicavet</li>
              <li>Pulsvet</li>
            </ul>
            <p>Swoją wiedzę poszerzałam na wielu kursach i w szkołach.</p>
            <p>
              Od 19 lat specjalizuję się w tym, co kocham najbardziej – opiece nad królikami i
              gryzoniami.
            </p>
          </div>
          <Button
            href="#sprawdz-dostepnosc"
            variant="primary"
            className="mt-8 font-semibold text-[20px]"
          >
            Sprawdź dostępność miejsc
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
