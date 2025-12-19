import React from 'react';
import styles from '../styles/LetsMeetBeforeSection.module.scss';
import about4Image from '../assets/about4.jpg';
import aboutIcon2 from '../assets/aboutIcon2.svg';

const LetsMeetBeforeSection: React.FC = () => {
  return (
    <section id="poznajmy-sie" className={styles.letsMeetBefore}>
      {/* Hero Image */}
      <div className={styles.heroImage}>
        <img src={about4Image.src} alt="Poznajmy się" className={styles.image} />
      </div>

      {/* Content Section */}
      <div className={`${styles.contentContainer} container`}>
        <h2 className={styles.title}>
          <span>Poznajmy się</span> przed pobytem
        </h2>

        <p className={styles.subtitle}>
          Rozumiemy, że Wasi podopieczni to Wasz największy skarb. Dlatego:
        </p>

        {/* Three Columns */}
        <div className={styles.columnsGrid}>
          <div className={styles.column}>
            <div className={styles.number}>1</div>
            <p className={styles.columnText}>
              Możesz umówić się na wizytę zapoznawczą przed pobytem zwierzęcia
            </p>
          </div>

          <div className={styles.column}>
            <div className={styles.number}>2</div>
            <p className={styles.columnText}>Pokażę Ci hotelik i odpowiem na wszystkie pytania</p>
          </div>

          <div className={styles.column}>
            <div className={styles.number}>3</div>
            <p className={styles.columnText}>
              Jeśli warunki będą odpowiadać – od razu podpiszemy umowę
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className={styles.footerNote}>
          <img src={aboutIcon2} alt="" className={styles.icon} />
          <p className={styles.noteText}>
            <strong>Prośba:</strong> hotelik mieści się w naszym domu rodzinnym, dlatego proszę nie
            odwiedzajcie nas bez zapowiedzi. Pracujemy i żyjemy tu całą pięcioosobową rodziną.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LetsMeetBeforeSection;
