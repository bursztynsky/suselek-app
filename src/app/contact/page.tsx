import type { Metadata } from 'next';
import styles from '../../styles/ContactPage.module.scss';

export const metadata: Metadata = {
  title: 'Kontakt - Hotelik "Susełek"',
  description: 'Skontaktuj się z nami - Hotelik dla zwierząt "Susełek". Odpowiemy na wszystkie Twoje pytania dotyczące opieki nad zwierzętami.',
  keywords: 'kontakt, hotel dla zwierząt, telefon, email, lokalizacja',
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div className="container">
        <h1>Contact</h1>
        <p>Contact page content coming soon...</p>
      </div>
    </div>
  );
}

