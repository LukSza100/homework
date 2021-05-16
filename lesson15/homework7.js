// 1. Napisz pętle, która:
// a) wyświetli wartości od 1 do 9,
for (let i = 1; i <= 9; i++) {
  console.log(i);
}
//b) wyświetli wartości od 9 do 1,
for (let i = 9; i > 0; i--) {
  console.log(i);
}
//c) wyświetli wartości od 5 do 15,
for (let i = 5; i < 16; i++) {
  console.log(i);
}
//d) wyświetli wartości od 0 do -10,
for (let i = 0; i > -11; i--) {
  console.log(i);
}
//e) wyświetli wartości od 1 do 20 zwiększając się co 2 w każdej iteracji,
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}
//f) wyświetli wartości od 10 do -10 zmniejszając się o 4 w każdej iteracji,
for (let i = 10; i > -11; i -= 4) {
  console.log(i);
}
//g) wyświetli wartości od 1 do 100 zwiększając liczbę co iterację mnożąc ją razy 2,
for (let i = 1; i <= 100; i *= 2) {
  console.log(i);
}
// --------------------------------------------------------------------------
//2. Napisz pętle, która:
// a) wyświetli wartości od 0 do 20, ale tylko liczby parzyste,
for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) console.log(i);
}
// b) wyświetli wartości od 0 do 20, ale tylko liczby nieparzyste,
for (let i = 0; i < 21; i++) {
  if (i % 2 !== 0) console.log(i);
}
//c) wyświetli wartości od 0 do 10, ale tam gdzie jest liczba parzystą pokaże napis liczba parzysta, a tam gdzie nie
// niech wyświetli napis liczba nieparzysta,
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("liczba parzysta", i);
  } else {
    console.log("liczba nieparzysta", i);
  }
}
//d) wyświetli liczby od 1 do 30 i tam gdzie liczba jest podzielna tylko przez 3 niech pokaze Fizz, tam gdzie przez 5 niech
// pokaże Buzz, a tam gdzie przez 3 i 5 niech wyświetli FizzBuzz, w reszcie przypadków niech pokaże po prostu cyfry,
for (let i = 1; i < 31; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz", i);
  } else if (i % 3 === 0) {
    console.log("Fizz", i);
  } else if (i % 5 === 0) {
    console.log("Buzz", i);
  } else console.log(i);
}
//e) wyświetli liczby od 100 do 0, ale zmniejszając się o 5 co iteracje i jak liczba jest podzielna przez 10 to niech doda
// obok niech napis "- podzielna przez 10",
for (let i = 100; i >= 0; i -= 5) {
  if (i % 10 === 0) {
    console.log(i, "podzielna przez 10");
  }
}
//3. Napisz funkcje, która:
// a) przyjmuje jako parametr liczbe do której wykona się pętla od 0,
function number(abc) {
  for (let i = 1; i <= abc; i++) {
    console.log(i);
  }
}
//b) przyjmuje jako parametr liczbe od której pętla się wykona do 15,
function number15(start) {
  for (let i = start; i < 16; i++) {
    console.log(i);
  }
}
//c) przyjmuje jako parametr liczbę wskazującą o ile ma się zwiększać pętla co iteracje i wyświetla taką pętle od 0 do 15,
function increase(value) {
  for (let i = 0; i <= 15; i += value) {
    console.log(i);
  }
}
//d) przyjmuje dwa parametry, liczbę od której ma się pętla rozpocząć i do jakiej ma trwać,
function set(first, second) {
  for (let i = first; i <= second; i++) console.log(i);
}
//e) przyjmuje trzy argumenty, pierwszy - liczba od której zaczynamy pętle, drugi - liczbę do której pętla ma trwać, trzeci -
// liczbę co ile ma się pętla zwiększać,
function createLoop(start, end, add) {
  for (let i = start; i <= end; i += add) {
    console.log(i);
  }
}
// 4. Napisz funkcje, która:
// a) stwórz tablice 5 elementową i za pomocą pętli wypisz wszystkie jej elementy,
const colour = ["red", "green", "blue", "black", "yellow"];
for (i = 0; i < colour.length; i++) {
  console.log(colour[i]);
}
// b) stwórz tablice z kilkoma imionami i wyświetl "Cześć {imie}" za pomocą pętli dla każdego imienia,
const names = [`Daniel`, `Bolek`, `Michał`, `Adam`, "Darek"];
for (i = 0; i < names.length; i++) {
  console.log(`Cześć ${names[i]}`);
}
//c) stwórz tablicę z obiektami, w każdym obiekcie niech będzie model auta i kolor, i wyświetl w stringu
// "Przed Wami stoi {kolor} {model}",
const arrayCar = [
  {
    model: "123",
    colour: "Czarny",
  },
  {
    model: "124",
    colour: "Biały",
  },
  {
    model: "190",
    colour: "Zielony",
  },
];
for (let i = 0; i < arrayCar.length; i++) {
  console.log(
    `Przed Wami stoi Mercedes ${arrayCar[i].model} - ${arrayCar[i].colour}`
  );
}
//d) stwórz tablicę z 10 elementami, czyli cyframi od 1 do 10 i niech wyświetli ona tylko liczby parzyste z tej tablicy
const ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= ten.length; i++) {
  if (ten[i] % 2 === 0) {
    console.log(ten[i]);
  }
}
//e) ** stwórz tablice kilku elementową o różnych typach i wyświetl z tablicy tylko te elementy które są stringami,
const box = ["car", 23, false, "mouse", "phone", 4, "5"];
for (let i = 0; i <= box.length; i++) {
  const arrayType = box[i];
  const isString = typeof arrayType === "string";
  if (isString) console.log(arrayType);
}

