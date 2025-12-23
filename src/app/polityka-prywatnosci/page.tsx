import type { Metadata } from 'next';
import aboutIcon2 from '../../assets/aboutIcon2.svg';

export const metadata: Metadata = {
  title: 'Polityka Prywatności - Hotelik "Susełek"',
  description:
    'Polityka Prywatności Hoteliku Susełek. Zapoznaj się z zasadami przetwarzania danych osobowych, informacjami o celach przetwarzania, odbiorcach danych oraz przysługujących prawach.',
  keywords: [
    'polityka prywatności',
    'ochrona danych',
    'RODO',
    'dane osobowe',
    'prywatność',
    'hotel dla zwierząt',
  ],
  openGraph: {
    title: 'Polityka Prywatności - Hotelik "Susełek"',
    description:
      'Polityka Prywatności Hoteliku Susełek. Zapoznaj się z zasadami przetwarzania danych osobowych w naszej firmie.',
    type: 'website',
  },
  alternates: {
    canonical: '/polityka-prywatnosci',
  },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main header */}
        <h1 className="text-center mb-12" style={{ fontSize: '74px', lineHeight: '1.2' }}>
          <span style={{ fontWeight: 700, fontStyle: 'italic' }}>Polityka </span>
          <span style={{ fontWeight: 300, fontStyle: 'normal' }}>Prywatności </span>
          <br />
          <span style={{ fontWeight: 700, fontStyle: 'italic' }}>Hoteliku "Susełek"</span>
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
            Polityka Prywatności Hoteliku "Susełek"
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
              Zanim rozpoczniesz zakupy prosimy o zapoznanie się z niniejszą Polityką Prywatności,
              która określa najważniejsze zasady w zakresie przetwarzania Twoich danych osobowych.
            </p>

            <p>
              Właścicielem portalu jest Aleksandra Bursztyńska-Kostrzewa prowadząca działalność
              gospodarczą pod firmą Hotelik Susełek Aleksandra Bursztyńska-Kostrzewa, ul.
              Kasztanowa, nr 2, 05-830 Nadarzyn, NIP: 7010199366.
            </p>

            <p>
              Jeśli chcesz się z nami skontaktować w jakiejkolwiek sprawie napisz:{' '}
              <a href="mailto:hotelik.suselek@gmail.com" className="text-primary hover:underline">
                hotelik.suselek@gmail.com
              </a>{' '}
              lub zadzwoń{' '}
              <a href="tel:+48601155887" className="text-primary hover:underline">
                +48 601 155 887
              </a>
            </p>
          </div>
        </div>

        {/* Jakie dane przetwarzamy Section */}
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
            Jakie dane przetwarzamy?
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
              Na potrzeby, o których piszemy poniżej zbieramy i przetwarzamy następujące dane
              osobowe:
            </p>
          </div>

          {/* Content */}
          <div
            className="space-y-4 text-left"
            style={{
              fontSize: 'var(--font-size-text-sm)',
              color: 'var(--color-text-primary)',
              lineHeight: '1.6',
            }}
          >
            <p>
              <strong>1.1. Dane identyfikacyjne.</strong> Dane takie jak: Imię, Nazwisko, adres
              zamieszkania są konieczne do złożenia Rezerwacji, zawarcia umowy, świadczenia usług,
              prowadzenia obsługi klienta, a także założenia konta użytkownika na portalu. W
              uzasadnionych wypadkach możemy także żądać podania przez Ciebie numeru PESEL.
            </p>
            <p>
              <strong>1.2. Dane kontaktowe.</strong> Adres e-mail jest niezbędny do złożenia
              Rezerwacji oraz zarejestrowania konta użytkownika na portalu. W zakresie kontaktu z
              użytkownikiem możemy przetwarzać także numer telefonu naszych klientów.
            </p>
            <p>
              <strong>1.3. Dane dotyczące sprzedaży usług.</strong> W celu realizacji zobowiązań
              wobec naszych klientów oraz w związku z obowiązkami prawnymi możemy przetwarzać dane
              dotyczące sprzedaży usług takie jak numer rezerwacji, dane dotyczące płatności, dane
              dotyczące wykonania usługi itp.
            </p>
            <p>
              <strong>1.4. Informacje dotyczące przeglądania portalu.</strong> Dane takie jak: czas
              dostępu, liczba przypadków uzyskania dostępu, adres IP i informacje o zdarzeniach
              (takich jak błędy, zawieszenia, ponowne uruchomienia i aktualizacje do nowych wersji)
              i inne dane diagnostyczne, techniczne, informacje o błędach i użytkowaniu, np. godzina
              i czas korzystania z usług, wyszukiwane terminy wprowadzone przez Użytkownika na
              urządzeniu oraz wszelkie informacje przechowywane w plikach cookie umieszczonych na
              urządzeniu Użytkownika.
            </p>
            <p>
              <strong>1.5. Cookies.</strong> Na portalu korzystamy z Ciasteczek. Są to dane
              informatyczne, które są przechowywane na urządzeniu końcowym. Zazwyczaj zawierają
              nazwę strony internetowej, z której pochodzą, czas przechowywania oraz numer.
            </p>
          </div>
        </div>

        {/* Cele przetwarzania Section */}
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
            Cele przetwarzania danych osobowych
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
              Państwa dane osobowe przetwarzane są w następujących celach:
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
              przeprowadzenie procesu rezerwacji i wykonania usługi — dane identyfikacyjne, dane
              kontaktowe - na podstawie art. 6 ust. 1 lit. b RODO(niezbędność do zawarcia i/lub
              wykonania umowy);
            </li>
            <li>
              utworzenie i prowadzenie konta klienta— dane identyfikacyjne, dane kontaktowe, dane
              sprzedaży usług - na podstawie art. 6 ust. 1 lit. a RODO (zgoda) oraz na podstawie
              art. 6 ust. 1 lit. b RODO(niezbędność do zawarcia i/lub wykonania umowy w zakresie
              prowadzenia konta użytkownika);
            </li>
            <li>
              rozpatrzenia reklamacji— dane identyfikacyjne, dane kontaktowe, dane sprzedaży usług-
              na podstawie art. 6 ust. 1 lit. b RODO (niezbędność do zawarcia i/lub wykonania
              umowy);
            </li>
            <li>
              kontakt w sprawach związanych z realizacją umowy lub ofertą Administratora — dane
              identyfikacyjne, dane kontaktowe, dane dotyczące sprzedaży usług -na podstawie art. 6
              ust. 1 lit. b RODO (niezbędność do zawarcia i/lub wykonania umowy);
            </li>
            <li>
              wystawienia faktury i spełnienia innych obowiązków wynikających z przepisów prawa
              podatkowego — dane identyfikacyjne, dane kontaktowe, dane dotyczące sprzedaży usług
              -na podstawie art. 6 ust. 1 lit. c RODO (niezbędność do wypełnienia obowiązku
              prawnego przez Spółkę);
            </li>
            <li>
              marketing bezpośredni — dane kontaktowe -na podstawie art. 6 ust. 1 lit. a RODO
              (zgoda);
            </li>
            <li>
              ustalenia, dochodzenia lub obrony przed roszczeniami - dane identyfikacyjne, dane
              kontaktowe, dane sprzedaży usług—na podstawie art. 6 ust. 1 lit. f RODO (prawnie
              uzasadniony interes Administratora Danych Osobowych); prawnie uzasadnionym interesem
              Administratora jest ochrona interesu majątkowego Administratora oraz użytkowników;
            </li>
            <li>
              archiwalnym i dowodowym, na potrzeby zabezpieczenia informacji, które mogą służyć
              wykazywaniu faktów- dane identyfikacyjne, dane kontaktowe, dane sprzedaży —na
              podstawie art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora Danych
              Osobowych); prawnie uzasadnionym interesem Administratora jest posiadanie informacji
              potrzebnych np. organom państwowym;
            </li>
            <li>
              analitycznym, polegającym między innymi na analizie danych zbieranych automatycznie
              przy korzystaniu z portalu - Informacje dotyczące przeglądania Portalu, cookies —na
              podstawie art. 6 ust. 1 lit. a (zgoda) oraz art. 6 ust. 1 lit. f RODO (prawnie
              uzasadniony interes Administratora Danych Osobowych); prawnie uzasadnionym interesem
              Administratora jest poznanie aktywności użytkowników;
            </li>
            <li>
              administrowania stroną internetową - Informacje dotyczące przeglądania portalu —na
              podstawie art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora Danych
              Osobowych); prawnie uzasadnionym interesem Administratora jest sprawne zarządzanie
              serwisem;
            </li>
            <li>
              zamieszczenia komentarza na stronie internetowej - dane identyfikacyjne, dane
              kontaktowe —na podstawie art. 6 ust. 1 lit. a RODO (zgoda);
            </li>
          </ol>

          <div className="mt-6">
            <p
              className="text-left"
              style={{
                fontSize: 'var(--font-size-text-sm)',
                color: 'var(--color-text-primary)',
                lineHeight: '1.6',
              }}
            >
              W każdej chwili możesz wycofać udzieloną zgodę, przy czym wycofanie zgody pozostaje
              bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody
              przed jej cofnięciem.
            </p>
          </div>

          {/* Subsection */}
          <div className="mt-8">
            <h3
              className="mb-4 text-left"
              style={{
                fontSize: 'var(--font-size-heading-sm)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: '1.2',
              }}
            >
              Dobrowolność podania danych
            </h3>

            <p
              className="text-left mb-4"
              style={{
                fontSize: 'var(--font-size-text-sm)',
                color: 'var(--color-text-primary)',
                lineHeight: '1.6',
              }}
            >
              Podanie wszystkich danych osobowych jest dobrowolne, jednak:
            </p>

            <ul
              className="space-y-2 text-left list-disc pl-6"
              style={{
                fontSize: 'var(--font-size-text-sm)',
                color: 'var(--color-text-primary)',
                lineHeight: '1.6',
              }}
            >
              <li>
                podanie takich danych, jak imię oraz adres e-mail jest konieczne do wyceny usługi
                (rezerwacji) i zawarcia umowy (bez tych danych wykonanie usługi będzie niemożliwe);
              </li>
              <li>
                podanie takich danych, jak imię, adres e-mail, numer zlecenia jest konieczne do
                rozpatrzenia reklamacji, (bez tych danych rozpatrzenie reklamacji nie będzie
                możliwe);
              </li>
              <li>
                podanie takich danych, jak imię i nazwisko lub firma, adres siedziby, numer NIP
                jest konieczne do wystawienia faktury za usługi i wynika to z przepisów prawa (bez
                tych danych wystawienie faktury nie będzie możliwe);
              </li>
            </ul>
          </div>
        </div>

        {/* Odbiorcy danych Section */}
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
            Odbiorcy danych
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
              Twoje dane osobowe mogą zostać ujawnione określonym podmiotom.
            </p>
          </div>

          {/* Content */}
          <p
            className="text-left"
            style={{
              fontSize: 'var(--font-size-text-sm)',
              color: 'var(--color-text-primary)',
              lineHeight: '1.6',
            }}
          >
            Twoje dane osobowe mogą zostać ujawnione naszym partnerom biznesowym - m.in. prawnikom,
            firmom obsługującym płatności, firmie hostingowej, firmie księgowej, firmie
            ubezpieczeniowej, firmie odpowiedzialnej za zarządzanie obsługą klienta, firmie
            dostarczającej nam oprogramowanie, a także podmiotom wspomagającym nas w zbieraniu
            opinii o naszych usługach. Oprócz tego możemy zostać zobowiązani np. na podstawie
            przepisu prawa do udostępnienia Twoich danych osobowych podmiotom prywatnym i/lub
            publicznym.
          </p>
        </div>

        {/* Przekazywanie danych Section */}
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
            Przekazywanie danych osobowych do państwa trzeciego lub organizacji międzynarodowej
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
              Przekazywanie danych osobowych do państwa trzeciego lub organizacji międzynarodowej
              następuje zgodnie z poniższymi zasadami.
            </p>
          </div>

          {/* Content */}
          <div
            className="space-y-4 text-left"
            style={{
              fontSize: 'var(--font-size-text-sm)',
              color: 'var(--color-text-primary)',
              lineHeight: '1.6',
            }}
          >
            <p>
              Administrator Danych Osobowych nie przekazuje Twoich danych osobowych do organizacji
              międzynarodowych.
            </p>
            <p>
              W przypadku gdyby doszło do przekazania danych osobowych do podmiotów spoza EOG
              odbywać będzie się to na podstawie wyrażonej zgody lub w zakresie niezbędnym do
              wykonania zawartej umowy.
            </p>
            <p>
              Informujemy, że w przypadku przekazywania Twoich danych osobowych do podmiotów spoza
              EOG istnieje ryzyko braku zapewnienia równorzędnego do wynikającego z RODO stopnia
              ochrony Państwa danych osobowych przez kraje, w których siedziby mają te podmioty.
            </p>
          </div>
        </div>

        {/* Jak długo przechowujemy Section */}
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
            Jak długo przechowujemy dane osobowe?
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
              Twoje dane osobowe będą przechowywane:
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
              przez okres trwania umowy —w przypadku danych osobowych przetwarzanych w celu zawarcia
              i wykonania umowy;
            </li>
            <li>
              przez okres 3 lat lub 6 lat + 1 rok —w odniesieniu do danych osobowych przetwarzanych
              w celu ustalenia, dochodzenia i obrony roszczeń (długość okresu zależy od tego, czy
              obie strony są przedsiębiorcami, czy też nie)
            </li>
            <li>
              przez okres 6 miesięcy —w odniesieniu do danych osobowych, które zostały zebrane przy
              wycenie usługi (dokonanie Rezerwacji), a jednocześnie nie doszło do zawarcia umowy,
              tj. przetwarzanych w celu ewentualnego zawarcia umowy;
            </li>
            <li>
              przez okres 5 lat —w odniesieniu do danych osobowych przetwarzanych w celu wywiązania
              się z obowiązków podatkowych;
            </li>
            <li>
              do czasu cofnięcia zgody —w odniesieniu do danych osobowych przetwarzanych na
              podstawie zgody;
            </li>
            <li>
              do czasu skutecznego wniesienia sprzeciwu lub osiągnięcia celu przetwarzania, jednak
              nie dłużej niż przez 5 lat —w odniesieniu do danych osobowych przetwarzanych na
              podstawie prawnie uzasadnionego interesu Administratora Danych Osobowych lub do celów
              marketingowych;
            </li>
            <li>
              do czasu zdezaktualizowania się lub utraty przydatności, jednak nie dłużej niż przez 3
              lata —w odniesieniu do danych osobowych przetwarzanych głównie do celów analitycznych,
              wykorzystania cookies i administrowania stroną internetową.
            </li>
          </ol>
        </div>

        {/* Prawa użytkowników Section */}
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
            Państwa prawa w zakresie przetwarzania danych osobowych
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
              Informacje o przysługujących Ci prawach w związku z przetwarzaniem danych osobowych.
            </p>
          </div>

          {/* Content */}
          <div
            className="space-y-4 text-left"
            style={{
              fontSize: 'var(--font-size-text-sm)',
              color: 'var(--color-text-primary)',
              lineHeight: '1.6',
            }}
          >
            <p>
              Przysługuje Ci prawo: dostępu do treści danych, prawo do żądania sprostowania danych,
              ich usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych oraz prawo
              wniesienia sprzeciwu względem przetwarzania danych.
            </p>
            <p>
              Wniosek o realizację przysługujących Ci praw możesz zgłosić na adres email{' '}
              <a href="mailto:hotelik.suselek@gmail.com" className="text-primary hover:underline">
                hotelik.suselek@gmail.com
              </a>
              .
            </p>
            <p>
              We wniosku powinieneś podać dane, które pozwolą nam Cię jednoznacznie zidentyfikować.
            </p>
          </div>
        </div>

        {/* Prawo do skargi Section */}
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
            Informacje o prawie wniesienia skargi do organu nadzorczego
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
              Możesz złożyć skargę w przypadku niezgodności przetwarzania danych z prawem.
            </p>
          </div>

          {/* Content */}
          <p
            className="text-left"
            style={{
              fontSize: 'var(--font-size-text-sm)',
              color: 'var(--color-text-primary)',
              lineHeight: '1.6',
            }}
          >
            Przysługuje Ci prawo do wniesienia skargi do organu nadzorczego zajmującego się ochroną
            danych osobowych- do Prezesa Urzędu Ochrony Danych Osobowych, gdy uznasz, że
            przetwarzanie Twoich danych osobowych niezgodnie z prawem.
          </p>
        </div>

        {/* Środki bezpieczeństwa Section */}
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
            Środki bezpieczeństwa
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
              Stosujemy odpowiednie zabezpieczenia techniczne i organizacyjne.
            </p>
          </div>

          {/* Content */}
          <p
            className="text-left"
            style={{
              fontSize: 'var(--font-size-text-sm)',
              color: 'var(--color-text-primary)',
              lineHeight: '1.6',
            }}
          >
            Dokładamy wszelkich możliwych starań, aby zabezpieczyć Twoje dane osobowe i ochronić je
            przed działaniami osób trzecich. Stosujemy wszelkie niezbędne zabezpieczenia serwerów,
            połączeń i strony internetowej w celu ochrony danych, w szczególności szyfrowanie SSL.
            Wszystkie połączenia związane z wykonywaniem płatności przez naszych klientów będą
            następować za pośrednictwem bezpiecznego szyfrowanego połączenia. Informujemy, że
            podjęte przez nas działania mogą okazać się jednak niewystarczające, jeżeli nasi
            klienci sami nie zachowają zasad bezpieczeństwa. W szczególności każdy użytkownik
            powinien zachować w poufności login i hasło do swojego konta na stronie internetowej i
            nie udostępniać ich osobom trzecim. Informujemy, że nigdy nie zwracamy się do naszych
            klientów o podanie danych do logowania.
          </p>
        </div>
      </div>
    </div>
  );
}

