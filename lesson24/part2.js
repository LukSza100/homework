// 1.
async function main() {
  const pobranePostaci = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await response.json();
    console.log(characters);
  };
  pobranePostaci();

  const showCharacters10 = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const character = await response.json();
    const arrTenCharacters = character.results;
    const $charactersList = document.getElementById("numberAllCharacters");
    $charactersList.innerHTML = character.info.count;
    arrTenCharacters.splice(10, 10);
    console.log(character);
    return character;
  };

  showCharacters10();
}

main();
