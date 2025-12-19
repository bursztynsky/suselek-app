import React from 'react';
import krolik1 from '../../assets/krolik1.png';
import NextImage from 'next/image';
import aboutHotelShapeHeart from '../../assets/aboutHotelShapeHeart.svg';
import aboutHotelCol1 from '../../assets/aboutHotelCol1.svg';
import aboutHotelCol2 from '../../assets/aboutHotelCol2.svg';
import aboutHotelCol3 from '../../assets/aboutHotelCol3.svg';
import aboutHotelCol1Mobile from '../../assets/aboutHotelCol1Mobile.svg';
import aboutHotelCol2Mobile from '../../assets/aboutHotelCol2Mobile.svg';
import aboutHotelCol3Mobile from '../../assets/aboutHotelCol3Mobile.svg';
import Button from '../shared/Button';

const HotelSection: React.FC = () => {
  return (
    <section
      id="hotel"
      className="relative bg-primary text-white overflow-hidden pt-32 pb-24 px-4 md:pt-36 md:pb-32"
    >
      {/* Background decoration */}
      <NextImage
        src={aboutHotelShapeHeart}
        alt="Ikonka serca"
        className="absolute w-[400px] h-[350px] md:w-[700px] md:h-[600px] -top-10 -right-20 md:right-0 pointer-events-none"
      />

      <div className="max-w-[var(--width-container)] mx-auto relative z-10">
        {/* Content and Image */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 max-w-[700px] text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Hotelik dla{' '}
              <span className="font-thin italic">
                królików i<br />
                gryzoni
              </span>{' '}
              pod Warszawą
            </h1>
            <p className="text-lg leading-snug mb-8">
              W hotelu "Susełek" łączymy doświadczenie weterynaryjne z domową atmosferą. <br />{' '}
              Twoje zwierzę zamieszka z nami – na parterze naszego domu, w przestrzeni stworzonej
              specjalnie z myślą o jego komforcie.
            </p>
            <Button href="#cennik" variant="secondary">
              Poznaj ofertę
            </Button>
          </div>

          {/* Image */}
          <div className="w-full max-w-[450px]">
            <img src={krolik1.src} alt="Królik" className="w-full" />
          </div>
        </div>

        {/* Three columns section - Desktop */}
        <div className="hidden md:block mt-24">
          <div className="flex flex-row justify-center gap-1">
            <div className="flex-1 text-center relative">
              <NextImage src={aboutHotelCol1} alt="Blisko natury" className="w-full h-auto" />
            </div>
            <div className="flex-1 text-center relative">
              <NextImage src={aboutHotelCol2} alt="Bez stresu" className="w-full h-auto" />
            </div>
            <div className="flex-1 text-center relative">
              <NextImage src={aboutHotelCol3} alt="Bezpiecznie" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Three columns section - Mobile */}
        <div className="block md:hidden mt-16">
          <div className="flex flex-row flex-nowrap justify-between gap-1 w-full">
            <div className="flex-1 text-center relative">
              <NextImage src={aboutHotelCol1Mobile} alt="Blisko natury" className="w-full h-auto" />
            </div>
            <div className="flex-1 text-center relative">
              <NextImage src={aboutHotelCol2Mobile} alt="Bez stresu" className="w-full h-auto" />
            </div>
            <div className="flex-1 text-center relative">
              <NextImage src={aboutHotelCol3Mobile} alt="Bezpiecznie" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
