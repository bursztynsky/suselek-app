// src/components/HomeSection.tsx
import React from 'react';
import styles from '../styles/HomeSection.module.scss';
import krolik1 from '../assets/krolik1.png';
import shape4 from '../assets/shape4.svg';

const HotelSection: React.FC = () => {
  return (
    <section id="hotel" className={styles.home}>
      <img src={shape4} alt="" className={styles.heartShape} />
      <div className={`${styles.homeContainer} container`}>
        <div className={styles.homeContent}>
          <h1 className={styles.homeTitle}>
            Hotelik dla <span>królików i gryzoni</span> pod Warszawą
          </h1>
          <p className={styles.homeSubtitle}>
            W hotelu “Susełek” łączymy doświadczenie weterynaryjne z domową atmosferą. Twoje zwierzę
            zamieszka z nami – na parterze naszego domu, w przestrzeni stworzonej specjalnie z myślą
            o jego komforcie.
          </p>
          <div className={styles.homeButtons}>
            <a href="#cennik" className={styles.callToActionButton}>
              Poznaj ofertę
            </a>
          </div>
        </div>
        <div className={styles.homeImage}>
          <img src={krolik1} alt="Królik" />
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
