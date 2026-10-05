export const site = {
  name: "szymonjurkun.pl",
  email: "kontakt@szymonjurkun.pl",
  title: "Strony internetowe Opole - Szymon Jurkun",
  description:
    "Strony internetowe dla firm z Opola i okolic. Dedykowany kod zamiast szablonów WordPress, ładowanie poniżej sekundy, jawne ceny od 3 500 zł netto.",
};

export const CALENDAR_URL = "https://cal.com/szymon-jurkun/15min";

export const hero = {
  line1: "Strony internetowe, które",
  accent: "przynoszą zapytania",
  line2rest: ", nie tylko wyglądają",
  support:
    "Buduję strony w tej samej technologii, w której powstają produkty cyfrowe - nie na szablonach z wtyczkami. Ładują się poniżej sekundy, co Google premiuje w wynikach lokalnych. Prowadzę własną firmę technologiczną, więc patrzę na Twoją stronę od strony zapytań i kosztów, nie tylko wyglądu.",
  primaryCta: "Umów 15-minutową rozmowę",
  secondaryCta: "Zobacz cennik",
};

export const problem = {
  label: "Dlaczego to ma znaczenie",
  heading: "Tania strona",
  headingAccent: "kosztuje najwięcej",
  paragraphs: [
    "Większość stron dla małych firm powstaje na WordPressie z kilkunastoma wtyczkami. Efekt widać po roku: strona ładuje się cztery sekundy, na telefonie użytkownik nie doczekuje, a do tego dochodzą coroczne opłaty za licencje i naprawy po włamaniach.",
    "Buduję inaczej. Strona jest generowana statycznie i serwowana gotowa - bez bazy danych, bez wtyczek, bez powierzchni do ataku. Ładuje się poniżej sekundy i ma lepszą pozycję startową w Google, bo szybkość jest jednym z czynników rankingowych.",
  ],
  guarantee: "Gwarantuję wynik 95+ w Google Lighthouse na dzień wydania.",
};

export type ProjectStatus = "Działa" | "Wdrożone" | "W budowie" | "MVP";

export type Project = {
  slug: string;
  title: string;
  category: string;
  headline: string;
  summary: string;
  full: string;
  results?: string[];
  tags: string[];
  status: ProjectStatus;
  problem: string[];
  solution: string[];
  effect?: string[];
  image?: string;
  imageAlt?: string;
  stack: string;
};

export type Service = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  anchor?: string;
};

export type PricingFeature = {
  label: string;
  note: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  priceValue: number;
  when: string;
  audience: string;
  cta: string;
  featured?: boolean;
  includesLead?: string;
  includesNote?: string;
  features: PricingFeature[];
};

