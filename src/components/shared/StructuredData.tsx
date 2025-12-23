import Script from 'next/script';

export default function StructuredData() {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_BASE_URL || 'https://suselek.pl'
      : 'http://localhost:3000';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    name: 'Hotelik "Susełek"',
    description:
      'Profesjonalny hotel dla zwierząt oferujący opiekę nad królikami, świnkami morskimi i gryzoniami. Grooming, strzyżenie i psychologia zwierząt.',
    url: baseUrl,
    logo: `${baseUrl}/SUSELEK_logo_small.svg`,
    image: `${baseUrl}/SUSELEK_logo_small.svg`,
    priceRange: '$$',
    telephone: '+48 601-155-887',
    email: 'hotelik.suselek@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kasztanowa 2',
      addressLocality: 'Nadarzyn',
      addressRegion: 'Mazowieckie',
      postalCode: '05-830',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.1051315,
      longitude: 20.798094,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
    serviceType: ['Pet Boarding', 'Pet Grooming', 'Animal Psychology'],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
