// src/components/ServiceSection.tsx
import React from 'react';
import { StaticImageData } from 'next/image';

interface ServiceSectionProps {
  id: string;
  badge: string;
  title: string;
  titleBold?: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  titleStyle?: 'bold-italic' | 'italic-bold';
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  badge,
  title,
  titleBold,
  description,
  image,
  imageAlt,
  imagePosition = 'left',
  titleStyle = 'italic-bold',
}) => {
  const isImageLeft = imagePosition === 'left';
  const flexDirection = isImageLeft ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse';

  return (
    <section id={id} className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-[var(--width-container)]">
        <div className={`flex ${flexDirection} items-center gap-8 md:gap-16`}>
          <div className="flex-1 max-w-md">
            <img src={image.src} alt={imageAlt} className="w-full h-auto rounded-2xl" />
          </div>

          <div className="flex-1 max-w-2xl">
            <div className=" bg-bg-secondary inline-block text-text-primary px-6 py-2 rounded-[var(--radius-pill)] text-sm font-semibold mb-6">
              {badge}
            </div>

            <h2
              className={`text-3xl md:text-5xl text-text-primary mb-6 ${
                titleStyle === 'italic-bold' ? 'font-light italic' : 'font-bold'
              }`}
            >
              {titleStyle === 'italic-bold' ? (
                <>
                  {title} {titleBold && <span className="font-bold not-italic">{titleBold}</span>}
                </>
              ) : (
                <span className="font-bold not-italic">{title}</span>
              )}
            </h2>

            <p className="text-black text-base md:text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