export type ProcessItem = {
  step: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "callnest",
    title: "Callnest",
    category: "Własny produkt",
    headline:
      "Platforma głosowych agentów AI odbierających telefony dla polskich firm usługowych",
    summary:
      "Moja firma. Agenci głosowi AI odbierający telefony dla polskich firm usługowych - umawiają wizyty, odpowiadają na pytania, działają po godzinach. Model abonamentowy, klienci płacący co miesiąc.",
    full: "Moja firma. Agenci głosowi AI odbierający telefony dla polskich firm usługowych - umawiają wizyty, odpowiadają na pytania, obsługują połączenia po godzinach otwarcia. Zbudowałem całość: logikę agenta, integrację z telefonią, panel klienta i proces sprzedaży. To projekt, dzięki któremu rozumiem biznes klienta od strony kosztów i zapytań, nie tylko kodu.",
    results: ["Model abonamentowy", "Klienci płacący co miesiąc", "Wdrożenie w 48 godzin"],
    tags: ["AI", "SaaS", "Telefonia"],
    status: "Działa",
    problem: [
      "Firmy usługowe tracą zlecenia, bo telefon milczy poza godzinami, a w godzinach szczytu nikt nie nadąża odbierać. Sekretarka kosztuje pensję, a automatyczna centrala zdejmuje tylko kilka pytań i nie umówi wizyty.",
      "Właściciel wie, że każde nieodebrane połączenie to ktoś, kto zadzwoni do konkurencji. Nie potrzebuje kolejnego czatu na stronie. Potrzebuje głosu, który odbierze, zrozumie o co chodzi i zapisze termin, zamiast obiecywać oddzwonienie, którego nikt nie wykona.",
      "Gotowe centrali i chatboty kończą się na nagraniu albo na menu, z którego klient wychodzi. Brakowało narzędzia, które gada językiem firmy i zamyka wizytę w kalendarzu, a nie tylko zbiera numer.",
      "Budowałem to nie jako ćwiczenie z AI, tylko jako firmę, która ma utrzymać się z abonamentu. Jeśli agent nie umawia, klient rezygnuje. To weryfikacja, której strona-wizytówka nigdy nie da.",
    ],
    solution: [
      "Callnest to agenci głosowi, którzy odbierają połączenia, odpowiadają na pytania o ofertę i zapisują terminy w kalendarzu. Działają po godzinach, w weekendy i wtedy, gdy personel jest przy kliencie, a nie przy słuchawce.",
      "Integracja idzie w telefonię i w kalendarz, nie w slajd z roadmapą. Agent ma skrypt oferty, godziny i zasady umawiania. Pomyłka w terminie boli tak samo jak pomyłka recepcji, więc jakość rozmowy jest produktem, nie dodatkiem.",
      "Utrzymanie też jest po mojej stronie: monitoring rozmów, poprawki skryptu, rozliczenie abonamentu. Widzę, co kosztuje godzinę inżyniera i co klient jest gotów płacić co miesiąc. Tego nie uczy się na wizytówce z galerią.",
      "Abonament wymusza prostotę. Funkcja, której nikt nie używa, zostaje kosztem. Tę samą dyscyplinę stosuję przy stronach: mniej podstron, jaśniejsza oferta, mierzalne zapytanie na końcu, a nie szablon z dwunastoma sekcjami na wszelki wypadek.",
      "Status jest prosty: działa. Są płacący klienci, są rozmowy, jest faktura co miesiąc. Nie jest to ukończony produkt na zawsze - agentów poprawiam - ale to firma, nie makieta.",
      "To nie projekt w portfolio. To firma z klientami, którzy płacą co miesiąc. Rozumiem przez to koszt pozyskania, utrzymania i rezygnacji - i tak samo patrzę na stronę, którą Ci buduję: ma przynosić zapytania, nie tylko wyglądać.",
    ],
    stack: "Next.js, TypeScript, Voice AI, integracje telefoniczne, PostgreSQL.",
    image: "/projects/callnest.webp",
    imageAlt:
      "Callnest — strona na laptopie z hasłem o nieprzeoczonych połączeniach",
  },
  {
    slug: "glamour-kosmetik",
    // Po zgodzie klienta przywróć: title: "Glamour Kosmetik"
    title: "Salon kosmetyczny w Opolu",
    category: "Beauty",
    headline:
      "Pierwsze miejsce w Google i 156 wejść w cztery miesiące dla salonu kosmetycznego",
    summary:
      "Salon kosmetyczny w Opolu. Strona z galerią zabiegów, cennikiem i przejściem do rezerwacji, zbudowana pod telefon.",
    full: "Salon prowadził całą sprzedaż przez Booksy i nie miał własnej obecności w Google. Zbudowałem stronę z galerią zabiegów, cennikiem i przejściem do rezerwacji, zaprojektowaną najpierw pod telefon - bo tak szuka większość klientek. Po czterech miesiącach strona zajmuje pierwsze miejsce w Google na nazwę salonu i pokazuje się w wynikach przy ponad dwudziestu różnych zabiegach.",
    results: ["1. miejsce na nazwę salonu", "3 753 wyświetlenia w Google", "81% ruchu z telefonu"],
    tags: ["Next.js", "Rezerwacje", "SEO lokalne"],
    status: "Wdrożone",
    problem: [
      "Salon kosmetyczny w Opolu sprzedawał całość przez Booksy. W Google nie było własnej strony, więc ktoś szukający nazwy salonu lądował w katalogu albo u konkurencji.",
    ],
    solution: [
      "Zbudowałem stronę z galerią zabiegów, cennikiem i przejściem do rezerwacji. Układ jest pod telefon, bo tam szuka większość klientek.",
    ],
    effect: [
      "Po czterech miesiącach: pierwsze miejsce w Google na nazwę salonu, 3 753 wyświetlenia w wynikach wyszukiwania, 156 wejść. 81% ruchu z telefonu.",
    ],
    stack: "Next.js · Rezerwacje · SEO lokalne",
    image: "/projects/glamour.webp",
    imageAlt:
      "Salon kosmetyczny w Opolu — strona na telefonie z przyciskiem rezerwacji",
  },
  {
    slug: "atb-bud",
    title: "ATB Bud",
    category: "Firma budowlana",
    headline: "Modernizacja strony opolskiej firmy budowlanej z galerią realizacji",
    summary:
      "Firma budowlana z Opola. Wdrożenie po starej, nieczytelnej stronie - klient nie widział zakresu usług ani realizacji.",
    full: "Firma budowlana z Opola działająca od 2016 roku. Poprzednia strona była przestarzała i nie pokazywała ani zakresu usług, ani realizacji. Zbudowałem nową z galerią wykonanych prac, czytelnym opisem usług i formularzem kontaktowym - tak, żeby klient wiedział, czym firma się zajmuje, zanim zadzwoni.",
    tags: ["Next.js", "Galeria realizacji", "SEO lokalne"],
    status: "Wdrożone",
    problem: [
      "Firma budowlana z Opola ze starą, nieczytelną stroną. Klient nie widział zakresu usług ani realizacji.",
    ],
    solution: [
      "Strona z galerią realizacji, opisem zakresu usług i formularzem kontaktowym. Zbudowana tak, żeby klient widział, co firma robi, zanim zadzwoni.",
    ],
    stack: "Next.js · Galeria realizacji · SEO lokalne",
    image: "/projects/atb-bud.webp",
    imageAlt:
      "ATB Bud — strona na laptopie z hasłem modernizujemy, nadzorujemy, odpowiadamy",
  },
  {
    slug: "mixmedix",
    title: "MiXmediX",
    category: "W budowie",
    headline:
      "Aplikacja mobilna analizująca bezpieczeństwo suplementacji na silniku reguł",
    summary:
      "Aplikacja mobilna analizująca bezpieczeństwo suplementacji: dawki, interakcje, przeciwwskazania. Działa na jawnym silniku reguł z przypisanym źródłem dowodów, nie na zgadywaniu AI. Reguły akceptuje ekspertka z Gdańskiego Uniwersytetu Medycznego.",
    full: "Aplikacja mobilna analizująca bezpieczeństwo suplementacji: dawki, interakcje między składnikami, przeciwwskazania zdrowotne. Działa na jawnym silniku reguł z przypisanym źródłem i poziomem dowodów, nie na generowaniu odpowiedzi przez model językowy - przy treściach dotyczących zdrowia to różnica między odpowiedzią, za którą ktoś odpowiada, a zgadywaniem. Reguły bezpieczeństwa akceptuje ekspertka z Gdańskiego Uniwersytetu Medycznego.",
    tags: ["React Native", "Silnik reguł", "PostgreSQL"],
    status: "W budowie",
    problem: [
      "Ludzie łączą suplementy na własną rękę. Opisy ze sklepu nie mówią, co wolno brać razem, a model językowy potrafi brzmiąco zmyślić dawkę. Przy treściach medycznych zgadywanie jest nieakceptowalne.",
      "Aplikacja, która radzi w zdrowiu, nie może chować decyzji w czarnej skrzynce. Gdy coś pójdzie nie tak, musi dać się sprawdzić, skąd wzięła się odpowiedź. Tego nie spełnia czat, który brzmi pewnie.",
    ],
    solution: [
      "MiXmediX sprawdza dawki, interakcje i przeciwwskazania na jawnym silniku reguł. Każda decyzja ma przypisane źródło, a zestaw reguł akceptuje ekspertka z Gdańskiego Uniwersytetu Medycznego. Model językowy nie jest sędzią bezpieczeństwa.",
      "Odpowiedzialność za treść medyczną zostaje przy regule i recenzji, nie przy promptcie. Jeśli reguła jest zła, da się ją poprawić i wskazać, kto ją przyjął. Jeśli model zmyśli, zostaje rozmowa, której nie da się rozliczyć.",
      "Współpraca z ekspertką z GUMed jest warunkiem, nie ozdobą w stopce. Bez akceptacji zestawu reguł aplikacja nie idzie do ludzi. To spowalnia, i tak ma być.",
      "Nie publikuję poradnika żywieniowego pod marką aplikacji. Publikuję mechanizm, który da się zrecenzować. Różnica jest nudna dla marketingu i konieczna, gdy na drugiej stronie jest zdrowie człowieka.",
      "Aplikacja jest w budowie. Świadomie nie przyspieszam premiery kosztem nadzoru. Silnik i recenzja są ważniejsze niż data w sklepie.",
    ],
    stack: "React Native, TypeScript, PostgreSQL, silnik reguł z recenzją ekspercką.",
    image: "/projects/mixmedix.webp",
    imageAlt:
      "MiXmediX — aplikacja na telefonie z wynikiem analizy suplementacji",
  },
];

