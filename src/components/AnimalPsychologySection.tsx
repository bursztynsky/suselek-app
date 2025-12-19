// src/components/AnimalPsychologySection.tsx
import React from 'react';
import styles from '../styles/AnimalPsychologySection.module.scss';
import swinka1 from '../assets/swinka1.png';

const AnimalPsychologySection: React.FC = () => {
  return (
    <section id="psychologia" className={styles.animalPsychologySection}>
      <div className={`${styles.animalPsychologyContainer} container`}>
        <div className={styles.animalPsychologyContent}>
          <div className={styles.animalPsychologyImage}>
            <img src={swinka1.src} alt="Świnka morska" />
          </div>

          <div className={styles.animalPsychologyText}>
            <div className={styles.categoryBadge}>Króliki i świnki morskie</div>

            <h2 className={styles.animalPsychologyTitle}>
              Psychologia <span>zwierząt</span>
            </h2>

            <p className={styles.animalPsychologyDescription}>
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

export default AnimalPsychologySection;
