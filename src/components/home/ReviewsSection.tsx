'use client';

// src/components/ReviewsSection.tsx
import React, { useState } from 'react';
import starIcon from '../../assets/star.svg';
import buttonLeft from '../../assets/button-left.svg';
import reviewsButton2 from '../../assets/reviewsButton2.svg';
import grassBackground from '../../assets/grass.png';

interface Review {
  id: string | number;
  rating: number;
  title: string;
  text: string;
  author: string;
  link: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const MAX_TEXT_LENGTH = 250;

  // If no reviews, show message
  if (!reviews || reviews.length === 0) {
    return (
      <section
        id="reviews"
        className="bg-white md:bg-white py-8 md:py-20 px-4 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${grassBackground.src})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="container mx-auto max-w-[var(--width-container)]">
          <div className="relative rounded-3xl md:p-16">
            <div className="relative bg-secondary rounded-3xl px-4 py-8 md:p-12 shadow-xl max-w-[240px] md:max-w-5xl mx-auto">
              <div className="text-center py-12">
                <p className="text-black text-[16px] md:text-[20px]">Brak dostępnych recenzji</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handlePrevReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFadeIn(false);
    setTimeout(() => {
      setCurrentReviewIndex(prevIndex => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
      setFadeIn(true);
      setIsAnimating(false);
    }, 300);
  };

  const handleNextReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFadeIn(false);
    setTimeout(() => {
      setCurrentReviewIndex(prevIndex => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
      setFadeIn(true);
      setIsAnimating(false);
    }, 300);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <img key={index} src={starIcon.src} alt="star" className="w-[19px] h-[19px] md:w-6 md:h-6" />
    ));
  };

  const currentReview = reviews[currentReviewIndex];
  const isTextTruncated = currentReview.text.length > MAX_TEXT_LENGTH;
  const displayText = isTextTruncated
    ? currentReview.text.slice(0, MAX_TEXT_LENGTH) + '...'
    : currentReview.text;

  return (
    <section
      id="reviews"
      className="bg-white md:bg-white py-8 md:py-20 px-4 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${grassBackground.src})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto max-w-[var(--width-container)]">
        {/* Grass background container - only on desktop */}
        <div className="relative rounded-3xl md:p-16">
          {/* Desktop grass background - applied via Tailwind */}
          <div
            className="hidden md:block absolute inset-0 rounded-3xl bg-no-repeat bg-cover bg-center -z-10"
            style={{ backgroundImage: `url(${grassBackground.src})` }}
          ></div>
          {/* White rounded card with content */}
          <div className="relative bg-secondary rounded-3xl px-4 py-8 md:p-12 shadow-xl max-w-[240px] md:max-w-5xl mx-auto">
            <div
              key={currentReview.id}
              className={`text-center transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="flex justify-center gap-2 mb-4 md:mb-6">
                {renderStars(currentReview.rating)}
              </div>

              <h3 className="text-[16px] md:text-[24px] font-normal text-black mb-3 md:mb-4 h-[48px] md:h-[32px] flex items-center justify-center">
                {currentReview.title}
              </h3>

              {/* Fixed height container for text to prevent size changes */}
              <div className="mb-6 md:mb-8 h-[220px] md:h-[140px] flex flex-col items-center justify-start">
                <p className="text-black text-[14px] font-normal leading-relaxed max-w-[600px] mx-auto">
                  {displayText}
                </p>
                {isTextTruncated && (
                  <a
                    href={currentReview.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-[14px] font-normal mt-2 hover:underline"
                  >
                    Czytaj więcej
                  </a>
                )}
              </div>

              <p className="text-black text-[12px] md:text-[14px] font-normal h-[20px] flex items-center justify-center">
                {currentReview.author}
              </p>
            </div>

            {/* Desktop navigation buttons inside white card */}
            <button
              className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center transition-all hover:scale-110 z-20"
              onClick={handlePrevReview}
              aria-label="Previous review"
            >
              <img src={buttonLeft.src} alt="Previous" className="w-6 h-6" />
            </button>

            <button
              className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center transition-all hover:scale-110 z-20 rotate-180"
              onClick={handleNextReview}
              aria-label="Next review"
            >
              <img src={buttonLeft.src} alt="Next" className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile navigation buttons - positioned on section background */}
          <button
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-all hover:scale-110 z-20 rotate-180"
            onClick={handlePrevReview}
            aria-label="Previous review"
          >
            <img src={reviewsButton2.src} alt="Previous" className="w-10 h-10" />
          </button>

          <button
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-all hover:scale-110 z-20"
            onClick={handleNextReview}
            aria-label="Next review"
          >
            <img src={reviewsButton2.src} alt="Next" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
