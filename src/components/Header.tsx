import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.scss';
import PhoneButton from './PhoneButton';
import SuselekLogo from '../assets/SUSELEK_logo_small.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [invertColors, setInvertColors] = useState(false);

  useEffect(() => {
    const checkBackgroundColor = () => {
      const header = document.querySelector('header');
      if (!header) return;

      // Temporarily hide header to get element behind it
      const originalPointerEvents = header.style.pointerEvents;
      header.style.pointerEvents = 'none';

      const headerRect = header.getBoundingClientRect();
      const headerCenter = headerRect.top + headerRect.height / 2;

      // Get element at header center position (with header pointer-events disabled)
      const elementAtCenter = document.elementFromPoint(
        window.innerWidth / 2,
        headerCenter
      );

      // Restore header pointer events
      header.style.pointerEvents = originalPointerEvents;

      if (elementAtCenter) {
        // Find the closest section or main container
        const section = elementAtCenter.closest('section, main, body');
        if (section) {
          const bgColor = window.getComputedStyle(section).backgroundColor;

          console.log('Section:', section.tagName, section.id || section.className);
          console.log('Background Color:', bgColor);

          // Parse RGB values
          const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (rgbMatch) {
            const r = parseInt(rgbMatch[1]);
            const g = parseInt(rgbMatch[2]);
            const b = parseInt(rgbMatch[3]);

            // Calculate relative luminance (perceived brightness)
            // Using the formula: 0.299*R + 0.587*G + 0.114*B
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

            console.log('Luminance:', luminance, 'Inverted:', luminance > 0.5);

            // If background is light (luminance > 0.5), use dark text (inverted)
            setInvertColors(luminance > 0.5);
          }
        }
      }
    };

    // Check on scroll and resize
    window.addEventListener('scroll', checkBackgroundColor);
    window.addEventListener('resize', checkBackgroundColor);

    // Initial check after a short delay to ensure DOM is ready
    const timer = setTimeout(checkBackgroundColor, 100);

    return () => {
      window.removeEventListener('scroll', checkBackgroundColor);
      window.removeEventListener('resize', checkBackgroundColor);
      clearTimeout(timer);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <header
      className={`${styles.header} ${invertColors ? styles.inverted : ''}`}
    >
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
            <PhoneButton phoneNumber="+48601155887" displayNumber="+48 601 155 887" inverted={invertColors} />
          </li>
        </ul>
        <div className={styles.desktopPhoneButton}>
          <PhoneButton phoneNumber="+48601155887" displayNumber="+48 601 155 887" inverted={invertColors} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
