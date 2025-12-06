import React from 'react';
import styles from '../styles/AboutHotelSection.module.scss';
import aboutHotelImage from '../assets/aboutHotel.jpg';

const AboutHotelSection: React.FC = () => {
  return (
    <section id="o-hotelu" className={styles.aboutHotel}>
      <div className={styles.heroImage}>
        <img src={aboutHotelImage} alt="Hotelik Susełek" className={styles.image} />
      </div>

      <div className={`${styles.aboutHotelContainer} container`}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>
            Hotelik <span className={styles.titleBold}>"Susełek"</span>
          </h2>
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.text}>
            Stworzyłam jedyny taki hotel w Polsce, polecany przez lekarzy weterynarii z całego
            kraju. Hotelik dla gryzoni i królików znajduje się w Nadarzynie pod Warszawą.
          </p>
          <p className={styles.text}>
            <strong>Co oferuję?</strong>
          </p>
          <ul className={styles.list}>
            <li>Profesjonalną opiekę i karmienie</li>
            <li>Indywidualne podejście do każdego podopiecznego</li>
            <li>Bezpieczne i przyjazne warunki</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutHotelSection;
