// src/components/ReviewsSection.tsx
import React, { useState } from 'react';
import styles from '../styles/ReviewsSection.module.scss';
import starIcon from '../assets/star.svg';
import buttonLeft from '../assets/button-left.svg';

// Mock reviews data - this will be replaced with Google Maps API data later
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

  // Generate star icons based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <img key={index} src={starIcon} alt="star" className={styles.starIcon} />
    ));
  };

  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className={`${styles.reviewsContainer} container`}>
        <div className={styles.reviewCard}>
          <div key={currentReview.id} className={styles.reviewContent}>
            <div className={styles.reviewStars}>{renderStars(currentReview.rating)}</div>

            <h3 className={styles.reviewTitle}>{currentReview.title}</h3>

            <p className={styles.reviewText}>{currentReview.text}</p>

            <p className={styles.reviewAuthor}>{currentReview.author}</p>
          </div>

          <button
            className={`${styles.navigationButton} ${styles.buttonLeft}`}
            onClick={handlePrevReview}
            aria-label="Previous review"
          >
            <img src={buttonLeft} alt="Previous" />
          </button>

          <button
            className={`${styles.navigationButton} ${styles.buttonRight}`}
            onClick={handleNextReview}
            aria-label="Next review"
          >
            <img src={buttonLeft} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
