// src/components/CheckOfferSection.tsx
import React from 'react';
import styles from '../styles/CheckOfferSection.module.scss';

const CheckOfferSection: React.FC = () => {
  return (
    <section id="check-offer" className={styles.checkOfferSection}>
      <div className={`${styles.checkOfferContainer} container`}>
        <div className={styles.checkOfferContent}>
          <h1 className={styles.checkOfferTitle}>
            Dbamy <span>o to, by każdy gość czuł się u nas </span>jak w domu{' '}
            <span>– bez względu na to, czy przyjeżdża </span> na weekend, <span>czy </span>na
            dłuższy urlop
          </h1>
          <div className={styles.checkOfferButtons}>
            <a href="#cennik" className={styles.callToActionButton}>
              Poznaj ofertę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOfferSection;
