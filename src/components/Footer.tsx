// src/components/Footer.tsx
import React from 'react';
import styles from '../styles/Footer.module.scss';
import logo from '../assets/SUSELEK_logo_medium.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import fbIcon from '../assets/fb-icon.svg';
import mailIcon from '../assets/mail-icon.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {/* Left Side - Logo and Social Icons */}
          <div className={styles.leftSection}>
            <img src={logo} alt="SUSELEK Logo" className={styles.logo} />
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/hotelik.suselek/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/hotelik.suselek"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <img src={fbIcon} alt="Facebook" />
              </a>
              <a href="mailto:hotelik.suselek@gmail.com" className={styles.socialLink}>
                <img src={mailIcon} alt="Email" />
              </a>
            </div>
          </div>

          {/* Right Side - Three Columns */}
          <div className={styles.rightSection}>
            {/* LOKALIZACJA Column */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>LOKALIZACJA</h4>
              <p className={styles.columnText}>Kasztanowa 2</p>
              <p className={styles.columnText}>05-830 Nadarzyn, Poland</p>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.123!2d20.806667!3d52.098611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471935d9c8c8c8c8%3A0x1234567890abcdef!2sKasztanowa%202%2C%2005-830%20Nadarzyn!5e0!3m2!1sen!2spl!4v1234567890"
                  width="100%"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SUSELEK Location"
                ></iframe>
              </div>
            </div>

            {/* KONTAKT Column */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>KONTAKT</h4>
              <a href="tel:+48601155887" className={styles.columnLink}>
                + 48 601 155 887
              </a>
              <a href="mailto:hotelik.suselek@gmail.com" className={styles.columnLink}>
                hotelik.suselek@gmail.com
              </a>
            </div>

            {/* DOKUMENTY Column */}
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>DOKUMENTY</h4>
              <a href="#cennik" className={styles.columnLink}>
                Cennik
              </a>
              <a href="#regulamin" className={styles.columnLink}>
                Regulamin
              </a>
              <a href="#privacy" className={styles.columnLink}>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright at bottom left */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2025 Aleksandra Bursztyńska-Kostrzewa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
