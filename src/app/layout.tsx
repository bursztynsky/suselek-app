import type { Metadata } from 'next';
import '../globals.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

export const metadata: Metadata = {
  title: 'Hotelik "Susełek"',
  description: 'Hotel dla zwierząt - profesjonalna opieka, pielęgnacja i psychologia zwierząt',
  keywords: 'hotel dla zwierząt, pielęgnacja zwierząt, grooming, psychologia zwierząt',
  openGraph: {
    title: 'Hotelik "Susełek"',
    description: 'Hotel dla zwierząt - profesjonalna opieka, pielęgnacja i psychologia zwierząt',
    type: 'website',
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
