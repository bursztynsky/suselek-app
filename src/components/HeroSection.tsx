// src/components/HeroSection.tsx
import React from 'react';
import styles from './HeroSection.module.scss'; // Importujemy style z modułu SCSS

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`${styles.heroContent} container`}>
        <h1 className={styles.heroTitle}>Stwórz Niesamowite Strony Landing Page</h1>
        <p className={styles.heroSubtitle}>
          Nowoczesne rozwiązania w React i TypeScript z mocą SCSS Modules.
        </p>
        <button className={styles.callToActionButton}>Rozpocznij Teraz!</button>
      </div>
    </section>
  );
};

export default HeroSection;
