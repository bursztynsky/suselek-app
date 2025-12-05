// src/components/HomeSection.tsx
import React from 'react';
import styles from '../styles/HomeSection.module.scss';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={`${styles.homeContent} container`}>
        <h1 className={styles.homeTitle}>Hotelik dla królików i gryzoni pod Warszawą</h1>
        <p className={styles.homeSubtitle}>
          Profesjonalna opieka nad Twoim królikiem lub gryzeniem w komfortowych warunkach
        </p>
        <div className={styles.homeButtons}>
          <a href="#cennik" className={styles.callToActionButton}>
            Zobacz cennik
          </a>
          <a href="#kontakt" className={styles.secondaryButton}>
            Skontaktuj się
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
