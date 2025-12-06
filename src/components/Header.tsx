import React, { useState } from 'react';
import styles from '../styles/Header.module.scss';
import PhoneButton from './PhoneButton';
import SuselekLogo from '../assets/SUSELEK_logo_small.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.navContainer} container`}>
        <div className={styles.logo}>
          <img src={SuselekLogo} alt="SUSELEK" />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
          <li>
            <a href="#hotel" className={styles.navLink} onClick={closeMenu}>
              Hotel dla zwierząt
            </a>
          </li>
          <li>
            <a href="#strzyzenie" className={styles.navLink} onClick={closeMenu}>
              Strzyżenie
            </a>
          </li>
          <li>
            <a href="#psychologia" className={styles.navLink} onClick={closeMenu}>
              Psychologia zwierząt
            </a>
          </li>
          <li>
            <a href="#galeria" className={styles.navLink} onClick={closeMenu}>
              Galeria
            </a>
          </li>
          <li>
            <a href="#o-nas" className={styles.navLink} onClick={closeMenu}>
              O nas
            </a>
          </li>
          <li>
            <a href="#cennik" className={styles.navLink} onClick={closeMenu}>
              Cennik
            </a>
          </li>
          <li>
            <a href="#regulamin" className={styles.navLink} onClick={closeMenu}>
              Regulamin
            </a>
          </li>
          <li className={styles.mobilePhoneButton}>
            <PhoneButton phoneNumber="+48601155887" displayNumber="+48 601 155 887" />
          </li>
        </ul>
        <div className={styles.desktopPhoneButton}>
          <PhoneButton phoneNumber="+48601155887" displayNumber="+48 601 155 887" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
