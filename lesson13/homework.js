// 1. Napisz funkcję na 2 sposoby, czyli przekazując parametry w formie listy i obiektu, Funkcje powinny dostawać podczas
// wywołania obiekt car (zawierający marke, model, rokProdukcji) I wyświetlić dane o tym aucie w stringu, użyj do tego "

function car1(brand, model, productionYear) {
  return `Samochód ${brand} ${model} wyprodukowany w ${productionYear} roku`;
}
// console.log(car1());

const car = {
  brand: "Opel",
  model: "Senator",
  productionYear: 1982,
};

function car2(obj) {
  return `Samochód ${car.brand} ${car.model} wyprodukowany w ${car.productionYear} roku`;
}
// console.log(car2());

// 2. Utworzony w powyższej funkcji obiekt zdestrukturyzuj poza funkcja tak aby można było dostać się do poszczególnych jego
// wartości, bezpośrednio, zamiast wpisując car.model tylko aby można to było zrobić za pomocą samego model.

const { brand, model, productionYear } = car;
// console.log(brand);
// console.log(model);
// console.log(productionYear);

// 3. Do funkcji w zadaniu pierwszy dodaj destrukturyzację wewnątrz funkcji, na parametrze obiektu i wstaw
// do stringa odpowiednie zmienne już zdestrukturyzowane.

function car3({ brand, model, productionYear }) {
  return `Samochód ${brand} ${model} wyprodukowany w ${productionYear} roku`;
}

// console.log(brand);
// console.log(model);
// console.log(productionYear);

// 4. Pokaż mi swój przykład i napisz czym się różni inkrementacja z ++ przed zmienna, a ++
//  po zmiennej czyli let x = 5, ++x OD x++ ?

let x = 5;
// console.log(++x); //warotść jest zmieniana od razu przed wykorzystaniem zmiennej = 6
// console.log(x++); // wartosc jest zmieniona w kolejnym etapie wykonywania funkcji dlatego "jeszcze" wyswietla nam 6, a nie 7.
// console.log(x); // tutaj już mamy 7 po postinkrementacji.

// 5. Napisz funkcję o nazwie kosz, która będzie zawierała w sobie dwie funkcję, rzutZaDwaPkt i rzutZaTrzyPkt oraz stan czyli
// w obiekcie aktualnyWynik, ktory będzie się zaczynał od 0, każda funkcja wewnątrz powinna dodawać odpowiednio 2 i 3 do naszego
// stanu, zwróc z tej funkcji stan i obie funkcje aby móc ich użyć i zrób tak aby aktualnyWynik doszedł do wyniku 7,

function kosz() {
  stan = {
    wynik: 0,
  };
  function rzutZaDwaPkt() {
    stan.wynik += 2;
  }

  function rzutZaTrzyPkt() {
    stan.wynik += 3;
  }
  return {
    stan,
    rzutZaDwaPkt,
    rzutZaTrzyPkt,
  };
}

const play = kosz();
play.rzutZaDwaPkt();
play.rzutZaDwaPkt();
play.rzutZaTrzyPkt();
// console.log(`Zdobyłeś ${play.stan.wynik} pkt.`);

// 6. Stwórz obiekt pralka, która zawiera nazwę, liczbę dostępnych funkcji oraz metodę wewnątrz o nazwę
// information która wyświetli nam dane o pralce czyli jaki to model i ile ma funkcji dostępnych,

const pralka = {
  name1: "LG",
  programs: 11,
  model: 6600,
  information() {
    return console.log(
      `Pralka firmy ${pralka.name1}, model ${pralka.model} - posiada ${pralka.programs} przydatnych funkcji.`
    );
  },
};

// pralka.information();

// 7 Opisz w skrócie na czym polega różnica miedzy kopią, a referencja i stwórz swój własny przykład obrazujący tą różnice +
// jakie konkretnie typy danych są typami prostymi a jakie złożonymi?

// Kopia przechowuje wartość a referencyja nie przechowuje wartości, przechowuje natomiast
// adres/źródło do konkretnego obiektu.

// typy proste:

let colour1 = "red";
let colour2 = colour1;
colour2 = "blue";
// console.log(colour1);
// console.log(colour2);

// w powyższym przypadku odnosząc się do colour2 została zmieniona tylko jego wartość mimo, że wcześniej "przyrównaliśmy" go do colour 1

// typy złożone:
let colour3 = { colour: "green" };
let colour4 = colour3;
colour3.colour = "yellow";

// console.log(colour3.colour);
// console.log(colour4.colour);

// tutaj natomiast zmieniając wartość w jednym obiekcie zostały zmienione wartości obu obiektów.

// Typy proste  to: string,  number, boolean, undefined i null,
// Typy złożone to: function, object i array.
