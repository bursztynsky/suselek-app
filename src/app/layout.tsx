import type { Metadata, Viewport } from 'next';
import { Lato } from 'next/font/google';
import '../globals.scss';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import ScrollToTopButton from '../components/shared/ScrollToTopButton';
import StructuredData from '../components/shared/StructuredData';

const lato = Lato({
  weight: ['100', '300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-lato',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_BASE_URL || 'https://suselek.pl'
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
  icons: {
    icon: '/favicon.svg',
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
      <body className={lato.className}>
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
