// src/components/Footer.tsx
import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>SUSELEK</h3>
            <p>Profesjonalna opieka nad Twoim pupilem z pasją i zaangażowaniem.</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Nawigacja</h4>
            <ul>
              <li>
                <a href="#hero">Start</a>
              </li>
              <li>
                <a href="#uslugi">Usługi</a>
              </li>
              <li>
                <a href="#o-nas">O nas</a>
              </li>
              <li>
                <a href="#galeria">Galeria</a>
              </li>
              <li>
                <a href="#cennik">Cennik</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Usługi</h4>
            <ul>
              <li>
                <a href="#hotel">Hotel dla zwierząt</a>
              </li>
              <li>
                <a href="#strzyzenie">Strzyżenie</a>
              </li>
              <li>
                <a href="#psychologia">Psychologia zwierząt</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Kontakt</h4>
            <ul className={styles.contactList}>
              <li>📍 ul. Przykładowa 123, Warszawa</li>
              <li>📧 kontakt@suselek.pl</li>
              <li>📞 +48 123 456 789</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} SUSELEK. Wszelkie prawa zastrzeżone.</p>
          <div className={styles.footerLinks}>
            <a href="#regulamin">Regulamin</a>
            <span>|</span>
            <a href="#polityka">Polityka prywatności</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
