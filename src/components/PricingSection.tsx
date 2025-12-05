// src/components/PricingSection.tsx
import React from 'react';
import styles from '../styles/PricingSection.module.scss';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Hotel - Dzień',
      price: '80',
      unit: 'zł/dzień',
      features: [
        'Całodobowa opieka',
        'Wyżywienie premium',
        'Spacery 3x dziennie',
        'Raportowanie SMS',
      ],
    },
    {
      id: 2,
      name: 'Strzyżenie',
      price: 'od 100',
      unit: 'zł',
      features: [
        'Kąpiel i suszenie',
        'Strzyżenie profesjonalne',
        'Przycinanie pazurów',
        'Czyszczenie uszu',
      ],
      featured: true,
    },
    {
      id: 3,
      name: 'Konsultacja behawioralna',
      price: '150',
      unit: 'zł/godz',
      features: ['Analiza problemu', 'Plan treningowy', 'Wsparcie online', 'Materiały edukacyjne'],
    },
  ];

  return (
    <section id="cennik" className={styles.pricingSection}>
      <div className={`${styles.pricingContainer} container`}>
        <h2 className={styles.sectionTitle}>Cennik</h2>
        <p className={styles.sectionSubtitle}>Przystępne ceny za najwyższą jakość usług</p>

        <div className={styles.pricingGrid}>
          {pricingPlans.map(plan => (
            <div
              key={plan.id}
              className={`${styles.pricingCard} ${plan.featured ? styles.featured : ''}`}
            >
              {plan.featured && <div className={styles.badge}>Najpopularniejsze</div>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.unit}>{plan.unit}</span>
              </div>
              <ul className={styles.featuresList}>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className={styles.ctaButton}>Zarezerwuj</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
