import React from 'react';
import styles from '../styles/AboutMeSection.module.scss';

const AboutMeSection: React.FC = () => {
  return (
    <section id="o-mnie" className={styles.aboutMe}>
      <div className={`${styles.aboutMeContainer} container`}>
        <div className={styles.imageWrapper}>
          <img
            src="/src/assets/aboutMe.png"
            alt="Aleksandra Bursztyńska-Kostrzewa"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Poznajmy się</h2>
          <div className={styles.text}>
            <p>Witam! Nazywam się Aleksandra Bursztyńska-Kostrzewa.</p>
            <p>
              Jestem technikiem weterynarii z ponad 6-letnim doświadczeniem w warszawskich
              przychodniach: Oaza Anima Medicavet Pulsvet
            </p>
            <p>Swoją wiedzę poszerzałam na wielu kursach i w szkołach.</p>
            <p>
              Od 19 lat specjalizuję się w tym, co kocham najbardziej – opiece nad królikami i
              gryzoniami.
            </p>
          </div>
          <a href="#sprawdz-dostepnosc" className={styles.ctaButton}>
            Sprawdź dostępność miejsc
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
