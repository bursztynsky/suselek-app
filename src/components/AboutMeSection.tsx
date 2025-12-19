import React from 'react';
import aboutMeImage from '../assets/aboutMe.png';

const AboutMeSection: React.FC = () => {
  return (
    <section id="o-mnie" className="bg-bg-secondary py-32 px-4">
      <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 max-w-md">
          <img
            src={aboutMeImage.src}
            alt="Aleksandra Bursztyńska-Kostrzewa"
            className="w-full h-auto rounded-3xl shadow-xl"
          />
        </div>
        <div className="flex-1 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Poznajmy się</h2>
          <div className="text-text text-base md:text-lg leading-relaxed space-y-4">
            <p>Witam! Nazywam się Aleksandra Bursztyńska-Kostrzewa.</p>
            <p>
              Jestem technikiem weterynarii z ponad 6-letnim doświadczeniem w warszawskich
              przychodniach:
            </p>
            <ul className="list-disc pl-6 space-y-2">
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
          <a href="#sprawdz-dostepnosc" className="inline-block mt-8 font-semibold text-lg py-4 px-10 rounded-full bg-primary text-white shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg">
            Sprawdź dostępność miejsc
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
