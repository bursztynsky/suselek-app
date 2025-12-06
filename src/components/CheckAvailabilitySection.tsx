import React from 'react';
import styles from '../styles/CheckAvailabilitySection.module.scss';

const CheckAvailabilitySection: React.FC = () => {
  return (
    <section id="sprawdz-dostepnosc" className={styles.checkAvailability}>
      <div className={`${styles.availabilityContainer} container`}>
        <h2 className={styles.title}>Sprawdź dostępność</h2>
        <p className={styles.subtitle}>
          Zaplanuj pobyt swojego pupila w hotelu "Susełek". Sprawdź dostępne
          terminy i zarezerwuj miejsce już dziś!
        </p>

        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="checkIn" className={styles.label}>
                  Data przyjazdu
                </label>
                <input
                  type="date"
                  id="checkIn"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="checkOut" className={styles.label}>
                  Data wyjazdu
                </label>
                <input
                  type="date"
                  id="checkOut"
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="animalType" className={styles.label}>
                  Rodzaj zwierzęcia
                </label>
                <select id="animalType" className={styles.select} required>
                  <option value="">Wybierz...</option>
                  <option value="krolik">Królik</option>
                  <option value="swinka">Świnka morska</option>
                  <option value="chomik">Chomik</option>
                  <option value="szczur">Szczur</option>
                  <option value="inne">Inne</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="numberOfAnimals" className={styles.label}>
                  Liczba zwierząt
                </label>
                <input
                  type="number"
                  id="numberOfAnimals"
                  className={styles.input}
                  min="1"
                  defaultValue="1"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="additionalInfo" className={styles.label}>
                Dodatkowe informacje
              </label>
              <textarea
                id="additionalInfo"
                className={styles.textarea}
                rows={4}
                placeholder="Powiedz nam o specjalnych potrzebach swojego zwierzęcia, dietach, lekach, itp."
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Sprawdź dostępność
            </button>
          </form>

          <div className={styles.infoBox}>
            <h3 className={styles.infoTitle}>Informacje</h3>
            <ul className={styles.infoList}>
              <li>✓ Rezerwacja wymaga wpłaty zaliczki 30%</li>
              <li>✓ Przyjęcie zwierzęcia wymaga aktualnej książeczki zdrowia</li>
              <li>✓ Można przynieść ulubione zabawki i kocyk</li>
              <li>✓ Codziennie otrzymasz zdjęcia swojego pupila</li>
              <li>✓ Odwołanie do 48h przed przyjazdem bez opłat</li>
            </ul>

            <div className={styles.contactInfo}>
              <p className={styles.contactText}>
                <strong>Masz pytania?</strong>
              </p>
              <p className={styles.contactText}>
                Zadzwoń: <a href="tel:+48601155887">+48 601 155 887</a>
              </p>
              <p className={styles.contactText}>
                Email: <a href="mailto:kontakt@suselek.pl">kontakt@suselek.pl</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckAvailabilitySection;

