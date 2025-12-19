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
  const flexDirection = isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <section id={id} className="bg-white py-8 md:py-20 px-4">
      <div className="container mx-auto max-w-[var(--width-container)]">
        {/* Mobile: Card layout */}
        <div className="md:hidden overflow-hidden rounded-2xl shadow-sm">
          {/* Image container - 4/7 height */}
          <div className="w-full aspect-[7/4]">
            <img src={image.src} alt={imageAlt} className="w-full h-full object-cover" />
          </div>

          {/* Content container - background #F7F7F5 */}
          <div className="bg-[#F7F7F5] p-6">
            <div className="bg-[#0000001A] inline-block text-[#292929] px-6 py-2 rounded-[var(--radius-pill)] text-sm mb-4">
              {badge}
            </div>

            <h2
              className={`text-3xl text-text-primary mb-4 [orphans:3] [widows:3] ${
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

            <p className="text-[#767676] text-base leading-relaxed [orphans:3] [widows:3]">{description}</p>
          </div>
        </div>

        {/* Desktop: Original layout */}
        <div className={`hidden md:flex ${flexDirection} items-center gap-8 md:gap-16`}>
          <div className="flex-1 max-w-md">
            <img src={image.src} alt={imageAlt} className="w-full h-auto rounded-2xl" />
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="bg-secondary inline-block text-text-primary px-6 py-2 rounded-[var(--radius-pill)] text-sm font-semibold mb-6">
              {badge}
            </div>

            <h2
              className={`text-3xl md:text-5xl text-text-primary mb-6 [orphans:3] [widows:3] ${
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

            <p className="text-black text-base md:text-lg leading-relaxed [orphans:3] [widows:3]">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
