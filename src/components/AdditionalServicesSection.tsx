import React from 'react';
import styles from '../styles/AdditionalServicesSection.module.scss';

const AdditionalServicesSection: React.FC = () => {
  return (
    <section id="dodatkowe-uslugi" className={styles.additionalServices}>
      <div className={`${styles.servicesContainer} container`}>
        <h2 className={styles.title}>Dodatkowe usługi</h2>
        <p className={styles.subtitle}>
          Oprócz podstawowej opieki hotelowej oferujemy szereg dodatkowych usług, które zadbają o
          kompletne dobro Twojego zwierzęcia
        </p>

        <div className={styles.servicesList}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>✂️</div>
            <h3 className={styles.serviceName}>Strzyżenie i pielęgnacja</h3>
            <p className={styles.serviceDescription}>
              Profesjonalne strzyżenie, obcinanie pazurków, pielęgnacja futra. Twój pupil wróci nie
              tylko wypoczęty, ale i elegancki!
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🧘</div>
            <h3 className={styles.serviceName}>Psychologia zwierząt</h3>
            <p className={styles.serviceDescription}>
              Konsultacje behawioralne, pomoc w rozwiązywaniu problemów zachowania, trening
              socjalizacji dla nieśmiałych zwierzaków.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>💊</div>
            <h3 className={styles.serviceName}>Podawanie leków</h3>
            <p className={styles.serviceDescription}>
              Jeśli Twoje zwierzę wymaga regularnego podawania leków, możesz być spokojny - zadbamy
              o to z pełnym profesjonalizmem.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏃</div>
            <h3 className={styles.serviceName}>Czas na zabawę</h3>
            <p className={styles.serviceDescription}>
              Dodatkowe sesje zabaw i aktywności fizycznej w bezpiecznym wybiegu z zabawkami
              dostosowanymi do gatunku.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🚗</div>
            <h3 className={styles.serviceName}>Transport</h3>
            <p className={styles.serviceDescription}>
              Usługa odbioru i dowozu zwierzęcia w wybranych lokalizacjach w okolicach Warszawy.
              Bezpieczny i komfortowy transport.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>📋</div>
            <h3 className={styles.serviceName}>Konsultacje weterynaryjne</h3>
            <p className={styles.serviceDescription}>
              Podstawowe badanie weterynaryjne, porady żywieniowe i zdrowotne, pomoc w wyborze
              odpowiedniej diety.
            </p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Potrzebujesz więcej informacji o naszych usługach?</p>
          <a href="#kontakt" className={styles.ctaButton}>
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
