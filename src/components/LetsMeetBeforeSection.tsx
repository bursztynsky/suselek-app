import React from 'react';
import styles from '../styles/LetsMeetBeforeSection.module.scss';

const LetsMeetBeforeSection: React.FC = () => {
  return (
    <section id="poznajmy-sie" className={styles.letsMeetBefore}>
      <div className={`${styles.meetContainer} container`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Poznajmy się przed pobytem</h2>
          <p className={styles.text}>
            Przed pierwszym pobytem w hotelu "Susełek" bardzo zachęcamy do spotkania poznawczego. To
            świetna okazja, aby:
          </p>

          <ul className={styles.benefitsList}>
            <li className={styles.benefit}>
              <span className={styles.benefitIcon}>🏠</span>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>Poznać nasze miejsce</h3>
                <p className={styles.benefitText}>
                  Zwiedzisz hotel, zobaczysz gdzie będzie mieszkać Twój pupil i poznasz wszystkie
                  przestrzenie.
                </p>
              </div>
            </li>

            <li className={styles.benefit}>
              <span className={styles.benefitIcon}>🤝</span>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>Poznać się osobiście</h3>
                <p className={styles.benefitText}>
                  Opowiesz mi o swoim zwierzęciu, jego przyzwyczajeniach, ulubionych przekąskach i
                  specjalnych potrzebach.
                </p>
              </div>
            </li>

            <li className={styles.benefit}>
              <span className={styles.benefitIcon}>🐰</span>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>Twój pupil pozna otoczenie</h3>
                <p className={styles.benefitText}>
                  Zwierzę będzie mogło poznać nowe miejsce w obecności właściciela, co zmniejszy
                  stres podczas właściwego pobytu.
                </p>
              </div>
            </li>

            <li className={styles.benefit}>
              <span className={styles.benefitIcon}>❓</span>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>Zadać pytania</h3>
                <p className={styles.benefitText}>
                  Będziesz mógł zapytać o wszystko, co Cię interesuje i rozwiać wszelkie wątpliwości
                  dotyczące pobytu.
                </p>
              </div>
            </li>
          </ul>

          <div className={styles.ctaBox}>
            <p className={styles.ctaText}>
              Spotkanie poznawcze jest <strong>całkowicie bezpłatne</strong>i nie zobowiązuje do
              rezerwacji pobytu.
            </p>
            <a href="#kontakt" className={styles.ctaButton}>
              Umów spotkanie
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <p>Zdjęcie wnętrza hotelu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsMeetBeforeSection;
