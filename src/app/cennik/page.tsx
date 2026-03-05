import type { Metadata } from 'next';
import aboutIcon2 from '../../assets/aboutIcon2.svg';
import krolik1 from '../../assets/krolik1.png';
import swinka from '../../assets/swinka.png';

const PricingItem = ({
  service,
  unit,
  price,
  note,
}: {
  service: string;
  unit: string;
  price: string;
  note?: string;
}) => {
  const hasStar = service.startsWith('*');
  const label = hasStar ? service.slice(1) : service;

  return (
    <div>
      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-baseline gap-1 text-text-primary font-normal text-[15px] leading-relaxed mb-1">
          {hasStar && <span className="flex-shrink-0">*</span>}
          <span>{label}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-text-secondary font-normal text-[13px]">{unit}</span>
          <span className="text-primary font-semibold text-[17px]">{price}</span>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-end gap-3">
        {hasStar && (
          <span className="text-text-primary font-normal text-[16px] flex-shrink-0">*</span>
        )}
        <span className="text-text-primary font-normal text-[16px] flex-shrink-0">{label}</span>
        <span className="flex-1 border-b-2 border-dotted border-gray-300 mb-1"></span>
        <span className="text-text-secondary font-normal text-[12px] flex-shrink-0">{unit}</span>
        <span className="text-primary font-normal text-[16px] flex-shrink-0">{price}</span>
      </div>

      {note && <p className="text-[#949494] mt-2 text-[13px] md:text-[14px]">{note}</p>}
    </div>
  );
};

const FooterNote = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-row items-start gap-2 mt-8">
    <img src={aboutIcon2.src} alt="" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-[2px]" />
    <p className="text-text-secondary text-xs md:text-sm leading-relaxed">{children}</p>
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="mb-8"
    style={{
      fontSize: 'var(--font-size-heading-section)',
      fontWeight: 700,
      fontStyle: 'italic',
      lineHeight: '1.2',
    }}
  >
    {children}
  </h2>
);

export const metadata: Metadata = {
  title: 'Cennik - Hotelik "Susełek"',
  description:
    'Sprawdź cennik usług hotelu dla zwierząt Susełek. Oferujemy konkurencyjne ceny za opiekę nad królikami, świnkami morskimi i gryzoniami.',
  keywords: ['cennik', 'ceny', 'hotel dla zwierząt', 'opłaty', 'rezerwacja', 'koszt pobytu'],
  openGraph: {
    title: 'Cennik - Hotelik "Susełek"',
    description:
      'Sprawdź cennik usług hotelu dla zwierząt Susełek. Konkurencyjne ceny za profesjonalną opiekę nad Twoimi pupilami.',
    type: 'website',
  },
  alternates: {
    canonical: '/cennik',
  },
};

