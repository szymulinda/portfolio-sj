import { faqs } from "@/lib/content";

export const tworzenieStron = {
  lead: "Projektuję i koduję strony internetowe dla firm z Opola i województwa opolskiego. Nie używam WordPressa ani kreatorów - piszę dedykowany kod w Next.js, tej samej technologii, w której powstają produkty cyfrowe. Ceny zaczynają się od 3 500 zł netto, a pierwszą transzę płacisz dopiero po akceptacji projektu graficznego.",
  insteadIntro:
    "Szablon obiecuje szybki start. Po roku zostaje wolne ładowanie, opłaty za wtyczki i strach przed każdą aktualizacją. Zamiast tego dostajesz stronę napisaną pod Twoją ofertę, z kodem, który da się utrzymać i zabrać. Poniżej trzy rzeczy, które realnie odczuwasz po wdrożeniu - nie lista technologii dla technologii.",
  instead: [
    {
      title: "Dedykowany kod w Next.js",
      paragraphs: [
        "Strona jest składana zanim ktokolwiek ją odwiedzi. Serwer oddaje gotowy dokument, a nie składa go z bazy danych przy każdym wejściu. Dla Ciebie znaczy to prosto: strona pojawia się poniżej sekundy, także na słabszym telefonie.",
        "Nie ma wtyczek do łatania i nie ma panelu, który wystawia się na atak. Mniej ruchomych części to mniej awarii i mniej rachunków za gaszenie pożarów. Aktualizacja oferty nie wymaga czekania, aż ktoś zgra wtyczki i sprawdzi, czy motyw nadal działa.",
      ],
    },
    {
      title: "Pełne prawa do kodu po rozliczeniu",
      paragraphs: [
        "Po zapłaceniu ostatniej faktury kod jest Twoją własnością. Możesz go oddać innemu wykonawcy, wrzucić na własny serwer albo rozwinąć we własnym zespole.",
        "Nie ma abonamentu za sam fakt posiadania strony i nie ma licencji, które trzeba przedłużać, żeby witryna w ogóle działała. Płacisz za robotę, nie za dzierżawę.",
      ],
    },
    {
      title: "Wynik 95+ w Lighthouse na dzień wydania",
      paragraphs: [
        "Lighthouse to narzędzie Google, które mierzy szybkość, dostępność i podstawy techniczne strony. Wysoki wynik nie jest ozdobą w ofercie - szybkość jest jednym z czynników rankingowych, a wolna strona gubi ludzi na telefonie, zanim zdążą przeczytać ofertę.",
        "Gwarantuję 95+ w dniu wydania. Zastrzeżenie jest uczciwe: piksel reklamowy, widżet czatu albo ciężki film wklejony później mogą ten wynik obniżyć. Wtedy widać koszt dodatku, zanim go włączymy.",
      ],
    },
  ],
  collaborationIntro:
    "Współpraca ma cztery etapy. Wiesz, co się dzieje, ile to trwa i czego potrzebuję od Ciebie. Nie zaczynam kodowania, dopóki nie zaakceptujesz kierunku. Poniżej ten sam proces co na stronie głównej, tylko z operacyjnymi szczegółami: czas, materiały, moment płatności.",
  collaboration: [
    {
      step: "01",
      title: "Rozmowa",
      paragraphs: [
        "Piętnaście do trzydziestu minut. Pytam, co firma robi, skąd dziś przychodzą klienci i co strona ma realnie załatwiać: zapytanie, telefon, rezerwację.",
        "Od Ciebie potrzebuję krótkiego opisu usług i przykładów konkurencji, które uważasz za jasne albo za złe. Nie potrzebuję gotowej specyfikacji. Termin: zwykle w tym samym tygodniu, w którym piszesz.",
      ],
    },
    {
      step: "02",
      title: "Projekt",
      paragraphs: [
        "Przygotowuję układ strony i kierunek wizualny. Widzisz strukturę, hierarchię treści i jak to będzie wyglądać na telefonie, zanim powstanie linijka produkcyjnego kodu.",
        "Ten etap trwa zwykle kilka dni roboczych, jeśli mam od Ciebie teksty robocze albo zgodę, żebym złożył szkic na podstawie rozmowy. Im mniej zgaduję ofertę, tym mniej rund.",
      ],
    },
    {
      step: "03",
      title: "Decyzja",
      paragraphs: [
        "Akceptujesz projekt i wtedy płacisz pierwszą transzę. Do tego momentu nie wystawiam faktury za wykonanie strony.",
        "Jeśli kierunek Ci nie odpowiada, rozstajemy się bez kosztów z Twojej strony. Nie trzymam projektu w szufladzie jako dźwigni. Albo idziemy dalej świadomie, albo nie idziemy.",
      ],
    },
    {
      step: "04",
      title: "Budowa i wdrożenie",
      paragraphs: [
        "Koduję, testuję na telefonie i komputerze, uruchamiam pod Twoją domeną. Podpinam analitykę i wizytówkę Google, jeśli jej potrzebujesz.",
        "Na koniec dostajesz krótkie nagranie, jak samodzielnie edytować treści w panelu, bez ryzyka rozjechania układu. Strona jednosekcyjna mieści się zwykle w dwóch tygodniach, większa - w czterech, licząc od akceptacji projektu i kompletnych materiałów.",
      ],
    },
  ],
  timingIntro:
    "Termin nie jest magią. Zależy od zakresu i od tego, czy materiały są na starcie, czy spływają po kawałku. Poniższe ramy liczę od akceptacji projektu, nie od pierwszej wiadomości.",
  timing: [
    "Strona jednosekcyjna, jeden przekaz, formularz: do 2 tygodni od akceptacji projektu.",
    "Strona z kilkoma podstronami, cennikiem, mapą, galerią i panelem do treści: do 4 tygodni.",
    "Wydłuża pracę brak tekstów, brak zdjęć albo wiele rund poprawek po akceptacji kierunku. Każda nowa runda to nie złośliwość - to po prostu kolejny tydzień w kalendarzu.",
    "Przyspiesza start z gotowymi tekstami, zdjęciami i decyzją, kto zatwierdza projekt. Jedna osoba decyzyjna jest warta więcej niż duży zespół na kopii.",
  ],
  compareIntro:
    "WordPress nie jest wrogiem. Jest narzędziem z inną ceną wejścia i innym kosztem utrzymania. Poniżej uczciwe zestawienie, bez udawania, że jedna strona pasuje do każdego budżetu.",
  compare: {
    headers: ["Kryterium", "WordPress + wtyczki", "Kod dedykowany"],
    rows: [
      [
        "Czas ładowania",
        "Często 3-6 sekund, gdy narasta liczba wtyczek i cache przestaje wystarczać.",
        "Poniżej sekundy w dniu wydania, bo strona idzie do przeglądarki gotowa.",
      ],
      [
        "Koszty roczne",
        "Hosting, motywy, wtyczki premium, czasem agencja od aktualizacji. Łatwo przekroczyć kilka tysięcy złotych.",
        "Hosting i ewentualna opieka. Brak licencji wtyczek, bo ich nie instaluję.",
      ],
      [
        "Aktualizacje",
        "Trzeba je robić. Odłożone aktualizacje kończą się dziurami albo rozjechanym układem.",
        "Nie ma comiesięcznej rundy wtyczek. Zmiany są celowe, nie wymuszone przez cudzy harmonogram.",
      ],
      [
        "Podatność na włamania",
        "Duża powierzchnia: wtyczki, logowanie, znane luki. Tanie motywy są częstym wektorem.",
        "Mała powierzchnia: statyczne pliki, brak bazy po stronie odwiedzającego, brak panelu wystawionego na świat bez potrzeby.",
      ],
      [
        "Edycja treści",
        "Bogaty edytor, dużo przycisków, łatwo zepsuć margines albo wkleić formatowanie z Worda.",
        "Panel ograniczony do pól, które mają się zmieniać. Trudniej rozjechać układ, mniej pokus.",
      ],
      [
        "Prawa do kodu",
        "Motyw i wtyczki zostają na licencjach. Wyjście z wykonawcy nie zawsze znaczy pełną niezależność.",
        "Po rozliczeniu kod jest Twój. Możesz go przenieść.",
      ],
      [
        "Pozycja startowa w Google",
        "Da się pozycjonować, ale wolna strona i duplikaty z wtyczek utrudniają start.",
        "Szybkość i czysty HTML dają lepszy punkt wyjścia. Same z siebie nie zastąpią treści i wizytówki Google.",
      ],
    ],
    note: "WordPress wygrywa, gdy budżet jest niski, potrzebujesz wielu gotowych rozszerzeń albo chcesz łatwo zmienić wykonawcę na rynku pełnym freelancerów WP. Kod dedykowany wygrywa, gdy liczysz koszty w horyzoncie roku i nie chcesz utrzymywać stosu wtyczek.",
  },
  notForIntro:
    "Część zapytań lepiej odrzucić na starcie niż ciągnąć projekt, który będzie tarciem dla obu stron. Jeśli którykolwiek punkt poniżej to Twoja sytuacja, powiedz o tym od razu - wskażę tańszą ścieżkę albo odmówię, zamiast obiecywać coś, czego nie dowiozę.",
  notFor: [
    "Budżet poniżej 3 500 zł netto. Taniej będzie na kreatorze albo prostym motywie - świadomie, z jego ograniczeniami.",
    "Strona na jutro. Dwa tygodnie to dolny, realny próg, nie slogan.",
    "Chęć samodzielnego instalowania wtyczek i dokładania funkcji click-by-click. Tego modelu nie utrzymuję.",
    "Prosty blog albo sklep, który ma działać na gotowej platformie z płatnościami i magazynem z pudełka. Tam lepszy jest sprawdzony silnik e-commerce, nie strona firmowa pisana od zera.",
  ],
  faqs,
  close:
    "Jeśli ten model Ci odpowiada, napisz czym się zajmujesz i co strona ma załatwiać. Cennik pakietów jest osobno, bez ukrytych widełek.",
};
