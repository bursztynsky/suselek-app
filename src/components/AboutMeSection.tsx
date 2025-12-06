import React from 'react';
import styles from '../styles/AboutMeSection.module.scss';

const AboutMeSection: React.FC = () => {
  return (
    <section id="o-mnie" className={styles.aboutMe}>
      <div className={`${styles.aboutMeContainer} container`}>
        <div className={styles.content}>
          <h2 className={styles.title}>O mnie</h2>
          <div className={styles.text}>
            <p>
              Nazywam się [Imię] i jestem właścicielką hotelu "Susełek".
              Moja przygoda ze zwierzętami rozpoczęła się wiele lat temu,
              a pasja do opieki nad królikami i gryzoniami towarzyszy mi od zawsze.
            </p>
            <p>
              Jako weterynarz z wieloletnim doświadczeniem, postanowiłam połączyć
              swoją wiedzę medyczną z miłością do zwierząt, tworząc miejsce,
              gdzie każdy podopieczny czuje się jak w domu.
            </p>
            <p>
              W hotelu "Susełek" każde zwierzę traktowane jest indywidualnie,
              z pełnym szacunkiem dla jego potrzeb i charakteru. Zapewniam
              profesjonalną opiekę, bezpieczeństwo i komfort podczas Twojej nieobecności.
            </p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <p>Zdjęcie właścicielki</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;

