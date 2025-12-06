import React from 'react';
import styles from '../styles/AboutHotelSection.module.scss';

const AboutHotelSection: React.FC = () => {
  return (
    <section id="o-hotelu" className={styles.aboutHotel}>
      <div className={`${styles.aboutHotelContainer} container`}>
        <h2 className={styles.title}>O hotelu</h2>
        <div className={styles.description}>
          <p>
            Hotel "Susełek" to wyjątkowe miejsce stworzone z myślą o komforcie i bezpieczeństwie
            królików oraz gryzoni. Znajduje się w spokojnej okolicy pod Warszawą, w domowym
            środowisku, które sprzyja relaksowi i dobremu samopoczuciu zwierząt.
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🏠</div>
            <h3 className={styles.featureTitle}>Domowa atmosfera</h3>
            <p className={styles.featureText}>
              Podopieczni mieszkają na parterze naszego domu, w przestrzeni specjalnie przygotowanej
              dla ich potrzeb.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>👩‍⚕️</div>
            <h3 className={styles.featureTitle}>Opieka weterynaryjna</h3>
            <p className={styles.featureText}>
              Jako weterynarz zapewniam profesjonalną opiekę zdrowotną i natychmiastową reakcję w
              razie potrzeby.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🌿</div>
            <h3 className={styles.featureTitle}>Zdrowa dieta</h3>
            <p className={styles.featureText}>
              Świeże warzywa, wysokiej jakości siano i dostosowane do indywidualnych potrzeb
              posiłki.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🎯</div>
            <h3 className={styles.featureTitle}>Indywidualne podejście</h3>
            <p className={styles.featureText}>
              Każde zwierzę ma swój własny harmonogram i plan opieki dostosowany do jego charakteru.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>📸</div>
            <h3 className={styles.featureTitle}>Relacje dla właścicieli</h3>
            <p className={styles.featureText}>
              Regularnie wysyłamy zdjęcia i wiadomości o samopoczuciu Twojego pupila.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔒</div>
            <h3 className={styles.featureTitle}>Bezpieczeństwo</h3>
            <p className={styles.featureText}>
              Monitorowane przestrzenie, bezpieczne wybiegi i stała obecność opiekuna w domu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHotelSection;
