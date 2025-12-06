// src/components/ProfessionalSection.tsx
import React from 'react';
import styles from '../styles/AdvantagesSection.module.scss';
import houseIcon from '../assets/house.svg';
import leafesIcon from '../assets/leafes.svg';
import heartIcon from '../assets/heart.svg';

const ProfessionalSection: React.FC = () => {
  return (
    <section id="professional" className={styles.professionalSection}>
      <div className={`${styles.professionalContainer} container`}>
        <div className={styles.professionalBox}>
          <h2 className={styles.professionalTitle}>
            Profesjonalnie, <span>domowo</span>, w otoczeniu natury
          </h2>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <img src={houseIcon} alt="Dom" />
              </div>
              <p className={styles.featureText}>
                Przestronne klatki i zabudowane, sterylne kojce. Wolnostojące boksy dla świnek
                morskich. Luksusowe kojce VIP dla najbardziej wymagających
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <img src={leafesIcon} alt="Natura" />
              </div>
              <p className={styles.featureText}>
                Zwierzęta zamieszkają ze mną – mam dla nich wydzielony i odpowiednio przygotowany
                cały parter naszego domu w Nadarzynie pod Warszawą.
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <img src={heartIcon} alt="Opieka" />
              </div>
              <p className={styles.featureText}>
                Opieka po zabiegach, podawanie leków, szybkie reagowanie na pierwsze objawy
                problemów zdrowotnych
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
