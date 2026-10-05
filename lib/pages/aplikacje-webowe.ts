export const aplikacjeWebowe = {
  lead: "Buduję dedykowane systemy dla firm, którym gotowe narzędzia przestały wystarczać: panele klienta, systemy rezerwacji, CRM-y dopasowane do procesu, automatyzacje. Wyceny zaczynają się od 9 900 zł netto.",
  whenHeading: "Kiedy strona przestaje wystarczać",
  whenIntro:
    "Strona firmowa zbiera zapytanie. Aplikacja zaczyna się tam, gdzie to zapytanie wpada do zeszytu, arkusza albo głowy jednej osoby i stamtąd już nie wychodzi w przewidywalny sposób. Poniżej sygnały, które zwykle znaczą, że kolejna podstrona nic nie zmieni.",
  when: [
    "Dane żyją w arkuszach. Terminy, stany, wyceny i notatki o klientach są w plikach, które ktoś musi pamiętać zapisać. Dwa arkusze rozjeżdżają się po tygodniu, a prawda o firmie jest w tej kopii, którą otworzyła ostatnia osoba.",
    "Przepisujecie to samo między systemami. Rezerwacja z maila ląduje w kalendarzu ręcznie, faktura w innym programie, status u klienta w Messengerze. Każde przepisanie to błąd i godzina, za którą nikt nie wystawia faktury, a i tak ją płacisz.",
    "Klienci dzwonią po informacje, które mogliby sprawdzić sami: czy termin wolny, na którym etapie jest zlecenie, ile zostało do odbioru. Telefon nie jest wtedy sprzedażą. Jest łataniem braku panelu.",
    "Proces siedzi w głowie jednej osoby. Urlop, choroba albo odejście i nikt nie wie, w jakiej kolejności iść. Aplikacja nie zastąpi myślenia, ale może trzymać stany, role i kolejkę tak, żeby firma nie stała, gdy tej osoby nie ma.",
  ],
  whatHeading: "Co buduję",
  panelsHeading: "Panele klienta i systemy rezerwacji",
  panels: [
    "To najczęstszy pierwszy system: klient loguje się, widzi terminy, rezerwuje, dostaje potwierdzenie, a personel ogarnia dzień w jednym kalendarzu zamiast w zeszycie i trzech telefonach.",
    "Vetsy powstało właśnie z tego przebiegu. Lecznicom weterynaryjnym brakowało rezerwacji z obsługą kilku placówek i panelem dla recepcji. MVP zamyka umówienie wizyty i widok dnia. Nie udaje pełnego systemu klinicznego z magazynem leków i księgowością w jednym. Najpierw ten wątek, który boli codziennie.",
    "Gdy przychodnia ma dwie lokalizacje, jeden kalendarz przestaje wystarczać. Trzeba wiedzieć, kto jest w której placówce, które okna są wspólne i co się dzieje, gdy klient się spóźni. To już nie wtyczka do strony. To aplikacja z rolami.",
    "Ten sam wzorzec działa w usługach, gabinetach, serwisach i małych zespołach terenowych. Różnią się reguły, nie potrzeba: jeden kalendarz, jasne role, mniej dzwonienia po to, co widać na ekranie. Vetsy zostaje tu jako MVP tego przebiegu. Działający produkt: zobacz Callnest w portfolio.",
  ],
  crmHeading: "Narzędzia wewnętrzne i CRM",
  crm: [
    "Gotowy CRM jest tani na starcie i drogi, gdy Twój proces nie mieści się w jego kartach. Pola, których nie da się dodać, automatyzacje, które kończą się na półce płatnych dodatków, raport, którego nie ma.",
    "Narzędzie wewnętrzne piszę pod to, jak naprawdę pracujecie: statusy zlecenia, kolejka, uprawnienia, notatki, które mają zostać przy kliencie, a nie w prywatnym czacie. Nie kopiuję Salesforce w miniaturze. Składam tyle ekranów, ile proces naprawdę ma.",
    "To się opłaca, gdy arkusz już kłamie, a zespół traci czas na szukanie, kto ma piłkę. Nie opłaca się, gdy potrzebujesz listy kontaktów i maili - wtedy lepszy jest sprawdzony gotowiec, bez mojej faktury.",
    "Granica jest prosta: jeśli Twoja przewaga to sposób pracy, którego Salesforce nie zna, piszemy narzędzie. Jeśli Twoja przewaga to usługa, a CRM ma tylko trzymać telefony, kupujesz gotowca i nie płacisz mi za odtwarzanie listy mailingowej.",
  ],
  autoHeading: "Automatyzacja i agenci głosowi",
  auto: [
    "Część zapytań nie powinna czekać na człowieka: umówienie terminu, godziny otwarcia, status prostego zlecenia, odbiór telefonu po osiemnastej. To da się zamknąć agentem głosowym albo automatyzacją między systemami, które już macie.",
    "Callnest jest tego dowodem po mojej stronie. Agenci odbierają telefony polskich firm usługowych, odpowiadają na pytania i zapisują wizyty. Klienci płacą abonament. Jeśli rozmowa nie kończy się umówieniem, produkt nie zarabia. Tego nie da się oszukać slajdem.",
    "To inny produkt niż strona wizytówkowa, ale ta sama lekcja: narzędzie ma zamykać konkretną czynność. Umawia. Zapisuje. Oddaje spokój po osiemnastej. Jeśli nie da się powiedzieć, jaką czynność zamyka aplikacja, za wcześnie na budowę.",
    "Automatyzację wpinam tam, gdzie powtarzalność jest mierzalna. Nie wpinam modelu językowego tam, gdzie pomyłka kosztuje zdrowie, pieniądze albo reputację bez ludzkiego nadzoru. Granicę mówię na starcie, nie po incydencie.",
  ],
  archHeading: "Architektura",
  arch: [
    "Stack jest stały, bo go utrzymuję: Next.js, TypeScript, PostgreSQL przez Supabase, hosting bezserwerowy. Nie mieszam trzech backendów dla sportu i nie zostawiam Ci serwera, którego trzeba patchować w niedzielę.",
    "Dla Ciebie znaczy to trzy konkretne rzeczy. Skalowalność: ruch może skoczyć, a aplikacja nie stoi na jednym komputerze w biurze. Koszt utrzymania przy małym ruchu jest bliski zeru - płacisz za użycie, nie za maszynę, która się grzeje przez noc. Brak serwera do administrowania: aktualizacje platformy i kopie bazy nie są Twoją trzecią zmianą.",
    "Kod jest TypeScriptem od przeglądarki do zapytań. Mniej tłumaczeń między językami to mniej miejsc, w których rozjeżdża się typ i wychodzi błąd dopiero u klienta. Bazę trzymamy w PostgreSQL, bo relacje, uprawnienia i kopie są tam nudne i przewidywalne - a w systemach firmowych nuda jest zaletą.",
    "Hosting bezserwerowy znaczy, że nie dostajesz konta root i listy cronów. Deploy to publikacja wersji, którą da się cofnąć. Przy małym ruchu rachunek za infrastrukturę zostaje w groszach. Przy skoku wejść platforma dokłada zasoby bez nocnego telefonu, że padł dysk.",
    "Gdy aplikacja urośnie, ten sam układ da się rozwinąć. Nie zaczynam od mikroserwisów, których trzech osób nie utrzyma. Zaczynam od jednej spójnej aplikacji i dzielę ją, gdy pomiar, nie prestiż, tego wymaga.",
  ],
  quoteHeading: "Jak wygląda wycena",
  quote: [
    "Najpierw rozmowa o procesie. Nie o ekranach, o tym, kto co robi od telefonu do pieniędzy. Jeśli nie umiem opisać tego przebiegu Twoimi słowami, za wcześnie na wycenę.",
    "Potem krótka specyfikacja: role, stany, integracje, to, co musi być w pierwszej wersji, i to, co świadomie odkładamy. Ten dokument chroni Ciebie przed pływającym zakresem i mnie przed budowaniem świata, którego nie zamawiałeś.",
    "Wycena jest po specyfikacji, nie przed. Widełki od 9 900 zł netto dotyczą małego panelu albo rezerwacji z jednym kalendarzem. Więcej ról, więcej systemów na zewnątrz, więcej wyjątków - kwota idzie w górę, czasem do kilkudziesięciu tysięcy. Powiem to, zanim zacznę pisać kod.",
    "Budowa idzie od MVP: najmniejsza wersja, która zamyka jeden prawdziwy przebieg. Rezerwacja z potwierdzeniem. Status zlecenia, który klient widzi sam. Agent, który umawia, a nie tylko wita. Reszta poczeka. To obniża ryzyko po Twojej stronie - płacisz za działający kawałek, widzisz go w robocie, dopiero wtedy dokładamy następny.",
    "MVP nie znaczy byle jakie. Znaczy: jeden przebieg działa na telefonie, z prawdziwymi danymi i z kopią, do której da się wrócić. Ozdoby, raporty i drugi język czekają, aż ten przebieg zacznie się opłacać.",
    "Rozwój po MVP jest osobnymi krokami, nie wieczną umową na wszystko. Możesz zatrzymać się po pierwszej wersji, zabrać kod i iść dalej sam albo ze mną. Nie zamykam systemu w licencji, z której nie ma wyjścia. Po starcie zostaje opieka po wdrożeniu.",
  ],
  close:
    "Jeśli arkusz, telefon i jedna osoba w głowie to dziś cały Twój system, napisz, jak wygląda dzień pracy. Od tego zaczynam wycenę, nie od listy technologii.",
};
