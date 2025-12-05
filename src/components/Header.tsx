import React from 'react';
import styles from './Header.module.scss';
import PhoneButton from './PhoneButton';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.navContainer} container`}>
                <div className={styles.logo}>
                    TwojeLogo
                </div>
                <ul className={styles.navList}>
                    <li><a href="#hotel" className={styles.navLink}>Hotel dla zwierząt</a></li>
                    <li><a href="#strzyzenie" className={styles.navLink}>Strzyżenie</a></li>
                    <li><a href="#psychologia" className={styles.navLink}>Psychologia zwierząt</a></li>
                    <li><a href="#galeria" className={styles.navLink}>Galeria</a></li>
                    <li><a href="#o-nas" className={styles.navLink}>O nas</a></li>
                    <li><a href="#cennik" className={styles.navLink}>Cennik</a></li>
                    <li><a href="#regulamin" className={styles.navLink}>Regulamin</a></li>
                </ul>
                <PhoneButton phoneNumber="+48601155887" displayNumber="+48 601 155 887"/>
            </nav>
        </header>
    );
};

export default Header;
