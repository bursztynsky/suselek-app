// src/components/GallerySection.tsx
import React from 'react';
import styles from '../styles/GallerySection.module.scss';
import krolik2 from '../assets/krolik2.png';

const GallerySection: React.FC = () => {
    return (
        <section id="galeria" className={styles.gallerySection}>
            <div className={`${styles.galleryContainer} container`}>
                <div className={styles.galleryContent}>
                    <div className={styles.galleryImage}>
                        <img src={krolik2} alt="Królik"/>
                    </div>

                    <div className={styles.galleryText}>
                        <div className={styles.categoryBadge}>
                            Króliki i gryzonie
                        </div>

                        <h2 className={styles.galleryTitle}>
                            Profesjonalna <span>opieka</span>
                        </h2>

                        <p className={styles.galleryDescription}>
                            Wyjeżdżasz i nie masz z kim zostawić swojego pupila? Masz zwierzaka po zabiegu, którym nie
                            możesz się zaopiekować? Jeśli szukasz profesjonalnej opieki popartej wieloletnim
                            doświadczeniem i chcesz spokojnie odpocząć na urlopie wiedząc, że Twój podopieczny jest w
                            najlepszych rękach - idealnie trafiłeś/aś!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