/** Kolumny czytają w dół: Callnest i salon zostają na górze obu kolumn. */
export const projectColumnOrder = [
  "callnest",
  "atb-bud",
  "glamour-kosmetik",
  "mixmedix",
] as const;

export const services: Service[] = [
  {
    title: "Strony internetowe dla firm",
    description:
      "Oferta to tworzenie stron www w Opolu: strona, która ładuje się natychmiast i którą sam edytujesz bez ryzyka zepsucia układu.",
    tags: ["Next.js", "SEO", "CMS"],
    href: "/tworzenie-stron-www-opole",
    anchor: "tworzenie stron www w Opolu",
  },
  {
    title: "Aplikacje i systemy wewnętrzne",
    description:
      "Kiedy strona to za mało: aplikacje webowe i systemy, panel klienta, rezerwacje, kalkulator wyceny, integracja z tym, czego już używasz.",
    tags: ["CRM", "Panele", "Integracje"],
    href: "/aplikacje-webowe",
    anchor: "aplikacje webowe i systemy",
  },
  {
    title: "Opieka techniczna",
    description:
      "Po wdrożeniu strona nie zostaje sama. Pilnuję działania, wprowadzam drobne zmiany, reaguję zanim zauważysz problem.",
    tags: ["Monitoring", "Poprawki", "Bezpieczeństwo"],
  },
  {
    title: "Automatyzacja i AI",
    description:
      "Odbieranie telefonów, umawianie wizyt, obsługa powtarzalnych pytań. To, co wdrażam we własnej firmie.",
    tags: ["Agenci głosowi", "Integracje"],
  },
];

