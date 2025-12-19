// src/components/HomeSection.tsx
import React from 'react';
import krolik1 from '../assets/krolik1.png';
import shape4 from '../assets/shape4.svg';

const HotelSection: React.FC = () => {
  return (
    <section
      id="hotel"
      className="relative bg-primary text-white text-center overflow-hidden mt-0 pt-[120px] pb-24 px-4 md:pt-[140px] md:pb-32"
    >
      <img
        src={shape4}
        alt=""
        className="absolute w-[800px] h-[600px] opacity-100 -top-4 left-[45rem] pointer-events-none z-0"
      />
      <div className="container max-w-[1250px] mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 max-w-[700px] md:text-left">
          <h1 className="font-bold text-4xl md:text-[64px] leading-[100%] mb-6">
            Hotelik dla <span className="font-light italic">królików i gryzoni</span> pod Warszawą
          </h1>
          <p className="font-normal text-lg md:text-2xl leading-[100%] mb-8">
            W hotelu "Susełek" łączymy doświadczenie weterynaryjne z domową atmosferą. Twoje zwierzę
            zamieszka z nami – na parterze naszego domu, w przestrzeni stworzonej specjalnie z myślą
            o jego komforcie.
          </p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="#cennik"
              className="inline-block font-semibold text-lg py-4 px-10 rounded-full bg-white text-primary shadow-md transition-all duration-300 hover:bg-white/95 hover:shadow-lg"
            >
              Poznaj ofertę
            </a>
          </div>
        </div>
        <div className="flex-none max-w-[618px] md:max-w-[450px] w-full">
          <img src={krolik1.src} alt="Królik" className="w-full h-auto block" />
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