// 5. Napisz funkcję, która:
// a) przyjmuje tablicę liczb jako parametr i liczy sume elementów tej tablicy,
const numbArr = [2, 4, 6, 8, 34, 56, 78];
function addElements(my) {
  let elements = 0;
  for (let i = 0; i < numbArr.length; i++) {
    elements += my[i];
  }
  console.log("Suma elementów tablicy to: ", elements);
}
addElements(numbArr);
//b) przyjmuje tablicę z numberami i z tego tworzy dwie nowe tablice z liczbami parzystymi i nieparzystymi,
const numberArray = [2, 4, 5, 6, 8, 9, 34, 56, 57, 78];
function segregation(numb) {
  let oddNumb = [];
  let evenNumb = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      evenNumb.push(numb[i]);
    } else {
      oddNumb.push(numb[i]);
    }
  }
  console.log(evenNumb);
  console.log(oddNumb);
}
segregation(numberArray);
//c) przyjmuje string jako parametr i jeśli string zawiera w sobie "y" niech wyświetli Jest!, a w inny przypadku Nie ma!
function search(string) {
  if (string.includes("y")) {
    console.log("Jest!");
  } else {
    console.log("Nie ma!");
  }
}
search("drewniany");
search("osiem");
//d) przyjmuje liczbę jako parametr i wyświetla wynik mnożenia jej razy cyfry pomniejszone o 1 aż do 1ego, np.
// countResult(4) // 4 * 3 * 2 * 1 = 24
// Przykładowy wynik
// 24
function multiply(x) {
  for (let i = x - 1; i > 0; i--) {
    x *= i;
  }
  console.log(x);
}
multiply(7);
//e) Przyjmuje tablicę jako jeden parametr i string "number" lub "string" jako drugi parametr, w zależności od drugiego
// parametru niech funkcja dodaje do siebie elementu number lub string do siebie tworząc sumę lub jeden długi string, jeśli
// drugi parametr nie będzie sie zgadzał z "number" lub "string" to niech pokaże odpowiedni komunikat "Drugi parametr
// jest nieprawidłowy!", dodaj jeszcze zabezpieczenie jeśli tablica będzie pusta

//
// f) przyjmuje jako parametr tablicę obiektów. W każdym obiekcie powinno znajdować się: name, lastName, hasCar,
//  hasDrivingLicence. Niech będzie to tablica z 4 osobami. Stwórz funkcję które przyjmie taką tablicę jako parametr
//  i sprawdzi nam kto ma prawo jazdy i samochód i kto może Cię zabrać do domu z imprezy, niech również wyświetli
//  odpowiedni komunikat jeśli ktoś ma prawko ale nie ma auta lub nie ma ani jednego ani drugiego,

const friends = [
  {
    name: "Daniel",
    lastName: "Nowak",
    hasCar: true,
    hasDriveinLicence: true,
  },
  {
    name: "Michał",
    lastName: "Lipka",
    hasCar: false,
    hasDriveinLicence: true,
  },
  {
    name: "Andrzej",
    lastName: "Walczak",
    hasCar: true,
    hasDriveinLicence: false,
  },
  {
    name: "Kevin",
    lastName: "SamWDomu",
    hasCar: false,
    hasDriveinLicence: false,
  },
];

function weDrive(who) {
  for (let i = 0; i < friends.length; i++) {
    if (who[i].hasCar === true && who[i].hasDriveinLicence === true) {
      console.log(
        `Możesz wrócić z ${who[i].name} ${who[i].lastName}, ponieważ ma samochód i prawko`
      );
    } else if (who[i].hasCar === true && who[i].hasDriveinLicence === false) {
      console.log(
        `${who[i].name} ${who[i].lastName} ma samochód, ale niestety nie ma prawka`
      );
    } else if (who[i].hasCar === false && who[i].hasDriveinLicence === true) {
      console.log(
        `${who[i].name} ${who[i].lastName} nie ma samochodu, ale może prowadzić`
      );
    } else {
      console.log(
        `${who[i].name} ${who[i].lastName} nie ma prawka i samochodu`
      );
    }
  }
}
weDrive(friends);
// g) przyjmuje jako parametr tablice i nowy element do tablicy. Funkcja ta powinna przeiterować
// tablice sprawdzając czy już taki element w niej jest jeśli go nie ma to dodać do tablicy, a jak jest
// to wyświetlić odpowiedni komunikat,
let fruits = ["apple", "banana", "orange", "pineapple", "bluberry"];

function tableAdd(mainTable, element) {
  for (let i = 0; i < fruits.length; i++) {
    i = element;
    if (mainTable.includes(element) !== element.includes(element)) {
      console.log(`Dodano do tablicy wyraz: ${element}`);
      mainTable.push(element);
    } else {
      console.log(`W tablicy już jest wyraz: ${element}`);
    }
  }
}
tableAdd(fruits, "pear");
tableAdd(fruits, "apple");
