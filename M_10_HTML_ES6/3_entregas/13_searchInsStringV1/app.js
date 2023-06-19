// searchInStringV1
const string = "Otorrinolaringologo";
const character = "O";



// Con reduce
function searchInStringV1(string, character) {
    const charArray = Array.from(string);
    const occurrences = charArray.reduce((count, char) => {
      if (char.toLowerCase() === character.toLowerCase()) {
        count++;
      }
      return count;
    }, 0);
    return occurrences;
  }
    
    console.log("La palabra es " + string);
    console.log("La letra " + character + " aparece:");
    console.log(searchInStringV1(string, character));