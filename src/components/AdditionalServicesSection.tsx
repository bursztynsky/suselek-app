import React from 'react';
import styles from '../styles/AdditionalServicesSection.module.scss';
import about3Image from '../assets/about3.jpg';
import aboutIcon from '../assets/aboutIcon.svg';

const AdditionalServicesSection: React.FC = () => {
  return (
    <section id="dodatkowe-uslugi" className={styles.additionalServices}>
      <div className={styles.servicesGrid}>
        {/* Column 1: Title with background image */}
        <div className={styles.column1}>
          <div className={styles.titleWrapper}>
            <img src={aboutIcon} alt="" className={styles.icon} />
            <h2 className={styles.title}>
              <span className={styles.titleBold}>Dodatkowa</span>
              <span className={styles.titleLight}>oferta</span>
            </h2>
          </div>
        </div>

        {/* Column 2: Two rows */}
        <div className={styles.column2}>
          {/* Row 1: Psychology section */}
          <div className={styles.psychologyBlock}>
            <h3 className={styles.blockTitle}>Psychologia zwierząt</h3>
            <p className={styles.blockText}>Pomagam przy łączeniu zwierząt w stado:</p>
            <ul className={styles.blockList}>
              <li>online (konsultacje)</li>
              <li>osobiście (prowadzenie procesu łączenia)</li>
            </ul>
          </div>

          {/* Row 2: Grooming section with background */}
          <div className={styles.groomingBlock}>
            <div className={styles.groomingContent}>
              <h3 className={styles.blockTitle}>Grooming</h3>
              <p className={styles.blockText}>
                strzyżenie królików
                <br />i świnek morskich
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Photo */}
        <div className={styles.column3}>
          <div className={styles.photoWrapper}>
            <img src={about3Image} alt="Zwierzęta" className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
