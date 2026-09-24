export const site = {
  name: "szymonjurkun.pl",
  email: "kontakt@szymonjurkun.pl",
  title: "Strony internetowe Opole - Szymon Jurkun",
  description:
    "Strony internetowe dla firm z Opola i okolic. Dedykowany kod zamiast szablonów WordPress, ładowanie poniżej sekundy, jawne ceny od 3 500 zł netto.",
};

export const hero = {
  line1: "Strony internetowe, które",
  accent: "przynoszą zapytania",
  line2rest: ", nie tylko wyglądają",
  support:
    "Buduję strony w tej samej technologii, w której powstają produkty cyfrowe - nie na szablonach z wtyczkami. Ładują się poniżej sekundy, co Google premiuje w wynikach lokalnych. Prowadzę własną firmę technologiczną, więc patrzę na Twoją stronę od strony zapytań i kosztów, nie tylko wyglądu.",
  primaryCta: "Zobacz cennik",
  secondaryCta: "Napisz do mnie",
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

export type ProjectStatus = "Działa" | "W budowie" | "MVP";

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  tags: string[];
  status: ProjectStatus;
  problem: string[];
  solution: string[];
  stack: string;
};

export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export type PricingPlan = {
  name: string;
  price: string;
  priceValue: number;
  audience: string;
  featured?: boolean;
  features: string[];
  featureNotes: string[];
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
    oneLiner:
      "Moja firma. Agenci głosowi AI odbierający telefony dla polskich firm usługowych - umawiają wizyty, odpowiadają na pytania, działają po godzinach. Model abonamentowy, klienci płacący co miesiąc.",
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
  },
  {
    slug: "mixmedix",
    title: "MiXmediX",
    oneLiner:
      "Aplikacja mobilna analizująca bezpieczeństwo suplementacji: dawki, interakcje, przeciwwskazania. Działa na jawnym silniku reguł z przypisanym źródłem dowodów, nie na zgadywaniu AI. Reguły akceptuje ekspertka z Gdańskiego Uniwersytetu Medycznego.",
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
  },
  {
    slug: "vetsy",
    title: "Vetsy",
    oneLiner:
      "Platforma rezerwacji wizyt dla lecznic weterynaryjnych. Kalendarz, obsługa wielu placówek, panel dla personelu.",
    tags: ["Next.js", "Supabase", "Rezerwacje"],
    status: "MVP",
    problem: [
      "Przychodnie weterynaryjne gubią terminy między zeszytem, telefonem i kilkoma osobami przy recepcji. Właściciel zwierzęcia dzwoni, bo nie ma jak sprawdzić wolnego okna sam.",
      "Kilka placówek psuje to jeszcze bardziej: wolny termin w jednej klinice nic nie mówi o drugiej, a personel nie wie, czy klient już jest zapisany.",
    ],
    solution: [
      "Vetsy to kalendarz rezerwacji z panelem dla personelu i obsługą wielu placówek. Właściciel rezerwuje wizytę, klinika widzi dzień w jednym miejscu.",
      "MVP pokrywa ten przebieg, bez udawania pełnego systemu klinicznego z magazynem leków i księgowością. Najpierw umówienie, potem reszta, jeśli przebieg się broni.",
    ],
    stack: "Next.js, TypeScript, Supabase, kalendarz rezerwacji.",
  },
  {
    slug: "nest",
    title: "Nest",
    oneLiner:
      "Portal ogłoszeń nieruchomości z wyszukiwarką, filtrami i mapą. Panel do wystawiania i zarządzania ofertami.",
    tags: ["Next.js", "PostgreSQL", "Mapy"],
    status: "MVP",
    problem: [
      "Ogłoszenia nieruchomości giną w ogólnych portalach albo siedzą w plikach, których nikt nie filtruje po mapie, cenie i metrażu naraz.",
      "Wystawiający potrzebuje panelu, a szukający - kilku filtrów, które nie kłamią. Gotowe silniki ogłoszeń ciągną za sobą funkcje, których mały serwis nie utrzyma.",
    ],
    solution: [
      "Nest to wyszukiwarka z filtrami i mapą oraz panel do wystawiania ofert. MVP pokazuje, że ten przepływ da się złożyć w dedykowanym kodzie, bez gotowego silnika z półki.",
      "Świadomie zostawiłem poza zakresem płatności, konta premium i porównywarkę kredytów. Najpierw znalezienie oferty i jej publikacja.",
    ],
    stack: "Next.js, TypeScript, PostgreSQL, mapa i filtry.",
  },
];

