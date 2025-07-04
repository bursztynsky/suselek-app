import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.navContainer} container`}>
                <div className={styles.logo}>
                    TwojeLogo
                </div>
                <ul className={styles.navList}>
                    <li><a href="#hero" className={styles.navLink}>Start</a></li>
                    <li><a href="#features" className={styles.navLink}>Cechy</a></li>
                    <li><a href="#about" className={styles.navLink}>O Nas</a></li>
                    <li><a href="#contact" className={styles.navLink}>Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
