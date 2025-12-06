// src/components/GallerySection.tsx
import React from 'react';
import styles from '../styles/GallerySection.module.scss';
import swinka1 from '../assets/swinka1.png';
import krolik2 from '../assets/krolik2.png';
import krolik3 from '../assets/krolik3.png';

const GallerySection: React.FC = () => {
  return (
    <section id="galeria" className={styles.gallerySection}>
      <div className={`${styles.galleryContainer} container`}>
        {/* First gallery item - image left, text right */}
        <div className={styles.galleryContent}>
          <div className={styles.galleryImage}>
            <img src={krolik2} alt="Królik" />
          </div>

          <div className={styles.galleryText}>
            <div className={styles.categoryBadge}>Króliki i gryzonie</div>

            <h2 className={styles.galleryTitle}>
              Profesjonalna <span>opieka</span>
            </h2>

            <p className={styles.galleryDescription}>
              Wyjeżdżasz i nie masz z kim zostawić swojego pupila? Masz zwierzaka po zabiegu, którym
              nie możesz się zaopiekować? Jeśli szukasz profesjonalnej opieki popartej wieloletnim
              doświadczeniem i chcesz spokojnie odpocząć na urlopie wiedząc, że Twój podopieczny
              jest w najlepszych rękach - idealnie trafiłeś/aś!
            </p>
          </div>
        </div>

        {/* Second gallery item - text left, image right */}
        <div className={styles.galleryContent}>
          <div className={styles.galleryText}>
            <div className={styles.categoryBadge}>Króliki i świnki morskie</div>

            <h2 className={styles.galleryTitle}>
              <span>Strzyżenie</span>
            </h2>

            <p className={styles.galleryDescription}>
              Masz królika angorę i ciężko Ci zapanować nad jego futrem? Twój królik ma krótkie
              futro, ale ma tendencje do „zatkań" przewodu pokarmowego? A może świnka długowłosa
              niezupełnie radzi sobie z utrzymaniem higieny? Powodów, dla których strzyżenie jest
              przydatne, jest wiele. Strzyżenie to skuteczny sposób na profilaktykę. Jeśli masz
              wątpliwości – wyjaśnię i pomogę zdecydować, czy Twój pupil potrzebuje strzyżenia.
            </p>
          </div>

          <div className={styles.galleryImage}>
            <img src={krolik3} alt="Królik" />
          </div>
        </div>

        {/* Third gallery item - image left, text right */}
        <div className={styles.galleryContent}>
          <div className={styles.galleryImage}>
            <img src={swinka1} alt="Królik" />
          </div>

          <div className={styles.galleryText}>
            <div className={styles.categoryBadge}>Króliki i świnki morskie</div>

            <h2 className={styles.galleryTitle}>
              Psychologia <span>zwierząt</span>
            </h2>

            <p className={styles.galleryDescription}>
              Boisz się połączyć swoje króliki? Przeraża Cię łączenie szczurów w stado? A może nie
              wiesz, czy dane łączenie ma przyszłość? Pomagam w socjalizacji i łączeniu w stada
              zwierząt tego samego gatunku. Jeśli łączenie wymaga korekty – wspieram online. Jeśli
              wcześniejsze próby się nie powiodły, możesz powierzyć zwierzęta mnie – przeprowadzę
              łączenie osobiście.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
