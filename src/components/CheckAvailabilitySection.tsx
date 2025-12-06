import React from 'react';
import styles from '../styles/CheckAvailabilitySection.module.scss';

const CheckAvailabilitySection: React.FC = () => {
  return (
    <section id="sprawdz-dostepnosc" className={styles.checkAvailabilitySection}>
      <div className={`${styles.checkAvailabilityContainer} container`}>
        <div className={styles.checkAvailabilityContent}>
          <h2 className={styles.checkAvailabilityTitle}>
            Zwierzęta są w moim życiu od zawsze. Prywatnie mam 3 szynszyle, 2 psy, 1 chomika.
            Dlatego <span>wasze zwierzęta</span> traktuję <span>jak własne.</span>
          </h2>
          <div className={styles.checkAvailabilityButtons}>
            <a href="#kontakt" className={styles.callToActionButton}>
              Sprawdź dostępność
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckAvailabilitySection;
