// 1.Napisz funkcje (typy proste):

// a)  zwracającą sumę trzech liczb podanych w parametrach funkcji:
function add(number1, number2, number3) {
  return number1 + number2 + number3;
}
// console.log(add(1, 2, 3));

//   b) zwracającą pole trójkąta ze wzoru podstawa * wysokość / 2, która zwróci
//   'Pole trójkąta to x(zmienna tu powinna być), czyli ma on x długości podstawy i xwysokości'

const trianglePole = function (a, h) {
  return `Pole trójkąta to ${
    (a * h) / 2
  }, czyli ma on ${a} długości i ${h} wysokoci`;
};
// console.log(trianglePole(4, 7));

//  c) zwracającą ile aktualnie ktoś ma lat prawo jazdy na podstawie dwóch argumentów,
//   wieku danej osoby i wieku w którym to prawo jazdy zdał,

const drivingLicence = function (personAge, passDrivingLicenceAge) {
  return `Osoba posiada prawo jazdy od ${
    personAge - passDrivingLicenceAge
  } lat.`;
};
// console.log(drivingLicence(34, 19));

//  d) zwracającą ile spalimy litrów paliwa jeśli jako jeden parametr podamy spalanie
//   na 100km, a jako drugi przejechaną trasę,

const averageFuelEconomy = function (petrol100km, distanceTraveled) {
  return `Po przejechaniu całej trasy całkowite zużycie paliwa wyniesie ${
    (distanceTraveled * petrol100km) / 100
  } l`;
};
// console.log(averageFuelEconomy(580, 7.8));

//  e) zwracającą stringa 'Ala ma 23 lata i 2 dzieci', gdzie imię, wiek i ilość dzieci
//   podajemy w parametrach funkcji,

const name2 = "Ala";

function aboutAla(name2, age, numberOfChildren) {
  return `${name2} ma ${age} lata i ${numberOfChildren} dzieci`;
}
// console.log(aboutAla(name2, 29, 2));
// ---------------------------------------------------------------------------------

// 2. Napisz funkcje (typy złożone):

// a) zwracającą przekazaną do parametru tablicę

const parking = ["Porsche", "Fiat", "Scania", "Toyota"];
function returnParking() {
  return parking;
}
// console.log(returnParking(parking));

//   b) zwracającą drugą wartość przekazanej do funkcji tablicy 3 elementowej,
const colour = ["red", "green", "blue"];
function showColour() {
  return colour[1];
}
// console.log(showColour());

// c) zwracającą stringa 'Przekazana tablica ma x elementów, a elementem nr 3 jest x'
const fruicts = ["apple", "orange", "blueberry", "banana"];
function showFruit(fruicts) {
  return `Przekazana tablica ma ${fruicts.length} elementy, a elementem nr 3 jest ${fruicts[2]}.`;
}
// console.log(showFruit(fruicts));

//  d) dodaje elementy do stworzonej na zewnątrz funkcji pustej tablicy i zwraca już
//  zmienioną tablice z dodatkowym elementem,

let days1 = [];
function addDays(arr) {
  arr.push("monday", "tuesday");
  return arr;
}
// console.log(addDays(days1));

//   e) zwracającą imię osoby przekazanej w obiekcie(powinien zawierać imię, nazwisko i wiek)
//   do funkcji,

let vip = {
  surName: "Adam",
  lastName: "Kowalski",
  age: 34,
};

function showName(blabla) {
  return vip.surName;
}
// console.log(showName());

//  f) zwracającą stringa 'imię(tu zmienna) i nazwisko(tu zmienna) ma x(tu zmienna) lat
//   i x(tu zmienna) cm wzrostu'

let piłkarz = {
  imie: "Marian",
  nazwisko: "Platfus",
  wiek: 55,
  wzrost: 151,
};

function footballStar() {
  return `${piłkarz.imie} ${piłkarz.nazwisko} ma ${piłkarz.wiek} lat i ${piłkarz.wzrost} cm wzrostu`;
}
// console.log(footballStar());

//  g) przyjmującą dwa parametry gdzie jeden to obiekt, a drugi to wiek.
//   Funkcja powinna zwracać wiek z obiektu ale zmieniony na ten z naszego drugiego parametru,

let siatkarz = {
  surName4: "Darek",
  lastNname4: "Brzytwa",
  ageObj: 27,
};

function volleyballStar(howOld) {
  siatkarz.ageObj = 35;
  return siatkarz.ageObj;
}
// console.log(volleyballStar());

// Tutaj powyzej coś niby wyszło ale wiecej przypadku niż swiadomego działania.

// -----------------------------------------------------------------------------------

// 3. Napisz funkcje (warunki if, else - typy proste):

//   a) która przyjmuje wiek osoby i informacje czy ma prawo jazdy, jeśli dana osoba
//   ma poniżej 18 lat to powinno wyświetlić, że 'Nie ma prawa jazdy'. Jak ma powyżej
//   18stu lat i nie ma prawka to też ma wyświetlić, ze 'Nie ma prawa jazdy'. A jak
//   ma powyżej 18stu lat i prawo jazdy to niech wyświetli, że "Możesz śmiało jeździć"

function canDrive(age) {
  return age < 18 ? "Nie ma prawa jazdy" : "Możesz śmiało jeździć";
}
// console.log(canDrive(19));

//   b) przyjmuje jako parametr string, jeśli string jest równy 'Kup', niech wyświetli
//   'Widzę, że zrobić zakupy', a jak string jest równy 'Sprzedaj' niech wyświetli
//   'Możesz tutaj swobodnie sprzedawać', a jeśli nie będzie ani tym ani tym to niech
//   pokaże 'Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj'