export default function CennikPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 md:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1
          className="text-center mb-4"
          style={{ fontSize: 'var(--font-size-heading-lg)', lineHeight: '1.2' }}
        >
          <span style={{ fontWeight: 700, fontStyle: 'italic' }}>Cennik</span>{' '}
          <span style={{ fontWeight: 300, fontStyle: 'italic' }}>usług</span>
        </h1>

        {/* Subtitle with icon */}
        <div className="flex items-start justify-center gap-2 mb-12">
          <img src={aboutIcon2.src} alt="" className="w-5 h-5 flex-shrink-0 mt-[2px]" />
          <p className="text-text-secondary text-sm leading-relaxed">Obowiązujący od 10.06.2025</p>
        </div>

        {/* Królik Section */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-center mb-16">
          <div>
            <SectionTitle>Królik</SectionTitle>
            <div className="space-y-6">
              <PricingItem service="Pobyt 1 królika w klatce 120 cm" unit="za dobę" price="60zł" />
              <PricingItem service="Pobyt 2 królików w klatce 120 cm" unit="za dobę" price="80zł" />
              <PricingItem
                service="Pobyt 1–2 królików w kojcu 120×120 cm"
                unit="za dobę"
                price="100zł"
              />
              <PricingItem
                service="Pobyt 1–2 królików w kojcu 180×120 cm"
                unit="za dobę"
                price="120zł"
              />
              <PricingItem
                service="Pobyt 1–2 królików w kojcu VIP 160×160 cm"
                unit="za dobę"
                price="150zł"
              />
              <PricingItem service="*Każdy kolejny królik" unit="za dobę" price="+ 20zł" />
            </div>
            <FooterNote>
              Króliki hodowlane (&gt;3 kg m.c.) mogą być zakwaterowane tylko w kojcach.
            </FooterNote>
          </div>

          <div className="flex items-center justify-center md:justify-end order-first md:order-last">
            <img
              src={krolik1.src}
              alt="Królik"
              className="object-contain w-80 h-64 md:w-[400px] md:h-[280px]"
            />
          </div>
        </div>

        {/* Świnka morska Section */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 items-center mb-16">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={swinka.src}
              alt="Świnka morska"
              className="object-contain w-full max-w-xs h-72 md:w-auto md:h-auto"
            />
          </div>

          <div>
            <SectionTitle>Świnka morska</SectionTitle>
            <div className="space-y-6">
              <PricingItem
                service="Pobyt 1 świnki w klatce 80 lub 100 cm"
                unit="za dobę"
                price="60zł"
              />
              <PricingItem
                service="Pobyt 2 świnek w klatce 100 / 120 cm"
                unit="za dobę"
                price="80zł"
              />
              <PricingItem service="Pobyt 3 świnek w klatce 120 cm" unit="za dobę" price="100zł" />
              <PricingItem
                service="Pobyt 1–3 świnek w kojcu 140×105 cm"
                unit="za dobę"
                price="120zł"
              />
              <PricingItem service="*Każda kolejna świnka" unit="za dobę" price="+ 20zł" />
            </div>
          </div>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
          <div>
            <SectionTitle>Szynszyla, suseł Richardsona, piesek preriowy</SectionTitle>
            <div className="space-y-6">
              <PricingItem service="1 zwierzę" unit="za dobę" price="60zł" />
              <PricingItem service="2 zwierzęta" unit="za dobę" price="70zł" />
              <PricingItem service="*Każdy kolejny członek stada" unit="za dobę" price="+ 10zł" />
            </div>
          </div>

          <div>
            <SectionTitle>Szczur, koszatniczka, jeż</SectionTitle>
            <div className="space-y-6 mb-12">
              <PricingItem service="1–2 zwierzęta" unit="za dobę" price="60zł" />
              <PricingItem service="*Każdy kolejny członek stada" unit="za dobę" price="+ 5zł" />
            </div>

            <SectionTitle>Myszoskoczek, mysz</SectionTitle>
            <div className="space-y-6">
              <PricingItem service="1–2 zwierzęta" unit="za dobę" price="50zł" />
              <PricingItem service="*Każdy kolejny członek stada" unit="za dobę" price="+ 5zł" />
            </div>
          </div>
        </div>

        {/* Chomik Section */}
        <div className="mb-16">
          <SectionTitle>Chomik</SectionTitle>
          <div className="space-y-6">
            <PricingItem service="1 zwierzę" unit="za dobę" price="30zł" />
            <PricingItem
              service="Opieka specjalistyczna (pooperacyjna, geriatryczna, intensywne dokarmianie)"
              unit="za dobę"
              price="od 100zł"
              note="Do wyceny indywidualnej zależnej od ilości, częstotliwości, drogi podania leków oraz potrzebnych czynności pielęgnacyjnych oraz technicznych."
            />
            <PricingItem
              service="Podawanie niewielkiej ilości leków/przymusowe dokarmianie"
              unit="za dobę"
              price="od + 10zł"
              note="Do wyceny indywidualnej zależnej od ilości, częstotliwości i rodzaju podawanych leków"
            />
            <PricingItem
              service="Przywiezienie zwierzęcia na hotel/do domu"
              unit="za przejazd"
              price="od 50zł"
            />
            <PricingItem
              service="Wizyta u lekarza weterynarii"
              unit="za usługę"
              price="od 50zł"
              note="+ koszt dojazdu (paliwo 2 zł/km) + opłata u lekarza weterynarii"
            />
            <PricingItem service="Konsultacja behawioralna" unit="trwająca do 1 h" price="200zł" />
            <PricingItem
              service="Konsultacja behawioralna w domu klienta"
              unit="trwająca do 1h"
              price="od 300zł"
            />
            <PricingItem
              service="Odbiór/przyjęcie na hotel w godzinach nocnych (21:00-7:00) oraz w dni wolne (święta)"
              unit="za usługę"
              price="100zł"
            />
          </div>
          <FooterNote>
            W przypadku braku odwołania pobytu przez klienta na mniej niż 72 godziny przed jego
            rozpoczęciem, hotel uprawniony jest do zatrzymania całości przedpłaty uiszczonej przez
            klienta lub obciążeniem klienta 50% kosztów opieki w zarezerwowanym terminie. Zmiana
            terminu rezerwacji jest bezpłatna.
          </FooterNote>
        </div>

        {/* Strzyżenie Section */}
        <div className="mb-16">
          <SectionTitle>Strzyżenie</SectionTitle>
          <div className="space-y-6">
            <PricingItem service="Króliki standard" unit="za usługę" price="150zł" />
            <PricingItem service="Króliki hodowlane" unit="za usługę" price="170zł" />
            <PricingItem
              service="Strzyżenie z usunięciem licznych kołtunów"
              unit="za usługę"
              price="170-200zł"
            />
            <PricingItem service="Świnka morska" unit="za usługę" price="100zł" />
          </div>
          <FooterNote>
            Opłata naliczana jest za każdą rozpoczętą dobę – doba zaczyna się w momencie
            przywiezienia zwierzęcia i kończy się 24h później. Podane ceny są orientacyjne – opieka
            podlega indywidualnej wycenie. Zwierzęta jednego właściciela mieszkające oddzielnie
            podlegają indywidualnej wycenie. Ostatnia aktualizacja: 10.06.2025.
          </FooterNote>
        </div>
      </div>
    </div>
  );
}
