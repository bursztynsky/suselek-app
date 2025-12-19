import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Hotelik "Susełek"',
  description:
    'Skontaktuj się z nami - Hotelik dla zwierząt "Susełek". Odpowiemy na wszystkie Twoje pytania dotyczące opieki nad zwierzętami, groomingu i psychologii zwierząt.',
  keywords: [
    'kontakt',
    'hotel dla zwierząt',
    'telefon',
    'email',
    'lokalizacja',
    'kontakt hotel dla zwierząt',
  ],
  openGraph: {
    title: 'Kontakt - Hotelik "Susełek"',
    description:
      'Skontaktuj się z nami - Hotelik dla zwierząt "Susełek". Odpowiemy na wszystkie Twoje pytania.',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-secondary py-32 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 text-center">Kontakt</h1>
        <p className="text-text text-lg text-center">Treść strony kontaktowej już wkrótce...</p>
      </div>
    </div>
  );
}