export const pricing = {
  label: "Oferta",
  heading: "Trzy sposoby, w jakie mogę pomóc",
  featuredLabel: "Najczęściej wybierany",
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Start",
    price: "3 500 zł",
    priceValue: 3500,
    when: "Kiedy masz jedną usługę i prosty przekaz.",
    audience:
      "Małe firmy usługowe, które potrzebują widocznej wizytówki w internecie.",
    cta: "Umów rozmowę",
    features: [
      {
        label: "Strona jednosekcyjna",
        note: "Jedna strona od oferty do zapytania, bez menu, w którym klient się gubi.",
      },
      {
        label: "Formularz kontaktowy",
        note: "Wiadomość na Twój mail. Bez wtyczki, która psuje się po aktualizacji.",
      },
      {
        label: "Optymalizacja pod Google",
        note: "Tytuły i opisy pod frazy, na które ktoś z okolicy realnie szuka.",
      },
      {
        label: "Wynik 95+ w Lighthouse",
        note: "Gwarantuję 95+ w dniu wydania. Punkt startu w Google, nie ozdoba.",
      },
      {
        label: "Podpięcie wizytówki Google",
        note: "Profil firmy w Google podpięty pod stronę, żeby nazwa i adres się zgadzały.",
      },
      {
        label: "Nagranie, jak samodzielnie edytować treści",
        note: "Krótki film, jak zmienić tekst i zdjęcie bez ruszania układu.",
      },
      {
        label: "Wdrożenie do 2 tygodni",
        note: "Dwa tygodnie to dolny próg, gdy treści są albo szkicujemy je z rozmowy.",
      },
    ],
  },
  {
    name: "Biznes",
    price: "5 900 zł",
    priceValue: 5900,
    when: "Kiedy masz pełną ofertę i chcesz, żeby klient znalazł właściwą usługę.",
    audience:
      "Firmy z kilkoma usługami, które chcą być widoczne w lokalnych wynikach wyszukiwania.",
    cta: "Umów rozmowę",
    featured: true,
    includesLead: "Wszystko z pakietu Start oraz:",
    features: [
      {
        label: "Do 6 podstron",
        note: "Osobne adresy na usługi i cennik - Google indeksuje je osobno.",
      },
      {
        label: "Panel do samodzielnej edycji treści",
        note: "Zmieniasz oferty i zdjęcia bez ruszania układu. Dostajesz nagranie.",
      },
      {
        label: "Optymalizacja pod frazy lokalne",
        note: "Frazy usługa plus miasto, spójne z wizytówką Google.",
      },
      {
        label: "Mapa, galeria i cennik",
        note: "Mapa, galeria, ceny - to, czego szuka ktoś jeszcze niezdecydowany.",
      },
      {
        label: "Dane strukturalne dla Google",
        note: "Dane, które Google czyta jako firmę, nie tylko jako tekst na stronie.",
      },
      {
        label: "Wdrożenie do 4 tygodni",
        note: "Cztery tygodnie przy kompletnych treściach. Czeka się zwykle na zdjęcia.",
      },
    ],
  },
  {
    name: "Dedykowany",
    price: "od 9 900 zł",
    priceValue: 9900,
    when: "Kiedy strona to za mało i potrzebujesz systemu.",
    audience: "Firmy, którym gotowe narzędzia przestały wystarczać.",
    cta: "Porozmawiajmy",
    includesLead: "Wszystko z pakietu Biznes oraz:",
    includesNote: "Baza strony firmowej plus logika, której nie wciśniesz w motyw.",
    features: [
      {
        label: "Panel klienta lub system rezerwacji",
        note: "Klient loguje się, rezerwuje albo śledzi zlecenie sam.",
      },
      {
        label: "Integracje z systemami, których już używasz",
        note: "Kalendarz, płatności albo CRM, którego już używasz.",
      },
      {
        label: "Baza danych i konta użytkowników",
        note: "Konta i role u Ciebie, nie w cudzym panelu na abonamencie.",
      },
      {
        label: "Automatyzacja powtarzalnych zadań",
        note: "Powtarzalne pytania, telefony albo zapisy, które da się zamknąć bez Ciebie przy biurku.",
      },
      {
        label: "Termin ustalany indywidualnie",
        note: "Najpierw najmniejsza działająca wersja, potem rozbudowa.",
      },
    ],
  },
];