function shopping(shop) {
  if (shop == "Kup") {
    return "Widzę, że robisz zakupy";
  } else if (shop == "Sprzedaj") {
    return "Możesz tutaj swobodnie sprzedawać";
  } else {
    return "Nie wybrałeś żadnej z dostępnych opcji";
  }
}
// console.log(shopping("Sprzedaj"));

//   c) przyjmuje liczbę jak argument i zwraca string z informacja 'Liczba jest dodatnia',
//    'Liczba jest ujemna' lub 'Liczba jest równa 0'

function value(x) {
  if (x > 0) {
    return "Liczba jest dodatnia";
  } else if (x < 0) {
    return "Liczba jest ujemna";
  } else x == 0;
  return "Liczba jest równa 0";
}
// console.log(value(-3));

//    d) przyjmującą liczbę jako argument i jeśli liczba jest podzielna przez 3 to niech
//    pokaże 'Fizz', jak podzielna jest przez 5 to 'Buzz', a jak przez 3 i 5 to 'FizzBuzz',

function division(y) {
  if (y % 3 == 0 && y % 5 == 0) {
    return "FizzBuzz";
  } else if (y % 3 == 0) {
    return "Fizz";
  } else y % 5 == 0;
  return "Buzz";
}
// console.log(division(15));
// console.log(division(10));
// console.log(division(9));

//    e) napisz funkcję, która wyświetla czy osoba może obejrzeć film dla osób 15+, funkcja
//    powinna przyjąć dwa argumenty, wiek danej osoby i to czy ma zgodę rodziców, jeśli
//    ma powyżej 15 lat to może oglądać, jak ma poniżej ale ma zgodę rodziców też może
//    oglądać, a jak ma poniżej i nie ma zgody to nie może, wyświetli odpowiednie komunikaty,

function film(age, agree) {
  if (age > 15) {
    return "Możesz oglądać film";
  } else if (age < 15 && agree == "yes") {
    return "Za zgodą rodziców możesz oglądać film";
  } else age < 15 && agree == "no";
  return "Nie możesz oglądać filmu";
}
// console.log(film(12, "yes"));
// console.log(film(16));
// console.log(film(13));
// console.log(film(14, "no"));

// f) zwracającą 'Tak' jeśli jak argument podamy true i 'Nie' jeśli podamy false,

function bool(arg) {
  return arg == true ? "tak" : "nie";
}
// console.log(bool(false));

//  g) zwracającą informację czy podana jako argument liczba jest parzysta czy nie,

function evenNumber(numb) {
  return numb % 2 == 0
    ? `Liczba ${numb} jest parzysta`
    : `Liczba ${numb} jest nieparzysta`;
}
// console.log(evenNumber(7));
// console.log(evenNumber(8));

// ---------------------------------------------------------------

// 4.Napisz funkcje (warunki if, else - typy złożone):

//    a) która przyjmuje obiekt car(model, marka, rok produkcji, isCabrio) i jeśli rok
//    produkcji jest większy niż aktualny rok to informacja, ze auta jeszcze nie wyprodukowano,
//    jak będzie rok poniżej aktualnego to wyświetlamy w zdaniu ładnie informacje o
//    aucie + informacje czy jest Cabrio czy nie jest,

const merol = {
  model: "w124",
  brand: "Mercedes-Benz",
  production: 1992,
  isCabrio: false,
};

function myCar(productionYear) {
  if (productionYear > 2021) {
    return "Auta jeszcze nie wyprodukowano";
  } else productionYear < 2021;
  return `Samochód mojego dziadka to ${merol.brand} model ${merol.model}. Został wyprodukowany w ${merol.production} więc jest w moim wieku. Czy jest kabrioletem? ${merol.isCabrio}`;
}
// console.log(myCar(merol.production));

//    b) która przyjmuje tablicę jako parametr z dowolna liczbą elementów, jeśli tablica
//    jest pusta to zwracamy string pusta tablica, a jak nie to mamy zwrócić stringa
//    'tablica ma x elementów',

const fastfood = ["pizza", "hotdog", "chips", "kebab", "burger", "wrap"];

function menu() {
  return fastfood == 0
    ? "Pusta tablica"
    : `tablica ma ${fastfood.length} elementów`;
}
// console.log(menu(fastfood));

//    c) przyjmuje dwa parametry, oba sa obiektami, jeden to osoba (imię, nazwisko, wiek, czyLubiCzytaćKsiążke, maTV)
//    a drugi to książka (tytuł, rodzaj, ilość stron) i funkcja ta powinna zwrócić stringa
//    odpowiednio, jeśli osoba lubi czytać książkę to niech jej zaproponuje książkę z
//    obiektu: 'Cześć x(imie), polecam Ci przeczytać x(nazwa książki) książkę, ma tylko
//    (strony książki) stron', a jeśli nie lubi czytać, ale ma tv to niech zwróci
//    żeby 'Poszedł oglądać tv' lub po prostu jak nie ma 'Nie wiem co Ci zaproponować'

const osoba = {
  surnNme: "Dawid",
  lastName: "Nowak",
  age: 33,
  czyLubiCzytacKsiążke: true,
  maTV: false,
};

const książka = {
  title: "choryKotek",
  type: "bajka",
  numberOfPages: 10,
};

function readBook(person, book) {
  if (osoba.czyLubiCzytacKsiążke == false && osoba.maTV == true) {
    return "Idź oglądać TV";
  } else if (osoba.czyLubiCzytacKsiążke == true && osoba.maTV == false)
    return `Cześć ${osoba.surnNme} ${osoba.lastName}, polecam Ci przeczytać książkę
    ${książka.title}, ma tylko ${książka.numberOfPages} stron`;
  else osoba.czyLubiCzytacKsiążke == false && osoba.maTV == false;
  return "Nie wiem co Ci zaproponować";
}
console.log(readBook());
