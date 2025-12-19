import React from 'react';
import Button from '../shared/Button';

const CheckAvailabilitySection: React.FC = () => {
  return (
    <section id="sprawdz-dostepnosc" className="bg-secondary py-20 px-4">
      <div className="container mx-auto max-w-[900px]">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-8">
            Zwierzęta są w moim życiu od zawsze. Prywatnie mam 3 szynszyle, 2 psy, 1 chomika.
            Dlatego <span className="font-light italic">wasze zwierzęta</span> traktuję{' '}
            <span className="font-light italic">jak własne.</span>
          </h2>
          <div className="flex justify-center">
            <Button href="#kontakt" variant="primary" className="font-semibold text-lg">
              Sprawdź dostępność
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckAvailabilitySection;
