// src/components/CheckOfferSection.tsx
import React from 'react';

const CheckOfferSection: React.FC = () => {
  return (
    <section id="check-offer" className="bg-color-secondary py-20 px-4">
      <div className="max-w-[900px] mx-auto text-center">
        <h1 className="text-[#292929] text-3xl md:text-5xl leading-tight mb-8">
          <span className="font-light italic">Dbamy o to,</span>{' '}
          <span className="font-bold">by każdy gość czuł się u nas</span>{' '}
          <span className="font-light italic">jak w</span>
          <br />
          <span className="font-bold">domu</span>{' '}
          <span className="font-light italic">– bez względu na to,</span>{' '}
          <span className="font-bold">czy przyjeżdża na</span>
          <br />
          <span className="font-light italic">weekend,</span>{' '}
          <span className="font-bold">czy na dłuższy</span>{' '}
          <span className="font-light italic">urlop</span>
        </h1>
        <a
          href="#cennik"
          className="inline-block text-[20px] font-normal py-4 px-10 rounded-full bg-[#3e7979] text-white shadow-md hover:shadow-lg transition-shadow"
        >
          Poznaj ofertę
        </a>
      </div>
    </section>
  );
};

export default CheckOfferSection;