export const process = {
  heading: "Płacisz dopiero,",
  headingAccent: "gdy zobaczysz projekt",
};

export const processSteps: ProcessItem[] = [
  {
    step: "01",
    title: "Rozmowa",
    description:
      "Piętnaście minut o tym, co firma robi, skąd dziś przychodzą klienci i co strona ma realnie załatwiać.",
  },
  {
    step: "02",
    title: "Projekt",
    description:
      "Przygotowuję układ strony i kierunek wizualny. Widzisz, jak będzie wyglądać, zanim cokolwiek zapłacisz.",
  },
  {
    step: "03",
    title: "Decyzja",
    description:
      "Akceptujesz projekt i wtedy płacisz pierwszą transzę. Jeśli kierunek Ci nie odpowiada, rozstajemy się bez kosztów z Twojej strony.",
  },
  {
    step: "04",
    title: "Budowa i wdrożenie",
    description:
      "Koduję, testuję, uruchamiam. Podpinam analitykę i wizytówkę Google. Dostajesz krótkie nagranie, jak samodzielnie edytować treści.",
  },
];

export const contact = {
  heading: "Napisz,",
  headingAccent: "co chcesz zbudować",
  support:
    "Odpowiadam tego samego dnia roboczego. Jeśli masz już stronę - podeślij adres, sprawdzę jej szybkość i napiszę, co da się poprawić.",
  cta: "Umów 15-minutową rozmowę",
  secondaryCta: "Zadaj pytanie",
  submit: "Wyślij wiadomość",
};

