import React from 'react';
import krolik1 from '../../assets/krolik1.png';
import shape4 from '../../assets/shape4.svg';
import NextImage from 'next/image';

const HotelSection: React.FC = () => {
  return (
    <section
      id="hotel"
      className="relative bg-primary text-white overflow-hidden pt-32 pb-24 px-4 md:pt-36 md:pb-32"
    >
      {/* Background decoration */}
      <NextImage
        src={shape4}
        alt="Ikonka serca"
        className="absolute w-[400px] h-[350px] md:w-[600px] md:h-[500px] top-0 -right-20 md:right-0 opacity-30 pointer-events-none"
      />

      <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Content */}
        <div className="flex-1 max-w-[700px] text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hotelik dla <span className="font-light italic">królików i gryzoni</span> pod Warszawą
          </h1>
          <p className="text-lg md:text-2xl leading-snug mb-8">
            W hotelu "Susełek" łączymy doświadczenie weterynaryjne z domową atmosferą. Twoje zwierzę
            zamieszka z nami – na parterze naszego domu, w przestrzeni stworzonej specjalnie z myślą
            o jego komforcie.
          </p>
          <a
            href="#cennik"
            className="inline-block text-lg font-semibold py-4 px-10 rounded-full bg-white text-primary shadow-md hover:shadow-lg transition-shadow"
          >
            Poznaj ofertę
          </a>
        </div>

        {/* Image */}
        <div className="w-full max-w-[450px]">
          <img src={krolik1.src} alt="Królik" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
