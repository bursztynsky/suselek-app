// src/components/CheckOfferSection.tsx
import React from 'react';
import Button from '../shared/Button';

const CheckOfferSection: React.FC = () => {
  return (
    <section id="check-offer" className="bg-secondary py-12 md:py-12 px-4">
      <div className="max-w-[var(--width-container)] mx-auto text-center flex flex-col">
        <h1 className="text-text-primary text-2xl md:text-5xl leading-tight my-6 md:my-8 font-light italic">
          <span className="md:not-italic md:font-light">Dbamy o&nbsp;to,</span>{' '}
          <span className="md:font-bold md:not-italic">by każdy gość czuł się u&nbsp;nas</span>{' '}
          <span className="md:not-italic md:font-light">jak w</span>
          <br className="hidden md:block" />
          <span className="md:font-bold md:not-italic"> domu</span>{' '}
          <span className="md:not-italic md:font-light">– bez względu na&nbsp;to,</span>{' '}
          <span className="md:font-bold md:not-italic">czy przyjeżdża na</span>
          <br className="hidden md:block" />
          <span className="md:not-italic md:font-light"> weekend,</span>{' '}
          <span className="md:font-bold md:not-italic">czy na&nbsp;dłuższy</span>{' '}
          <span className="md:not-italic md:font-light">urlop</span>
        </h1>
        <div className="flex justify-center mt-8 md:mt-0">
          <Button
            href="#cennik"
            variant="primary"
            className="w-full md:w-auto md:max-w-[var(--width-btn-max)]"
          >
            Poznaj ofertę
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CheckOfferSection;
