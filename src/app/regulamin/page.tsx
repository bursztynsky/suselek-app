import type { Metadata } from 'next';
import aboutIcon2 from '../../assets/aboutIcon2.svg';

export const metadata: Metadata = {
  title: 'Regulamin - Hotelik "Susełek"',
  description:
    'Regulamin firmy Hotelik Susełek. Zapoznaj się z zasadami korzystania z naszych usług, informacjami o rezerwacji, płatnościach i zasadach pobytu zwierząt.',
  keywords: [
    'regulamin',
    'zasady',
    'hotel dla zwierząt',
    'warunki rezerwacji',
    'płatności',
    'pobyt zwierząt',
  ],
  openGraph: {
    title: 'Regulamin - Hotelik "Susełek"',
    description:
      'Regulamin firmy Hotelik Susełek. Zapoznaj się z zasadami korzystania z naszych usług, informacjami o rezerwacji, płatnościach i zasadach pobytu zwierząt.',
    type: 'website',
  },
  alternates: {
    canonical: '/regulamin',
  },
};

export default function RegulaminPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main header */}
        <h1 className="text-center mb-12" style={{ fontSize: '74px', lineHeight: '1.2' }}>
          <span style={{ fontWeight: 700, fontStyle: 'italic' }}>Regulamin </span>
          <span style={{ fontWeight: 300, fontStyle: 'normal' }}>firmy </span>
          <br />
          <span style={{ fontWeight: 700, fontStyle: 'italic' }}>„Hotelik Susełek"</span>
        </h1>

        {/* Content box with background */}
        <div
          className="w-full p-8 md:p-12"
          style={{
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-xl)',
          }}
        >
          {/* Box header */}
          <h2
            className="mb-6 text-center"
            style={{
              fontWeight: 700,
              fontSize: 'var(--font-size-heading-section)',
              lineHeight: '1.2',
            }}
          >
            Witamy <span style={{ fontWeight: 300, fontStyle: 'italic' }}>w</span> Hoteliku Susełek!
          </h2>

          {/* Box text content */}
          <div
            className="space-y-4 text-center"
            style={{
              fontWeight: 400,
              fontSize: 'var(--font-size-text-sm)',
              lineHeight: '1.6',
              color: 'var(--color-text-secondary)',
            }}
          >
            <p>
              Zanim złożysz rezerwację prosimy o zapoznanie się z niniejszym Regulaminem, który
              określa zasady korzystania z naszych usług. Regulamin zawiera m.in. informacje o
              sposobach tworzenia rezerwacji, płatnościach i zasadach pobytu Twojego pupila.
              Właścicielem portalu jest Aleksandra Bursztyńska-Kostrzewa prowadząca działalność
              gospodarczą pod firmą Hotelik Susełek Aleksandra Bursztyńska-Kostrzewa, ul.
              Kasztanowa, nr. 2, 05-830 Nadarzyn, NIP: 7010199366.
            </p>

            <p>
              Jeśli chcesz się z nami skontaktować w jakiejkolwiek sprawie, napisz:{' '}
              <a href="mailto:hotelik.suselek@gmail.com" className="text-primary hover:underline">
                hotelik.suselek@gmail.com
              </a>{' '}
              lub zadzwoń:{' '}
              <a href="tel:+48601155887" className="text-primary hover:underline">
                +48 601 155 887
              </a>
              .
            </p>
          </div>
        </div>

        {/* Słownik pojęć Section */}
        <div className="mt-16">
          {/* Section header */}
          <h2
            className="mb-6 text-left"
            style={{
              fontSize: 'var(--font-size-heading-section)',
              fontWeight: 400,
              color: 'var(--color-text-primary)',
              lineHeight: '1.2',
            }}
          >
            Słownik pojęć
          </h2>

          {/* Icon with subtitle */}
          <div className="flex items-start gap-4 mb-6">
            <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0 mt-0.5" />
            <p
              className="text-left"
              style={{
                fontSize: 'var(--font-size-text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6',
              }}
            >
              Oto kilka pojęć, które są niezbędne żeby łatwiej zrozumieć niniejszy dokument.
            </p>
          </div>

          {/* Dictionary content */}
          <div
            className="space-y-4 text-left"
            style={{
              fontSize: 'var(--font-size-text-sm)',
              color: 'var(--color-text-primary)',
              lineHeight: '1.6',
            }}
          >
            <p>
              <strong>Hotel</strong> – miejsce przeznaczone do czasowej opieki nad zwierzętami,
              głównie gryzoniami i królikami, podczas nieobecności ich właścicieli. Hotel mieści się
              w Nadarzynie przy ul. Kasztanowej 2, 05-830 Nadarzyn.
            </p>
            <p>
              <strong>Opiekun</strong> – Aleksandra Bursztyńska-Kostrzewa prowadząca działalność
              gospodarczą pod firmą Hotelik Susełek Aleksandra Bursztyńska-Kostrzewa, ul. Kasztanowa
              2, 05-830 Nadarzyn, NIP: 7010199366 lub osoba przez nią wyznaczona.
            </p>
            <p>
              <strong>Pobyt</strong> – okres pozostawania zwierzęcia w hotelu.
            </p>
            <p>
              <strong>Powierzający / klient / właściciel</strong> – osoba fizyczna lub prawna
              zlecająca opiekę nad zwierzęciem.
            </p>
            <p>
              <strong>Rezerwacja</strong> – oznacza złożenie przez klienta oferty zawarcia umowy o
              świadczenie usług przez opiekuna, określające w szczególności rodzaj i liczbę
              zwierząt, datę rozpoczęcia i zakończenia pobytu, a także inne istotne informacje o
              zwierzęciu.
            </p>
            <p>
              <strong>Umowa</strong> – porozumienie zawarte pomiędzy właścicielem a opiekunem,
              określające warunki pobytu zwierzęcia w hotelu na podstawie niniejszego regulaminu i
              rezerwacji.
            </p>
            <p>
              <strong>Usługa</strong> – każde działanie wykonywane przez opiekuna na rzecz
              zwierzęcia i jego właściciela w ramach pobytu. Usługi obejmują m.in. zakwaterowanie,
              wyżywienie, opiekę weterynaryjną, zabiegi pielęgnacyjne, zapewnienie aktywności
              fizycznej i mentalnej, a także wszelkie inne czynności mające na celu zapewnienie
              zdrowia, bezpieczeństwa i komfortu zwierzęcia. Zakres i rodzaj usług świadczonych
              przez hotel są określone w regulaminie i mogą być dostosowane do indywidualnych
              potrzeb i wymagań klienta.
            </p>
            <p>
              <strong>Zwierzę</strong> – gryzoń, królik lub inne małe zwierzę domowe, które zostało
              przyjęte do hotelu na podstawie umowy zawartej między opiekunem a klientem. Zwierzę
              objęte opieką hotelu musi być zdrowe, zaszczepione zgodnie z wymaganiami hotelu i
              wolne od pasożytów.
            </p>
          </div>
        </div>

        {/* Usługi opiekuna Section */}
        <div className="mt-16">
          {/* Section header */}
          <h2
            className="mb-6 text-left"
            style={{
              fontSize: 'var(--font-size-heading-section)',
              fontWeight: 400,
              color: 'var(--color-text-primary)',
              lineHeight: '1.2',
            }}
          >
            Usługi opiekuna
          </h2>

          {/* Icon with subtitle */}
          <div className="flex items-start gap-4 mb-6">
            <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0 mt-0.5" />
            <p
              className="text-left"
              style={{
                fontSize: 'var(--font-size-text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6',
              }}
            >
              To najważniejsza część umowy, w której powiemy Ci jak wygląda proces rezerwacji i
              organizacja pobytu.
            </p>
          </div>

          {/* Subheader */}
          <h3
            className="mb-6 text-left"
            style={{
              fontSize: 'var(--font-size-heading-sm)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              lineHeight: '1.2',
            }}
          >
            1. Warunki składania Rezerwacji i zawarcia Umowy
          </h3>

          {/* Numbered list */}
          <ol
            className="space-y-0.5 text-left list-decimal pl-6"
            style={{
              fontSize: 'var(--font-size-text-sm)',
              color: 'var(--color-text-primary)',
              lineHeight: '1.6',
            }}
          >
            <li>
              Wszelkie informacje o Usługach Opiekuna podane na portalu internetowym, nie stanowią
              oferty w rozumieniu art. 66 ustawy z dnia 23 kwietnia 1964 Kodeks Cywilny.
            </li>
            <li>
              Cennik Usług udostępniany jest Klientowi po przesłaniu Rezerwacji. Ceny Usług podawane
              są w złotych polskich i zawierają podatek VAT.
            </li>
            <li>
              Ceny Usług nie uwzględniają opłat dodatkowych takich jak koszty opieki weterynaryjnej,
              koszty karmy dla zwierząt, koszty transportu. Obowiązek zapłaty kosztów tego rodzaju
              spoczywa w całości na Kliencie. Opiekun może tymczasowo pokryć te koszty w imieniu
              Klienta (np. potrzeba nagłej konsultacji weterynaryjnej, zakup suplementów lub leków)
              - Klient najpóźniej w dacie zakończenia Pobytu zwraca Opiekunowi poniesione przez
              niego koszty. Powyższe nie dotyczy kosztów dodatkowych powstałych z wyłącznej winy
              Opiekuna.
            </li>
            <li>
              Każda Rezerwacja wyceniana jest indywidualnie. Cena Usługi zależy od wielu czynników
              takich jak: gatunek Zwierzęcia, jego stan zdrowia, ilość Zwierząt, długość Pobytu,
              stosowanie dodatkowych środków bezpieczeństwa, konieczność podejmowania czynności
              dodatkowych takich jak podawanie leków, socjalizacja, zabiegi higieniczne.
            </li>
            <li>
              Najpóźniej w dacie złożenia Rezerwacji, Klient zobowiązuje się do poinformowania
              Opiekuna na temat stanu zdrowia psychicznego i fizycznego Zwierzęcia oraz jego
              przyzwyczajeń i aktywności istotnych z punktu widzenia sprawowania prawidłowej opieki.
            </li>
            <li>
              Opiekun po zapoznaniu się z treścią Rezerwacji, potwierdza jej przyjęcie oraz określa
              ewentualne warunki dodatkowe świadczenia Usług. Potwierdzenie otrzymania następuje
              poprzez przesłanie wiadomości e-mail wraz ze wskazaniem, że Rezerwacja została
              przyjęta i posiada status „potwierdzona". Potwierdzenie zawiera wszystkie istotne
              elementy świadczenia Usług (warunki Pobytu, cenę Usług, warunki przedpłaty i warunki
              płatności).
            </li>
            <li>
              Opiekun zastrzega sobie prawo do odmowy przyjęcia Rezerwacji bez konieczności
              podawania powodu.
            </li>
            <li>
              Opiekun może uzależnić przyjęcie Rezerwacji od dokonania przedpłaty przez Klienta.
              Warunki przedpłaty określone zostają w odpowiedzi na Rezerwację. W przypadku braku
              odwołania Pobytu Zwierzęcia przez Klienta na mniej niż 72 godziny przed jego
              rozpoczęciem, Opiekun uprawniony jest do zatrzymania całości przedpłaty. W przypadku
              odwołania Pobytu przez Opiekuna przedpłata zwracana jest Klientowi w całości.
            </li>
            <li>
              Klient w ciągu 48 godzin od przesłania potwierdzenia Rezerwacji przez Opiekuna składa
              oświadczenie o akceptacji warunków i zakresu Usług. W tym momencie zawarta zostaje
              Umowa pomiędzy Stronami, która trwa do momentu zakończenia wzajemnej realizacji
              świadczeń.
            </li>
          </ol>

          {/* Subsection 2 */}
          <div className="mt-8">
            {/* Subheader */}
            <h3
              className="mb-6 text-left"
              style={{
                fontSize: 'var(--font-size-heading-sm)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: '1.2',
              }}
            >
              2. Warunki świadczenia usług
            </h3>

            {/* Icon with subtitle */}
            <div className="flex items-start gap-4 mb-6">
              <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <p
                className="text-left"
                style={{
                  fontSize: 'var(--font-size-text-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.6',
                }}
              >
                Opisuje warunki świadczenia usług przez Opiekuna oraz obowiązki właściciela.
              </p>
            </div>

            {/* Numbered list */}
            <ol
              className="space-y-0.5 text-left list-decimal pl-6"
              style={{
                fontSize: 'var(--font-size-text-sm)',
                color: 'var(--color-text-primary)',
                lineHeight: '1.6',
              }}
            >
              <li>
                Właściciel oświadcza, że przed rozpoczęciem Pobytu ujawnił wszystkie informacje
                dotyczące stanu zdrowia Zwierzęcia, w tym wszelkie choroby, alergie i inne istotne
                kwestie zdrowotne. Właściciel oświadcza także, że Zwierzę posiada aktualne
                szczepienia oraz jest odrobaczone. Na wniosek Opiekuna, Właściciel zobowiązuje się
                przedłożyć książeczkę zdrowia Zwierzęcia lub zaświadczenie od lekarza weterynarii
                potwierdzające stan zdrowia, wykonane szczepienia i/lub prowadzone leczenie. Odmowa
                Właściciela w dostarczeniu Opiekunowi książeczki zdrowia i/lub zaświadczenia od
                lekarza weterynarii może powodować odmowę przyjęcia Zwierzęcia do Hotelu.
              </li>
              <li>
                Właściciel ma świadomość, że pozostawiając Zwierzę w obcym środowisku naraża je na
                silny stres oraz pośrednie interakcje z innymi Zwierzętami. W przypadku istnienia
                przeciwwskazań w powyższym, Klient powinien przedłożyć taką informację Opiekunowi w
                momencie składania Rezerwacji.
              </li>
              <li>
                Właściciel oświadcza, że powierzone pod opieką Zwierzę:
                <ul className="list-disc pl-6 mt-2 space-y-0.5">
                  <li>
                    może być w silnym stresie i w jego wyniku może doprowadzić do własnego
                    zranienia, zranienia innych zwierząt, zranienia osób lub uszkodzenia przedmiotów
                    znajdujących się w jego otoczeniu;
                  </li>
                  <li>
                    w czasie aktywności może wchodzić w interakcje z innymi Zwierzętami, w obrębie
                    swojego stada, na tyle intensywnie, że może ulec zranieniu;
                  </li>
                  <li>
                    w wyniku silnego stresu jego stan zdrowia może ulec pogorszeniu, a nawet może
                    dojść do zgonu;
                  </li>
                </ul>
              </li>
              <li>
                Właściciel oświadcza, iż nie będzie wnosić żadnych roszczeń przeciwko Opiekunowi lub
                innym właścicielom zwierząt związanych z okolicznościami, o których mowa w pkt 2.3.
              </li>
              <li>
                Klient ponosi odpowiedzialność odszkodowawczą za szkody wyrządzone przez Zwierzę, w
                tym w szczególności za uszkodzenia osób, innych zwierząt lub mienia.
              </li>
              <li>
                Opiekun uprawniony jest do podejmowania czynności zmierzających do polepszenia
                komfortu życia i/lub poprawy zdrowia Zwierzęcia podczas Pobytu. Podjęcie powyższych
                działań w uzasadnionych przypadkach nie wymaga zgody Klienta i odbywa się na jego
                koszt.
              </li>
              <li>
                Klientowi, który jest konsumentem w rozumieniu art. 22 (1) Kodeksu cywilnego, nie
                przysługuje prawo do odstąpienia od umowy zgodnie z art. 38 ust. 1 pkt 12 ustawy o
                prawach konsumenta (Dz.U. 2014 poz. 827 z późn. zm.).
              </li>
            </ol>
          </div>

          {/* Subsection 3 */}
          <div className="mt-8">
            {/* Subheader */}
            <h3
              className="mb-6 text-left"
              style={{
                fontSize: 'var(--font-size-heading-sm)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: '1.2',
              }}
            >
              3. Warunki pobytu
            </h3>

            {/* Icon with subtitle */}
            <div className="flex items-start gap-4 mb-6">
              <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <p
                className="text-left"
                style={{
                  fontSize: 'var(--font-size-text-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.6',
                }}
              >
                Warunki pobytu oraz zasady odbioru lub porzucenia Zwierzęcia.
              </p>
            </div>

            {/* Numbered list */}
            <ol
              className="space-y-0.5 text-left list-decimal pl-6"
              style={{
                fontSize: 'var(--font-size-text-sm)',
                color: 'var(--color-text-primary)',
                lineHeight: '1.6',
              }}
            >
              <li>
                Opiekun w czasie Pobytu zapewnia akcesoria takie jak: klatka lub kojec, poidło,
                miska, kuweta, opcjonalnie domek lub hamak. Opiekun zapewnia także zapas siana,
                suszonych ziół, wody, warzyw/owoców oraz żwirku drewnianego/trocin/jednorazowych
                podkładów higienicznych. Wszelkie inne produkty takie jak karma podstawowa, karma
                ratunkowa, leki, suplementy i inne, zapewnia Właściciel i/lub mogą zostać zakupione
                przez Opiekuna na koszt Właściciela.
              </li>
              <li>
                Zwierzęta powinny być dostarczone do Hotelu w transporterze, bez klatki – chyba, że
                dokonano innych ustaleń w toku dokonywania Rezerwacji lub wymaga tego stan zdrowia
                Zwierzęcia.
              </li>
              <li>
                Opiekun zastrzega sobie prawo do skrócenia Pobytu w przypadku gdy Zwierzę stanowi
                bezpośrednie zagrożenie dla swojego życia lub zdrowia, a także dla życia i zdrowia
                ludzi, innych zwierząt lub mienia. W takim przypadku Właściciel zobowiązany jest
                odebrać Zwierzę (osobiście lub przez upoważnioną osobę) w terminie 24 godzin od
                otrzymania informacji o wypowiedzeniu Umowy przez Opiekuna.
              </li>
              <li>
                Opłata naliczana jest za każdą rozpoczętą dobę Pobytu. Początek Pobytu liczony jest
                od chwili przewiezienia Zwierzęcia do Hotelu.
              </li>
              <li>
                Skrócenie lub odwołanie Pobytu Zwierzęcia niezależnie od przyczyn nie uprawnia
                Klienta do żądania zwrotu dokonanej opłaty. W przypadku gdy opłata nie została
                uiszczona, Opiekun uprawniony jest do żądania jej zapłaty w całości.
              </li>
              <li>
                Przekazanie oraz odbiór Zwierzęcia mogą mieć miejsce między 9:00 a 20:00 – od
                poniedziałku do niedzieli. Konieczne jest wcześniejsze ustalenie dokładnej godziny
                odbioru. Opiekun nie gwarantuje swojej dostępności w godzinach innych niż wcześniej
                ustalone.
              </li>
              <li>
                Pobyt nie może rozpocząć się i zakończyć się w dni świąteczne (zgodnie z polskim
                kalendarzem). W szczególnie uzasadnionych przypadkach, w miarę dostępności Opiekuna,
                odbiór/przekazanie Zwierzęcia jest możliwe w dni wolne i/lub w godzinach nocnych za
                dopłatą wskazaną przez Opiekuna.
              </li>
              <li>
                W przypadku gdy Właściciel nie odbierze Zwierzęcia w wyznaczonym terminie, nie
                poinformuje Opiekuna o woli zmiany terminu odbioru Zwierzęcia (przedłużenie Pobytu),
                a także nie podejmie kontaktu z Opiekunem w terminie 5 dni od zakończenia umówionego
                Pobytu – będzie to równoznaczne z porzuceniem zwierzęcia przez Właściciela. Opiekun
                zastrzega sobie prawo do przekazania zwierzęcia pod opiekę wybranej organizacji lub
                właściwej jednostki samorządowej (schronisko). Opiekun może zawiadomić także
                odpowiednie służby o naruszeniu przez Właściciela przepisów ustawy z dnia 21
                sierpnia 1997 roku o ochronie zwierząt (Dz.U. 1997 nr 111 poz. 724 z późn. zm.).
              </li>
            </ol>
          </div>

          {/* Subsection 4 - Płatność */}
          <div className="mt-8">
            {/* Subheader */}
            <h3
              className="mb-6 text-left"
              style={{
                fontSize: 'var(--font-size-heading-sm)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: '1.2',
              }}
            >
              4. Płatność
            </h3>

            {/* Icon with subtitle */}
            <div className="flex items-start gap-4 mb-6">
              <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <p
                className="text-left"
                style={{
                  fontSize: 'var(--font-size-text-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.6',
                }}
              >
                Jakie są warunki płatności? Dowiesz się tego w tym rozdziale.
              </p>
            </div>

            {/* Numbered list */}
            <ol
              className="space-y-0.5 text-left list-decimal pl-6"
              style={{
                fontSize: 'var(--font-size-text-sm)',
                color: 'var(--color-text-primary)',
                lineHeight: '1.6',
              }}
            >
              <li>
                Opłata za Usługę musi być uiszczona w całości najpóźniej w dniu rozpoczęcia Pobytu
                chyba, że Strony ustaliły inaczej.
              </li>
              <li>
                Po akceptacji warunków Rezerwacji przez Strony dokonana opłata nie podlega
                zmniejszeniu lub zwrotowi.
              </li>
              <li>
                Klient zezwala na przesyłanie drogą elektroniczną paragonu, faktury lub innych
                przewidzianych prawem dowodów zakupu.
              </li>
            </ol>
          </div>

          {/* Subsection 5 - Dane osobowe */}
          <div className="mt-8">
            {/* Subheader */}
            <h3
              className="mb-6 text-left"
              style={{
                fontSize: 'var(--font-size-heading-sm)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: '1.2',
              }}
            >
              5. Dane osobowe
            </h3>

            {/* Icon with subtitle */}
            <div className="flex items-start gap-4 mb-6">
              <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <p
                className="text-left"
                style={{
                  fontSize: 'var(--font-size-text-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.6',
                }}
              >
                Więcej o danych osobowych znajdziesz w naszej Polityce Prywatności.
              </p>
            </div>

            {/* Numbered list */}
            <ol
              className="space-y-0.5 text-left list-decimal pl-6"
              style={{
                fontSize: 'var(--font-size-text-sm)',
                color: 'var(--color-text-primary)',
                lineHeight: '1.6',
              }}
            >
              <li>
                Administratorem danych osobowych Klientów jest Opiekun. Dane osobowe Klienta
                przetwarzane są przez Opiekuna w zakresie niezbędnym do realizacji Usługi.
                Szczegółowe regulacje dotyczące danych osobowych dostępne są w Polityce Prywatności.
              </li>
            </ol>
          </div>

          {/* Subsection 6 - Postanowienia różne */}
          <div className="mt-8">
            {/* Subheader */}
            <h3
              className="mb-6 text-left"
              style={{
                fontSize: 'var(--font-size-heading-sm)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: '1.2',
              }}
            >
              6. Postanowienia różne
            </h3>

            {/* Icon with subtitle */}
            <div className="flex items-start gap-4 mb-6">
              <img src={aboutIcon2.src} alt="" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <p
                className="text-left"
                style={{
                  fontSize: 'var(--font-size-text-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.6',
                }}
              >
                Na sam koniec chcieliśmy dać Ci znać, jak wygląda procedura zmiany regulaminu.
              </p>
            </div>

            {/* Numbered list */}
            <ol
              className="space-y-0.5 text-left list-decimal pl-6"
              style={{
                fontSize: 'var(--font-size-text-sm)',
                color: 'var(--color-text-primary)',
                lineHeight: '1.6',
              }}
            >
              <li>
                Umowy zawierane są zgodnie z prawem polskim, a w zakresie nieuregulowanym w
                niniejszym dokumencie zastosowanie mają przepisy kodeksu cywilnego, a w zakresie
                dobrostanu Zwierząt także przepisy aktów prawnych odnoszących się do ochrony praw
                zwierząt.
              </li>
              <li>
                Ewentualne spory powstałe pomiędzy Opiekunem a Klientem w pierwszej kolejności będą
                rozwiązywane w sposób polubowny w drodze wzajemnych negocjacji. W przypadku braku
                uzyskania wzajemnego porozumienia w zakresie kwestii spornych, sprawa będzie
                rozstrzygana przez sąd właściwości ogólnej.
              </li>
              <li>
                Opiekun zastrzega sobie prawo zmian postanowień niniejszego Regulaminu. Dokonując
                zmian Regulaminu Opiekun zobowiązuje się jednocześnie do publikacji jednolitego
                tekstu Regulaminu na portalu ze wskazaniem daty obowiązywania zmian, a także poprzez
                wysyłanie wzmianki o zmianach treści na adres e-mail Klienta.
              </li>
              <li>
                Treść niniejszego Regulaminu dostępna jest na portalu. Regulamin można utrwalić,
                pozyskać i odtworzyć w każdym czasie poprzez jego wydrukowanie, zapisanie na
                odpowiednim nośniku lub pobranie go w formacie PDF i zapisanie go w pamięci
                komputera ze strony internetowej.
              </li>
              <li>Aktualna wersja regulaminu została opublikowana 10.06.2025.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
