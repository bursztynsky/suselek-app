import type { Metadata } from 'next';
import aboutIcon2 from '../../assets/aboutIcon2.svg';
import krolik1 from '../../assets/krolik1.png';
import swinka from '../../assets/swinka.png';

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
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center mb-6" style={{ fontSize: 'var(--font-size-heading-lg)', lineHeight: '1.2' }}>
          <span style={{ fontWeight: 700, fontStyle: 'italic' }}>Cennik</span>{' '}
          <span style={{ fontWeight: 300, fontStyle: 'italic' }}>usług</span>
        </h1>

        {/* Subtitle with icon */}
        <div className="flex items-start justify-center gap-2 mb-12">
          <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0 mt-[2px]" />
          <p className="text-text-secondary text-sm leading-relaxed">Obowiązujący od 10.06.2025</p>
        </div>

        {/* Królik Section */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-center mb-16">
          {/* Left side - Pricing */}
          <div>
            <h2
              className="mb-8"
              style={{ fontSize: 'var(--font-size-heading-section)', fontWeight: 700, fontStyle: 'italic', lineHeight: '1.2' }}
            >
              Królik
            </h2>

            <div className="space-y-6">
              {/* Pricing Item 1 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Pobyt 1 królika w klatce 120 cm
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  60zł
                </span>
              </div>

              {/* Pricing Item 2 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Pobyt 2 królików w klatce 120 cm
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  80zł
                </span>
              </div>

              {/* Pricing Item 3 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Pobyt 1–2 królików w kojcu 120×120 cm
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  100zł
                </span>
              </div>

              {/* Pricing Item 4 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Pobyt 1–2 królików w kojcu 180×120 cm
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  120zł
                </span>
              </div>

              {/* Pricing Item 5 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Pobyt 1–2 królików w kojcu VIP 160×160 cm
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  150zł
                </span>
              </div>

              {/* Pricing Item 6 - Additional rabbit */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  *Każdy kolejny królik
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  + 20zł
                </span>
              </div>
            </div>

            {/* Footer Note */}
            <div className="flex items-end gap-2 mt-8">
              <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0" />
              <p className="text-text-secondary text-sm leading-none">
                Króliki hodowlane (&gt;3 kg m.c.) mogą być zakwaterowane tylko w kojcach.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="hidden md:flex items-center justify-center md:justify-end">
            <img
              src={krolik1.src}
              alt="Królik"
              className="object-contain"
              style={{ width: '400px', height: '280px' }}
            />
          </div>
        </div>

        {/* Świnka morska Section */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 items-center mb-16">
          {/* Left side - Image */}
          <div className="hidden md:flex items-center justify-center md:justify-start">
            <img
              src={swinka.src}
              alt="Świnka morska"
              className="object-contain"
            />
          </div>

          {/* Right side - Pricing */}
          <div>
            <h2
              className="mb-8"
              style={{ fontSize: 'var(--font-size-heading-section)', fontWeight: 700, fontStyle: 'italic', lineHeight: '1.2' }}
            >
              Świnka morska
            </h2>

            <div className="space-y-6">
              {/* Pricing Item 1 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Pobyt 1 świnki w klatce 80 lub 100 cm
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  60zł
                </span>
              </div>

              {/* Pricing Item 2 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Pobyt 2 świnek w klatce 100 / 120 cm
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  80zł
                </span>
              </div>

              {/* Pricing Item 3 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Pobyt 3 świnek w klatce 120 cm
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  100zł
                </span>
              </div>

              {/* Pricing Item 4 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Pobyt 1–3 świnek w kojcu 140×105 cm
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  120zł
                </span>
              </div>

              {/* Pricing Item 5 - Additional guinea pig */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  *Każda kolejna świnka
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  + 20zł
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Section - Other Animals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-16">
          {/* Left Column - Chinchilla, Richardson Ground Squirrel, Prairie Dog */}
          <div>
            <h2
              className="mb-8"
              style={{ fontSize: 'var(--font-size-heading-section)', fontWeight: 700, fontStyle: 'italic', lineHeight: '1.2' }}
            >
              Szynszyla, suseł Richardsona, piesek preriowy
            </h2>

            <div className="space-y-6">
              {/* Pricing Item 1 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  1 zwierzę
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  60zł
                </span>
              </div>

              {/* Pricing Item 2 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  2 zwierzęta
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  70zł
                </span>
              </div>

              {/* Pricing Item 3 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  *Każdy kolejny członek stada
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  + 10zł
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Rats, Hedgehogs, Jerboas, Mice */}
          <div>
            <h2
              className="mb-8"
              style={{ fontSize: 'var(--font-size-heading-section)', fontWeight: 700, fontStyle: 'italic', lineHeight: '1.2' }}
            >
              Szczur, koszatniczka, jeż
            </h2>

            <div className="space-y-6 mb-12">
              {/* Pricing Item 1 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  1–2 zwierzęta
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  60zł
                </span>
              </div>

              {/* Pricing Item 2 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  *Każdy kolejny członek stada
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  + 5zł
                </span>
              </div>
            </div>

            {/* Second Header - Jerboa, Mouse */}
            <h2
              className="mb-8"
              style={{ fontSize: 'var(--font-size-heading-section)', fontWeight: 700, fontStyle: 'italic', lineHeight: '1.2' }}
            >
              Myszoskoczek, mysz
            </h2>

            <div className="space-y-6">
              {/* Pricing Item 1 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  1–2 zwierzęta
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  50zł
                </span>
              </div>

              {/* Pricing Item 2 */}
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  *Każdy kolejny członek stada
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  + 5zł
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Chomik Section - Full Width */}
        <div className="mb-16">
          <h2
            className="mb-8"
            style={{ fontSize: 'var(--font-size-heading-section)', fontWeight: 700, fontStyle: 'italic', lineHeight: '1.2' }}
          >
            Chomik
          </h2>

          <div className="space-y-6">
            {/* Pricing Item 1 */}
            <div className="flex items-end gap-3">
              <span
                className="text-text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                1 zwierzę
              </span>
              <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
              <span
                className="text-text-secondary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
              >
                za dobę
              </span>
              <span
                className="text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                30zł
              </span>
            </div>

            {/* Pricing Item 2 - Specialist Care */}
            <div>
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Opieka specjalistyczna (pooperacyjna, geriatryczna, intensywne dokarmianie)
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  od 100zł
                </span>
              </div>
              <p className="text-[#949494] mt-2" style={{ fontSize: '14px' }}>
                Do wyceny indywidualnej zależnej od ilości, częstotliwości, drogi podania leków oraz
                potrzebnych czynności pielęgnacyjnych oraz technicznych.
              </p>
            </div>

            {/* Pricing Item 3 - Medicine Administration */}
            <div>
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Podawanie niewielkiej ilości leków/przymusowe dokarmianie
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za dobę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  od + 10zł
                </span>
              </div>
              <p className="text-[#949494] mt-2" style={{ fontSize: '14px' }}>
                Do wyceny indywidualnej zależnej od ilości, częstotliwości i rodzaju podawanych
                leków
              </p>
            </div>

            {/* Pricing Item 4 - Transport */}
            <div className="flex items-end gap-3">
              <span
                className="text-text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                Przywiezienie zwierzęcia na hotel/do domu
              </span>
              <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
              <span
                className="text-text-secondary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
              >
                za przejazd
              </span>
              <span
                className="text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                od 50zł
              </span>
            </div>

            {/* Pricing Item 5 - Vet Visit */}
            <div>
              <div className="flex items-end gap-3">
                <span
                  className="text-text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  Wizyta u lekarza weterynarii
                </span>
                <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
                <span
                  className="text-text-secondary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
                >
                  za usługę
                </span>
                <span
                  className="text-primary font-normal flex-shrink-0"
                  style={{ fontSize: 'var(--font-size-text-base)' }}
                >
                  od 50zł
                </span>
              </div>
              <p className="text-[#949494] mt-2" style={{ fontSize: '14px' }}>
                + koszt dojazdu (paliwo 2 zł/km) + opłata u lekarza weterynarii
              </p>
            </div>

            {/* Pricing Item 6 - Behavioral Consultation */}
            <div className="flex items-end gap-3">
              <span
                className="text-text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                Konsultacja behawioralna
              </span>
              <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
              <span
                className="text-text-secondary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
              >
                trwająca do 1 h
              </span>
              <span
                className="text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                200zł
              </span>
            </div>

            {/* Pricing Item 7 - Behavioral Consultation at Client's Home */}
            <div className="flex items-end gap-3">
              <span
                className="text-text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                Konsultacja behawioralna w domu klienta
              </span>
              <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
              <span
                className="text-text-secondary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
              >
                trwająca do 1h
              </span>
              <span
                className="text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                od 300zł
              </span>
            </div>

            {/* Pricing Item 8 - Night/Holiday Pickup */}
            <div className="flex items-end gap-3">
              <span
                className="text-text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                Odbiór/przyjęcie na hotel w godzinach nocnych (21:00-7:00) oraz w dni wolne (święta)
              </span>
              <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
              <span
                className="text-text-secondary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
              >
                za usługę
              </span>
              <span
                className="text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                100zł
              </span>
            </div>
          </div>

          {/* Footer Note */}
          <div className="flex items-start gap-2 mt-8">
            <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0 mt-[2px]" />
            <p className="text-text-secondary text-sm leading-relaxed">
              W przypadku braku odwołania pobytu przez klienta na mniej niż 72 godziny przed jego
              rozpoczęciem, hotel uprawniony jest do zatrzymania całości przedpłaty uiszczonej przez
              klienta lub obciążeniem klienta 50% kosztów opieki w zarezerwowanym terminie. Zmiana
              terminu rezerwacji jest bezpłatna.
            </p>
          </div>
        </div>

        {/* Strzyżenie Section - Full Width */}
        <div className="mb-16">
          <h2
            className="mb-8"
            style={{ fontSize: 'var(--font-size-heading-section)', fontWeight: 700, fontStyle: 'italic', lineHeight: '1.2' }}
          >
            Strzyżenie
          </h2>

          <div className="space-y-6">
            {/* Pricing Item 1 */}
            <div className="flex items-end gap-3">
              <span
                className="text-text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                Króliki standard
              </span>
              <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
              <span
                className="text-text-secondary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
              >
                za usługę
              </span>
              <span
                className="text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                150zł
              </span>
            </div>

            {/* Pricing Item 2 */}
            <div className="flex items-end gap-3">
              <span
                className="text-text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                Króliki hodowlane
              </span>
              <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
              <span
                className="text-text-secondary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
              >
                za usługę
              </span>
              <span
                className="text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                170zł
              </span>
            </div>

            {/* Pricing Item 3 */}
            <div className="flex items-end gap-3">
              <span
                className="text-text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                Strzyżenie z usunięciem licznych kołtunów
              </span>
              <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
              <span
                className="text-text-secondary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
              >
                za usługę
              </span>
              <span
                className="text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                170-200zł
              </span>
            </div>

            {/* Pricing Item 4 */}
            <div className="flex items-end gap-3">
              <span
                className="text-text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                Świnka morska
              </span>
              <span className="flex-1 border-b-2 border-dotted border-gray-400 mb-1"></span>
              <span
                className="text-text-secondary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-xs)', fontFamily: 'var(--font-family-inter)' }}
              >
                za usługę
              </span>
              <span
                className="text-primary font-normal flex-shrink-0"
                style={{ fontSize: 'var(--font-size-text-base)' }}
              >
                100zł
              </span>
            </div>
          </div>

          {/* Footer Note */}
          <div className="flex items-start gap-2 mt-8">
            <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0 mt-[2px]" />
            <p className="text-text-secondary text-sm leading-relaxed">
              Opłata naliczana jest za każdą rozpoczętą dobę – doba zaczyna się w momencie
              przywiezienia zwierzęcia i kończy się 24h później. Podane ceny są orientacyjne –
              opieka podlega indywidualnej wycenie. Zwierzęta jednego właściciela mieszkające
              oddzielnie podlegają indywidualnej wycenie. Ostatnia aktualizacja: 10.06.2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
