import React from 'react';
import about4Image from '../../assets/about4.jpg';
import aboutIcon2 from '../../assets/aboutIcon2.svg';

const LetsMeetBeforeSection: React.FC = () => {
  return (
    <section id="poznajmy-sie" className="bg-secondary">
      {/* Hero Image */}
      <div className="w-full h-[400px] overflow-hidden">
        <img src={about4Image.src} alt="Poznajmy się" className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-[var(--width-container)] px-4 py-20">
        <h2 className="text-[48px] md:text-[64px] font-light italic text-center text-text-primary mb-6 leading-tight">
          <span className="font-bold">Poznajmy się</span> przed pobytem
        </h2>

        <p className="text-center text-text-primary text-lg md:text-xl mb-12 leading-normal">
          Rozumiemy, że Wasi podopieczni to Wasz największy skarb. Dlatego:
        </p>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <div className="bg-[#F8F6F2] rounded-[var(--radius-xl)] p-8 flex flex-col justify-between min-h-[260px]">
            <div className="text-[64px] font-[900] italic text-text-primary leading-none">1</div>
            <p className="text-[#767676] text-[16px] font-normal leading-normal mt-auto">
              Możesz umówić się na wizytę zapoznawczą przed pobytem zwierzęcia
            </p>
          </div>

          <div className="bg-[#F8F6F2] rounded-[var(--radius-xl)] p-8 flex flex-col justify-between min-h-[260px]">
            <div className="text-[64px] font-[900] italic text-text-primary leading-none">2</div>
            <p className="text-[#767676] text-[16px] font-normal leading-normal mt-auto">
              Pokażę Ci hotelik i odpowiem na wszystkie pytania
            </p>
          </div>

          <div className="bg-[#F8F6F2] rounded-[var(--radius-xl)] p-8 flex flex-col justify-between min-h-[260px]">
            <div className="text-[64px] font-[900] italic text-text-primary leading-none">3</div>
            <p className="text-[#767676] text-[16px] font-normal leading-normal mt-auto">
              Jeśli warunki będą odpowiadać – od razu podpiszemy umowę
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-start gap-4 w-full text-left">
          <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0 mt-0.5" />
          <p className="text-[#767676] text-[14px] leading-normal mt-1">
            <strong>Prośba:</strong> hotelik mieści się w naszym domu rodzinnym, dlatego proszę nie
            odwiedzajcie nas bez zapowiedzi. Pracujemy i żyjemy tu całą pięcioosobową rodziną.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LetsMeetBeforeSection;
