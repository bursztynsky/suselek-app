// src/components/ServicesSection.tsx
import React from 'react';
import styles from '../styles/ServicesSection.module.scss';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'hotel',
      title: 'Hotel dla królików i gryzoni',
      description:
        'Profesjonalna opieka nad Twoim królikiem lub gryzeniem podczas Twojej nieobecności. Komfortowe warunki i pełna troska.',
      icon: '🐰',
    },
    {
      id: 'strzyzenie',
      title: 'Pielęgnacja',
      description:
        'Profesjonalna pielęgnacja i dbanie o sierść. Zadbamy o wygląd i zdrowie Twojego pupila z najwyższą starannością.',
      icon: '✂️',
    },
    {
      id: 'psychologia',
      title: 'Doradztwo behawioralne',
      description:
        'Pomoc w rozwiązywaniu problemów behawioralnych królików i gryzoni. Wspieramy zdrowie psychiczne Twojego zwierzęcia.',
      icon: '🧠',
    },
  ];

  return (
    <section id="uslugi" className={styles.servicesSection}>
      <div className={`${styles.servicesContainer} container`}>
        <h2 className={styles.sectionTitle}>Nasze Usługi</h2>
        <p className={styles.sectionSubtitle}>Kompleksowa opieka nad króliczkami i gryzoniami</p>

        <div className={styles.servicesGrid}>
          {services.map(service => (
            <div key={service.id} id={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
