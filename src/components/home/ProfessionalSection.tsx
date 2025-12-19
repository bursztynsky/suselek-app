import React from 'react';
import houseIcon from '../../assets/house.svg';
import leafesIcon from '../../assets/leafes.svg';
import heartIcon from '../../assets/heart.svg';

interface FeatureCardProps {
  icon: string;
  alt: string;
  text: string | React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, alt, text }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 mb-6 relative">
      <img src={icon} alt={alt} className="w-full h-full object-contain" />
    </div>
    <p className="text-text-secondary text-sm font-normal leading-relaxed">{text}</p>
  </div>
);

const ProfessionalSection: React.FC = () => {
  const features = [
    {
      icon: houseIcon.src,
      alt: 'Dom',
      text: (
        <>
          Przestronne klatki i zabudowane, sterylne kojce.
          <br />
          Wolnostojące boksy dla świnek morskich.
          <br />
          Luksusowe kojce VIP dla najbardziej wymagających
        </>
      ),
    },
    {
      icon: leafesIcon.src,
      alt: 'Natura',
      text: 'Zwierzęta zamieszkają ze mną – mam dla nich wydzielony i odpowiednio przygotowany cały parter naszego domu w Nadarzynie pod Warszawą.',
    },
    {
      icon: heartIcon.src,
      alt: 'Opieka',
      text: 'Opieka po zabiegach, podawanie leków, szybkie reagowanie na pierwsze objawy problemów zdrowotnych',
    },
  ];

  return (
    <section id="professional" className="bg-secondary py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-[var(--width-container)]">
        <div className="bg-bg-secondary rounded-[var(--radius-xl)] p-8 md:p-16">
          <h2 className="font-bold text-3xl md:text-5xl text-center text-text-primary mb-12">
            Profesjonalnie, <span className="font-light italic">domowo</span>, w otoczeniu natury
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
