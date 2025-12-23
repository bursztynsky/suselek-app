import React from 'react';
import aboutHotelImage from '../../assets/aboutHotel.jpg';

const AboutHotelSection: React.FC = () => {
  return (
    <section id="o-hotelu" className="bg-secondary">
      <div className="w-full h-[400px] overflow-hidden">
        <img
          src={aboutHotelImage.src}
          alt="Hotelik Susełek"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 15%' }}
        />
      </div>

      <div className="container mx-auto max-w-[var(--width-container)] px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="text-[64px] font-light italic text-text-primary leading-none">
              Hotelik <span className="font-bold">"Susełek"</span>
            </h2>
          </div>

          <div className="flex-[1.4]">
            <p className="text-text-primary text-base md:text-lg leading-normal mb-6">
              Stworzyłam jedyny taki hotel w Polsce, polecany przez lekarzy weterynarii z całego
              kraju. <br />
              Hotelik dla gryzoni i królików znajduje się w Nadarzynie pod Warszawą.
            </p>
            <p className="text-text-primary text-base md:text-lg leading-normal mb-4">
              <strong>Co oferuję?</strong>
            </p>
            <ul className="list-disc pl-6 text-text-primary text-base md:text-lg leading-normal space-y-2">
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
