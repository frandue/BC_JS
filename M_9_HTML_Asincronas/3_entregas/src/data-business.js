import { createCharacterRow, showCharacter } from "./utils.js";
import axios from "axios";
function getUsers() {
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        const characters = response.data.results;
        const rootElement = document.getElementById("root");
  
        characters.forEach((character) => {
          const characterRow = createCharacterRow(character);
          rootElement.appendChild(characterRow);
  
          characterRow.addEventListener("click", () => {
            showCharacter(character);
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  export { getUsers };
