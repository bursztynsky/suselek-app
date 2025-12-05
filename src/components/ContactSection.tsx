// src/components/ContactSection.tsx
import React from 'react';
import styles from '../styles/ContactSection.module.scss';
import PhoneButton from './PhoneButton';

const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className={styles.contactSection}>
      <div className={`${styles.contactContainer} container`}>
        <h2 className={styles.sectionTitle}>Skontaktuj się z nami</h2>
        <p className={styles.sectionSubtitle}>
          Masz pytania? Chętnie na nie odpowiemy i pomożemy w wyborze najlepszej opcji dla Twojego
          pupila
        </p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h3>Adres</h3>
                <p>ul. Przykładowa 123</p>
                <p>00-000 Warszawa</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div>
                <h3>Email</h3>
                <p>kontakt@suselek.pl</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <h3>Telefon</h3>
                <p>Zadzwoń do nas:</p>
                <PhoneButton phoneNumber="+48123456789" />
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>⏰</div>
              <div>
                <h3>Godziny otwarcia</h3>
                <p>Poniedziałek - Piątek: 8:00 - 20:00</p>
                <p>Sobota - Niedziela: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Imię i nazwisko</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Telefon</label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Wiadomość</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