export const services: Service[] = [
  {
    title: "Strony internetowe dla firm",
    description:
      "Strona, która ładuje się natychmiast i którą sam edytujesz bez ryzyka zepsucia układu.",
    tags: ["Next.js", "SEO", "CMS"],
  },
  {
    title: "Aplikacje i systemy wewnętrzne",
    description:
      "Kiedy strona to za mało: panel klienta, system rezerwacji, kalkulator wyceny, integracja z tym, czego już używasz.",
    tags: ["CRM", "Panele", "Integracje"],
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
  heading: "Ceny",
  headingAccent: "bez wyceny na telefon",
  featuredLabel: "Najczęściej wybierany",
  sla: "Opieka techniczna - od 199 zł netto miesięcznie. Hosting, monitoring, aktualizacje i pula drobnych poprawek w treści. Bez opłat za licencje wtyczek, bo ich nie używam.",
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Start",
    price: "3 500 zł netto",
    priceValue: 3500,
    audience: "Jedna usługa, prosty przekaz",
    features: [
      "Strona jednosekcyjna",
      "Formularz kontaktowy",
      "Optymalizacja pod Google",
      "Wynik 95+ Lighthouse",
      "Wdrożenie do 2 tygodni",
    ],
    featureNotes: [
      "Jedna strona od oferty do zapytania, bez menu, w którym klient się gubi.",
      "Wiadomość na Twój mail. Bez wtyczki, która psuje się po aktualizacji.",
      "Tytuły i opisy pod frazy, na które ktoś z okolicy realnie szuka.",
      "Gwarantuję 95+ w dniu wydania. Punkt startu w Google, nie ozdoba.",
      "Dwa tygodnie to dolny próg, gdy treści są albo szkicujemy je z rozmowy.",
    ],
  },
  {
    name: "Biznes",
    price: "5 900 zł netto",
    priceValue: 5900,
    audience: "Firma z pełną ofertą i lokalnym SEO",
    featured: true,
    features: [
      "Do 6 podstron",
      "Panel do edycji treści",
      "Optymalizacja pod frazy lokalne",
      "Mapa, galeria, cennik",
      "Wdrożenie do 4 tygodni",
    ],
    featureNotes: [
      "Osobne adresy na usługi i cennik - Google indeksuje je osobno.",
      "Zmieniasz oferty i zdjęcia bez ruszania układu. Dostajesz nagranie.",
      "Frazy usługa plus miasto, spójne z wizytówką Google.",
      "Mapa, galeria, ceny - to, czego szuka ktoś jeszcze niezdecydowany.",
      "Cztery tygodnie przy kompletnych treściach. Czeka się zwykle na zdjęcia.",
    ],
  },
  {
    name: "Dedykowany",
    price: "od 9 900 zł netto",
    priceValue: 9900,
    audience: "Własna logika i integracje",
    features: [
      "Wszystko z pakietu Biznes",
      "Panel klienta lub system rezerwacji",
      "Integracje z systemami zewnętrznymi",
      "Baza danych i konta użytkowników",
      "Termin ustalany indywidualnie",
    ],
    featureNotes: [
      "Baza strony firmowej plus logika, której nie wciśniesz w motyw.",
      "Klient loguje się, rezerwuje albo śledzi zlecenie sam.",
      "Kalendarz, płatności albo CRM, którego już używasz.",
      "Konta i role u Ciebie, nie w cudzym panelu na abonamencie.",
      "Najpierw najmniejsza działająca wersja, potem rozbudowa.",
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
  cta: "Napisz do mnie",
  submit: "Wyślij wiadomość",
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
      "Nie za samą stronę. Po rozliczeniu kod jest Twój. Opieka techniczna to osobna, dobrowolna usługa od 199 zł netto miesięcznie: hosting, monitoring, aktualizacje i pula drobnych poprawek. Bez opłat za licencje wtyczek, bo ich nie używam.",
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
