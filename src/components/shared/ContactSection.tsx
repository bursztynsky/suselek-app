// src/components/ContactSection.tsx
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
          Skontaktuj się z nami
        </h2>
        <p className="text-center text-text text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Masz pytania? Chętnie na nie odpowiemy i pomożemy w wyborze najlepszej opcji dla Twojego
          pupila
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4 p-6 bg-bg-secondary rounded-2xl">
            <div className="text-4xl">📍</div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Adres</h3>
              <p className="text-text">ul. Przykładowa 123</p>
              <p className="text-text">00-000 Warszawa</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-bg-secondary rounded-2xl">
            <div className="text-4xl">📧</div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <p className="text-text">kontakt@suselek.pl</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-bg-secondary rounded-2xl">
            <div className="text-4xl">📞</div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Telefon</h3>
              <p className="text-text mb-4">Zadzwoń do nas:</p>
              <a
                href="tel:+48123456789"
                className="inline-flex items-center py-3 px-6 rounded-full border border-primary text-primary text-lg no-underline hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                <span className="leading-none">+48 123 456 789</span>
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-bg-secondary rounded-2xl">
            <div className="text-4xl">⏰</div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Godziny otwarcia</h3>
              <p className="text-text">Poniedziałek - Piątek: 8:00 - 20:00</p>
              <p className="text-text">Sobota - Niedziela: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
