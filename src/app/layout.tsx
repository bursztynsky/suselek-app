import type { Metadata, Viewport } from 'next';
import '../globals.scss';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import ScrollToTopButton from '../components/shared/ScrollToTopButton';
import StructuredData from '../components/shared/StructuredData';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true'
      ? 'https://yourusername.github.io/suselek-app'
      : 'http://localhost:3000'
  ),
  title: {
    default: 'Hotelik "Susełek" - Profesjonalna Opieka nad Zwierzętami',
    template: '%s | Hotelik "Susełek"',
  },
  description:
    'Hotel dla zwierząt - profesjonalna opieka, pielęgnacja i psychologia zwierząt. Króliki, świnki morskie, gryzonie. Grooming, strzyżenie, socjalizacja.',
  keywords: [
    'hotel dla zwierząt',
    'pielęgnacja zwierząt',
    'grooming',
    'psychologia zwierząt',
    'opieka nad królikami',
    'opieka nad świnkami morskimi',
    'strzyżenie królików',
    'hotel dla królików',
    'hotel dla gryzoni',
    'socjalizacja zwierząt',
  ],
  authors: [{ name: 'Hotelik Susełek' }],
  creator: 'Hotelik Susełek',
  publisher: 'Hotelik Susełek',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Hotelik "Susełek" - Profesjonalna Opieka nad Zwierzętami',
    description:
      'Hotel dla zwierząt - profesjonalna opieka, pielęgnacja i psychologia zwierząt. Króliki, świnki morskie, gryzonie.',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Hotelik "Susełek"',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotelik "Susełek" - Profesjonalna Opieka nad Zwierzętami',
    description: 'Hotel dla zwierząt - profesjonalna opieka, pielęgnacja i psychologia zwierząt',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StructuredData />
        <div className="app-container">
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
