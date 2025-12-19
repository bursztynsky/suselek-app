// src/components/ProfessionalSection.tsx
import React from 'react';
import houseIcon from '../../assets/house.svg';
import leafesIcon from '../../assets/leafes.svg';
import heartIcon from '../../assets/heart.svg';

const ProfessionalSection: React.FC = () => {
  return (
    <section id="professional" className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <div className="bg-bg-secondary rounded-3xl p-8 md:p-16">
          <h2 className="font-bold text-3xl md:text-5xl text-center text-primary mb-12">
            Profesjonalnie, <span className="font-light italic">domowo</span>, w otoczeniu natury
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 w-16 h-16 flex items-center justify-center">
                <img src={houseIcon} alt="Dom" className="w-full h-full" />
              </div>
              <p className="text-text text-base md:text-lg leading-relaxed">
                Przestronne klatki i zabudowane, sterylne kojce. Wolnostojące boksy dla świnek
                morskich. Luksusowe kojce VIP dla najbardziej wymagających
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 w-16 h-16 flex items-center justify-center">
                <img src={leafesIcon} alt="Natura" className="w-full h-full" />
              </div>
              <p className="text-text text-base md:text-lg leading-relaxed">
                Zwierzęta zamieszkają ze mną – mam dla nich wydzielony i odpowiednio przygotowany
                cały parter naszego domu w Nadarzynie pod Warszawą.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 w-16 h-16 flex items-center justify-center">
                <img src={heartIcon} alt="Opieka" className="w-full h-full" />
              </div>
              <p className="text-text text-base md:text-lg leading-relaxed">
                Opieka po zabiegach, podawanie leków, szybkie reagowanie na pierwsze objawy
                problemów zdrowotnych
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
