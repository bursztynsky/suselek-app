'use client';

// src/components/ReviewsSection.tsx
import React, { useState } from 'react';
import starIcon from '../../assets/star.svg';
import buttonLeft from '../../assets/button-left.svg';
import grassBackground from '../../assets/grass.png';

const mockReviews = [
  {
    id: 1,
    rating: 5,
    title: 'Świetna opieka!',
    text: 'Bardzo dobre warunki, profesjonalne przyjęcie królika i miska smaczków na dzień dobry! Pierwszy raz oddaliśmy Królika do hotelu a nie do znajomych i wszystko poszło bardzo gładko, Królik nie był zestresowany po pobycie, bardzo polecam i najpewniej w razie potrzeby jeszcze tutaj z nią wrócimy!',
    author: 'Anna Kowalska',
  },
  {
    id: 2,
    rating: 5,
    title: 'Polecam z całego serca',
    text: 'Profesjonalna obsługa i wspaniała opieka nad naszą świnką morską. Widać, że właścicielka kocha zwierzęta i dba o każdy szczegół. Nasza świnka wróciła szczęśliwa i zadbana!',
    author: 'Jan Nowak',
  },
  {
    id: 3,
    rating: 5,
    title: 'Najlepszy hotel dla królików',
    text: 'Pierwszy raz zostawialiśmy naszego królika w hotelu i byliśmy bardzo zestresowani. Jednak wszystkie obawy okazały się niepotrzebne - profesjonalna opieka, czyste warunki i widać że zwierzęta są tam dobrze traktowane.',
    author: 'Maria Wiśniewska',
  },
];

const ReviewsSection: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex(prevIndex =>
        prevIndex === 0 ? mockReviews.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const handleNextReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex(prevIndex =>
        prevIndex === mockReviews.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const currentReview = mockReviews[currentReviewIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <img key={index} src={starIcon} alt="star" className="w-8 h-8" />
    ));
  };

  return (
    <section id="reviews" className="bg-primary py-20 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <div
          className="relative bg-white rounded-3xl p-8 md:p-16 shadow-xl bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${grassBackground})` }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <div key={currentReview.id} className="text-center">
              <div className="flex justify-center gap-2 mb-6">
                {renderStars(currentReview.rating)}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {currentReview.title}
              </h3>

              <p className="text-text text-base md:text-lg leading-relaxed mb-6">
                {currentReview.text}
              </p>

              <p className="text-text-light font-semibold">{currentReview.author}</p>
            </div>
          </div>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg z-20"
            onClick={handlePrevReview}
            aria-label="Previous review"
          >
            <img src={buttonLeft} alt="Previous" className="w-6 h-6" />
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg z-20 rotate-180"
            onClick={handleNextReview}
            aria-label="Next review"
          >
            <img src={buttonLeft} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
