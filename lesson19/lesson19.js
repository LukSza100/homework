const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1.  zwróć sumę wszystkich elementów znajdujących się w tablicy,

const arrayReduce = array.reduce(function (acc, item) {
  return acc + item;
});
console.log(arrayReduce);

// 2. zwróć sumę wszystkich parzystych elementów tablicy,

const evenNumbArray = array.filter(function (x) {
  return x % 2 === 0;
});
const reduceToEven = evenNumbArray.reduce(function (acc, x) {
  return acc + x;
});
console.log(reduceToEven);

// 3. zwróć sumę wszystkich elementów tablicy + 10(10 dodaj za pomocą initialValue)

const addTenArray = array.reduce(function (acc, i) {
  return acc + i;
}, 10);
console.log(addTenArray);

// 4. Napisz czym będzie accumulator jak nie podamy initialValue, a czym będzie jak podamy initialValue,
/*
Jeżeli nie podamy initialValue accumulatorem będzie pierwsza wartość w tablicy, 
// natomiast jeżeli określimy initialValue będzie on accumulatorem
*/

// 5. Jeśli podamy initialValue w tablicy to jaki index będzie miał prawdziwy pierwszy element naszej tablicy ?
//Pomimo podania initialValue pierwsza wartość w tablicy będzie miała index 0.

//  6. Napisz pętle for która będzie miała takie samo działanie jak pętla reduce(pokazane było na live)

function myReduce(first, next) {
  let b = next;
  for (i = 0; i < array.length; i++) {
    const item = array[i];
    b = first(b, item);
  }
  return b;
}

const arrReduce = myReduce(function (acc, next) {
  return acc + next;
}, 0);

console.log(arrReduce);

// 7. zwróć true jeśli tablica zawiera chociaż jeden element większy niż 50,

function biggerThan50(element, index, array) {
  return element < 50;
}
console.log(someArray.some(biggerThan50));

// 8. zwróć true jeśli w tablicy każdy element jest większy od 2,

function biiggerThan2(element, index, array) {
  return element > 2;
}
console.log(someArray.every(biiggerThan2));

// 9. Jaka jest różnica między some i every?
// some - zwraca true jezeli przynajmniej jeden element tablicy spełnia warunek funkcji
// every - zwraca true jeżeli kazdy element spełnia warunek określony w funkcji

// 10. sprawdz czy tablica zawiera element podzielny przez 7 i jeśli tak to niech wyświetli w konsoli informacje, że
// w tablicy znajduje się element podzielny przez 7,

someArray.some(function (element, index, tablica) {
  if (element % 7 === 0) {
    console.log(
      `tablica (someArray) zawiera elementy podzielne przez 7: `,
      element
    );
  }
});

// 11. stwórz metodę some za pomocą pętli for,

function some(element, next) {
  for (i = 0; i <= element.length; i++) {
    if (element[i] === next) {
      return true;
    }
  }
  return false;
}

console.log(some(someArray, 54));

//  12. stwórz metodę every za pomocą pętli for

function every(element, next) {
  for (i = 0; i <= element.length; i++) {
    if (element[i] !== next) {
      return false;
    }
  }
  return true;
}

console.log(every(someArray, 54));

// 13. przyjmuje tablicę jako parametr i sumuje nam elementy typu number z tej tablicy(użyj typeof),

const mixArray = [2, 7, true, "9", "string", 16, 18];

const sumIfNumber = mixArray
  .filter(function (item) {
    return typeof item === "number";
  })
  .reduce(function (first, next) {
    return first + next;
  }, 0);

console.log(sumIfNumber);

// 14. przyjmuję dwa parametry (tablicę oraz wartość initialValue), a następnie odejmuje nam każdy kolejny element
// tablicy od następnego,

const arrayA = [1, 2, 3, 4, 5, 6, 7];

function reduce2(array, iV) {
  return array.reduce(function (acc, next) {
    return acc - next;
  }, iV);
}

console.log(reduce2(arrayA, 20));

// 15. przyjmuję dwa parametry(tablice i wartość, której szukamy w tej tablicy). Funkcją powinna nam zwrócić true
// jeśli w tablicy znajdzie się ta wartość,

function checkNumber(array, value) {
  return arrayA.some(function (element) {
    return element == value;
  });
}
console.log(checkNumber(arrayA, 4));

//16.  Stwórz funkcję konstruktora, która stworzy nam obiekt samochód z właściwościami:
// (model, yearOfProduction, color, drive()) i stwórz dwa samochody tym konstruktorem,

function Car(model, yearOfProduction, color, drive) {
  this.model = model;
  this.yearOfProduction = yearOfProduction;
  this.color = color;
  this.drive = () => console.log("Wygrałeś jazdę próbną");
}

const carAudi = new Car("Audi R8", 2021, "black carbon");
const carJeep = new Car("Jeep Wrangler", 2020, "yellow");

carAudi.drive();
carJeep.drive();

// 17. Co robi słówko kluczowe New i kiedy możemy go użyć?
//
// Operator new tworzy nową instancję typu obiektu zdenifiowanego przez
// użytkownika lub instancję wbudowanego typu obiektu, który posiada konstruktor.

//18. Za pomocą prototype dodaj dwie funkcje do konstruktora car, tankFuel i stop, które będą
// wypisywać w konsoli dowolny napis,

Car.prototype.tankFuel = function () {
  console.log("Kończy się paliwo, stanie Ci fura");
};
Car.prototype.stop = function () {
  console.log("Nie zatankowałeś - no to STOP");
};
carAudi.tankFuel();
carJeep.stop();
