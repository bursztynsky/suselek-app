// src/components/CheckOfferSection.tsx
import React from 'react';

const CheckOfferSection: React.FC = () => {
  return (
    <section id="check-offer" className="bg-bg-secondary py-20 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <div className="text-center max-w-[900px] mx-auto">
          <h1 className="font-bold text-3xl md:text-5xl leading-tight mb-8 text-primary">
            Dbamy <span className="font-light italic">o to, by każdy gość czuł się u nas </span>jak
            w domu <span className="font-light italic">– bez względu na to, czy przyjeżdża </span>{' '}
            na weekend, <span className="font-light italic">czy </span>na dłuższy urlop
          </h1>
          <div className="flex justify-center">
            <a
              href="#cennik"
              className="inline-block font-semibold text-lg py-4 px-10 rounded-full bg-primary text-white shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              Poznaj ofertę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOfferSection;
