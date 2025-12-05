// src/components/GallerySection.tsx
import React from 'react';
import styles from '../styles/GallerySection.module.scss';

const GallerySection: React.FC = () => {
  // Placeholder images - replace with actual images later
  const galleryImages = [
    { id: 1, alt: 'Szczęśliwy pies w hotelu' },
    { id: 2, alt: 'Strzyżenie psa' },
    { id: 3, alt: 'Zajęcia psychologiczne' },
    { id: 4, alt: 'Komfortowy pokój hotelowy' },
    { id: 5, alt: 'Zabawa w ogrodzie' },
    { id: 6, alt: 'Pielęgnacja zwierząt' },
  ];

  return (
    <section id="galeria" className={styles.gallerySection}>
      <div className={`${styles.galleryContainer} container`}>
        <h2 className={styles.sectionTitle}>Galeria</h2>
        <p className={styles.sectionSubtitle}>
          Zobacz jak wyglądają nasze usługi i zadowoleni podopieczni
        </p>

        <div className={styles.galleryGrid}>
          {galleryImages.map(image => (
            <div key={image.id} className={styles.galleryItem}>
              <div className={styles.imagePlaceholder}>
                <span>📷</span>
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
