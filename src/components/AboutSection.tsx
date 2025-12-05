// src/components/AboutSection.tsx
import React from 'react';
import styles from '../styles/AboutSection.module.scss';

const AboutSection: React.FC = () => {
  return (
    <section id="o-nas" className={styles.aboutSection}>
      <div className={`${styles.aboutContainer} container`}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>O nas</h2>
          <p className={styles.aboutText}>
            SUSELEK to miejsce stworzone z pasji do królików i gryzoni. Od lat zapewniamy
            profesjonalną opiekę, łącząc doświadczenie z nowoczesnym podejściem do dobrostanu tych
            wyjątkowych zwierząt.
          </p>
          <p className={styles.aboutText}>
            Nasz zespół składa się z wykwalifikowanych specjalistów, którzy rozumieją specyficzne
            potrzeby królików i gryzoni. Wierzymy, że każde zwierzę zasługuje na najlepszą opiekę i
            pełne zrozumienie jego potrzeb.
          </p>
          <ul className={styles.featuresList}>
            <li>✓ Wykwalifikowany personel</li>
            <li>✓ Nowoczesne wyposażenie</li>
            <li>✓ Indywidualne podejście</li>
            <li>✓ Całodobowa opieka</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
