// src/components/GroomingSection.tsx
import React from 'react';
import styles from '../styles/GroomingSection.module.scss';
import krolik3 from '../assets/krolik3.png';

const GroomingSection: React.FC = () => {
  return (
    <section id="strzyzenie" className={styles.groomingSection}>
      <div className={`${styles.groomingContainer} container`}>
        <div className={styles.groomingContent}>
          <div className={styles.groomingText}>
            <div className={styles.categoryBadge}>Króliki i świnki morskie</div>

            <h2 className={styles.groomingTitle}>
              <span>Strzyżenie</span>
            </h2>

            <p className={styles.groomingDescription}>
              Masz królika angorę i ciężko Ci zapanować nad jego futrem? Twój królik ma krótkie
              futro, ale ma tendencje do „zatkań" przewodu pokarmowego? A może świnka długowłosa
              niezupełnie radzi sobie z utrzymaniem higieny? Powodów, dla których strzyżenie jest
              przydatne, jest wiele. Strzyżenie to skuteczny sposób na profilaktykę. Jeśli masz
              wątpliwości – wyjaśnię i pomogę zdecydować, czy Twój pupil potrzebuje strzyżenia.
            </p>
          </div>

          <div className={styles.groomingImage}>
            <img src={krolik3} alt="Królik" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomingSection;
