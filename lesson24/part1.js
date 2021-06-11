// 1.  Co oznacza, że kod może być asynchroniczny?

// Kod moze być asynchroniczny to znaczy -  pozwala na wykonywanie kilku zadań równocześnie.
// Dzięki temu można odpalić równocześnie kilka funkcji.
// Jedna będzie np. pobierać dane do tabeli na stronie, druga wysyłać informacje o zalogowanym użytkowniku,
//  a jeszcze następna będzie "czekać" by w odpowiednim momencie pokazać okno lub obraz na stronie.

//  2. Pobierz tablicę postaci z powyższego endpointa i wyświetl ją w consoli za pomocą Promise.
//  3. Dodaj zabezpieczenie do powyższego podpunktu tak aby w przypadku błędu wyświetlić w konsoli napis
//  "Ups coś poszło nie tak!", przetestuj to dodając dowolne litery do enpointy aby był nieprawidłowy i sprawdź
//  czy napis się wyświetli.

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);
  })
  .catch((error) => {
    console.log("ups coś poszło nie tak", error);
  });

//  4. Zrób to samo co w punkcie 2 ale za pomocą async/await.

const downlCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await response.json();
  console.log(characters);
};
downlCharacters();

// 5. Znajdź na stronie The Rick and Morty API jak pobrać pojedyńczą postać i pobierz jedną postać w dowolny sposób,

const oneCharacter = async (id = 26) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const character = await response.json();
  console.log(
    `Wybrana przez Ciebie postać ma id ${id} i jest to ${character.name}`
  );
};
oneCharacter();
