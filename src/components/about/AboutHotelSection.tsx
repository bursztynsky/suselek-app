import React from 'react';
import aboutHotelImage from '../../assets/aboutHotel.jpg';

const AboutHotelSection: React.FC = () => {
  return (
    <section id="o-hotelu" className="bg-white">
      <div className="w-full h-64 md:h-96 overflow-hidden">
        <img
          src={aboutHotelImage.src}
          alt="Hotelik Susełek"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-light text-primary">
              Hotelik <span className="font-bold">"Susełek"</span>
            </h2>
          </div>

          <div className="flex-1">
            <p className="text-text text-base md:text-lg leading-relaxed mb-6">
              Stworzyłam jedyny taki hotel w Polsce, polecany przez lekarzy weterynarii z całego
              kraju. Hotelik dla gryzoni i królików znajduje się w Nadarzynie pod Warszawą.
            </p>
            <p className="text-text text-base md:text-lg leading-relaxed mb-4">
              <strong>Co oferuję?</strong>
            </p>
            <ul className="list-disc pl-6 text-text text-base md:text-lg leading-relaxed space-y-2">
              <li>Profesjonalną opiekę i karmienie</li>
              <li>Indywidualne podejście do każdego podopiecznego</li>
              <li>Bezpieczne i przyjazne warunki</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHotelSection;