export const homeFaqs = [
  {
    question: "Ile kosztuje strona?",
    answer:
      "Od 3 500 zł netto za stronę jednosekcyjną, 5 900 zł za stronę wielopodstronową. Pełny zakres każdego pakietu jest w cenniku. Wycena jest ostateczna - nie doliczam nic po drodze.",
  },
  {
    question: "Co jeśli nie spodoba mi się projekt?",
    answer:
      "Pierwszą transzę płacisz dopiero po zaakceptowaniu projektu graficznego. Jeśli kierunek Ci nie odpowiada, rozstajemy się i nic nie płacisz.",
  },
  {
    question: "Czy mogę sam zmieniać treści?",
    answer:
      "Tak. W pakiecie Biznes dostajesz panel do edycji i krótkie nagranie, jak go obsługiwać. Zmiana tekstu czy zdjęcia nie wymaga kontaktu ze mną.",
  },
  {
    question: "Czy trzeba płacić co miesiąc?",
    answer:
      "Nie. Strona jest Twoja po rozliczeniu, razem z kodem. Opieka techniczna jest opcjonalna - od 199 zł miesięcznie, jeśli chcesz, żebym pilnował działania.",
  },
  {
    question: "Co z hostingiem i domeną?",
    answer:
      "Hosting jest wliczony w opiekę techniczną. Bez niej podepnę stronę pod Twoje konto. Domenę rejestrujesz na siebie - zawsze zostaje Twoja.",
  },
  {
    question: "Ile to trwa?",
    answer:
      "Dwa tygodnie przy pakiecie Start, cztery przy Biznes. Liczy się od momentu, w którym mam od Ciebie treści i zdjęcia - to zwykle ten etap wydłuża projekt.",
  },
];

export const homeAbout = {
  label: "Kto za tym stoi",
  heading: "Jedna osoba, nie agencja",
  paragraphs: [
    "Nazywam się Szymon Jurkun. Jestem inżynierem oprogramowania i studentem informatyki na AGH.",
    "Prowadzę Callnest - własną firmę wdrażającą głosowych agentów AI dla polskich firm usługowych. Dzięki temu patrzę na Twoją stronę nie tylko od strony kodu, ale też kosztów i zapytań, bo sam prowadzę biznes sprzedający do tych samych odbiorców.",
    "Pracujesz bezpośrednio ze mną, od pierwszej rozmowy do uruchomienia. Nie ma działu obsługi ani opiekuna projektu.",
  ],
};

export const faqs = [
  {
    question: "Ile kosztuje strona internetowa?",
    answer:
      "Pakiet Start to 3 500 zł netto: jedna sekcja, formularz, optymalizacja pod Google, wynik 95+ w Lighthouse, wdrożenie do dwóch tygodni. Biznes to 5 900 zł netto: do sześciu podstron, panel do treści, frazy lokalne. Dedykowany zaczyna się od 9 900 zł netto, gdy wchodzi własna logika albo integracje. Szczegóły są na stronie cennika - bez wyceny na telefon.",
  },
  {
    question: "Czy mogę sam edytować treści?",
    answer:
      "Tak, w pakietach z panelem edytujesz oferty, opisy i zdjęcia bez ruszania układu. Dostajesz nagranie, jak to robić. Nie otwieram pełnego edytora, w którym da się przypadkiem złożyć stronę na nowo.",
  },
  {
    question: "Co się stanie, jeśli nie spodoba mi się projekt?",
    answer:
      "Rozstajemy się bez faktury za wykonanie. Płatność jest po akceptacji kierunku, nie przed. Nie trzymam szkiców jako zakładnika. Lepiej przerwać wcześnie niż kodować coś, czego nie chcesz wdrażać.",
  },
  {
    question: "Czy trzeba płacić co miesiąc?",
    answer:
      "Nie za samą stronę. Po rozliczeniu kod jest Twój. Opieka techniczna to osobna, dobrowolna usługa od 199 zł netto miesięcznie: hosting, monitoring, aktualizacje i 2 godziny miesięcznie na drobne zmiany w treści, bez kumulacji na kolejny miesiąc. Bez opłat za licencje wtyczek, bo ich nie używam.",
  },
  {
    question: "Co z hostingiem i domeną?",
    answer:
      "Domenę możesz mieć swoją - podpinam stronę pod istniejący adres. Hosting mogę prowadzić w opiece albo oddać pliki na Twój serwer po rozliczeniu. Nie zamykam strony w panelu, z którego nie da się wyjść.",
  },
  {
    question: "Czy pracujesz tylko z firmami z Opola?",
    answer:
      "Pracuję zdalnie z całej Polski. Opole to moja baza i naturalny kontekst lokalnych fraz, ale rozmowa, projekt i wdrożenie nie wymagają spotkania w biurze. Jeśli jesteś z Opola, tym łatwiej o wizytówkę Google i frazy typu tworzenie stron www Opole - ale to nie jest warunek współpracy.",
  },
];

export const footer = {
  blurb:
    "Inżynier oprogramowania. Strony internetowe i aplikacje dla firm z Opola i województwa opolskiego.",
  copyright: "© 2026 Szymon Jurkun",
  privacy: "Polityka prywatności",
};
