import React from 'react';
import about4Image from '../assets/about4.jpg';
import aboutIcon2 from '../assets/aboutIcon2.svg';

const LetsMeetBeforeSection: React.FC = () => {
  return (
    <section id="poznajmy-sie" className="bg-bg-secondary">
      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden">
        <img src={about4Image.src} alt="Poznajmy się" className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-[1200px] px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">
          <span className="font-light italic">Poznajmy się</span> przed pobytem
        </h2>

        <p className="text-center text-text text-lg md:text-xl mb-12">
          Rozumiemy, że Wasi podopieczni to Wasz największy skarb. Dlatego:
        </p>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-4">1</div>
            <p className="text-text text-base md:text-lg">
              Możesz umówić się na wizytę zapoznawczą przed pobytem zwierzęcia
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-4">2</div>
            <p className="text-text text-base md:text-lg">
              Pokażę Ci hotelik i odpowiem na wszystkie pytania
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-4">3</div>
            <p className="text-text text-base md:text-lg">
              Jeśli warunki będą odpowiadać – od razu podpiszemy umowę
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md max-w-3xl mx-auto">
          <img src={aboutIcon2} alt="" className="w-12 h-12 flex-shrink-0" />
          <p className="text-text text-base">
            <strong>Prośba:</strong> hotelik mieści się w naszym domu rodzinnym, dlatego proszę nie
            odwiedzajcie nas bez zapowiedzi. Pracujemy i żyjemy tu całą pięcioosobową rodziną.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LetsMeetBeforeSection;
