// searchInStringV2
const string = "Otorrinolaringologo";
const character = "O";



// Con filter
function searchInStringV2 (stri,char) {
    const arrayString = Array.from(stri);
    return (arrayString.filter((ch) => ch.toLowerCase() === char.toLowerCase())).length;
}

console.log("La palabra es " + string);
console.log("La letra " + character + " aparece:");
console.log(searchInStringV2(string,character));