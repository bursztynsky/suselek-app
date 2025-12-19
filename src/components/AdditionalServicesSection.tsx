import React from 'react';
import about3Image from '../assets/about3.jpg';
import aboutIcon from '../assets/aboutIcon.svg';

const AdditionalServicesSection: React.FC = () => {
  return (
    <section id="dodatkowe-uslugi" className="bg-bg-secondary py-20 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Title */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <img src={aboutIcon} alt="" className="w-16 h-16 mb-4" />
            <h2 className="text-4xl md:text-5xl text-primary text-center md:text-left">
              <span className="font-bold block">Dodatkowa</span>
              <span className="font-light block">oferta</span>
            </h2>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Psychologia zwierząt</h3>
              <p className="text-text mb-2">Pomagam przy łączeniu zwierząt w stado:</p>
              <ul className="list-disc pl-6 text-text space-y-1">
                <li>online (konsultacje)</li>
                <li>osobiście (prowadzenie procesu łączenia)</li>
              </ul>
            </div>

            <div className="bg-primary text-white rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Grooming</h3>
              <p>
                strzyżenie królików
                <br />i świnek morskich
              </p>
            </div>
          </div>

          {/* Column 3: Photo */}
          <div className="flex items-center justify-center">
            <img
              src={about3Image.src}
              alt="Zwierzęta"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
