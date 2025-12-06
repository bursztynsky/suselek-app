// src/components/ProfessionalCareSection.tsx
import React from 'react';
import styles from '../styles/ProfessionalCareSection.module.scss';
import krolik2 from '../assets/krolik2.png';

const ProfessionalCareSection: React.FC = () => {
  return (
    <section id="hotel" className={styles.professionalCareSection}>
      <div className={`${styles.professionalCareContainer} container`}>
        <div className={styles.professionalCareContent}>
          <div className={styles.professionalCareImage}>
            <img src={krolik2} alt="Królik" />
          </div>

          <div className={styles.professionalCareText}>
            <div className={styles.categoryBadge}>Króliki i gryzonie</div>

            <h2 className={styles.professionalCareTitle}>
              Profesjonalna <span>opieka</span>
            </h2>

            <p className={styles.professionalCareDescription}>
              Wyjeżdżasz i nie masz z kim zostawić swojego pupila? Masz zwierzaka po zabiegu, którym
              nie możesz się zaopiekować? Jeśli szukasz profesjonalnej opieki popartej wieloletnim
              doświadczeniem i chcesz spokojnie odpocząć na urlopie wiedząc, że Twój podopieczny
              jest w najlepszych rękach - idealnie trafiłeś/aś!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCareSection;

