// sortCharacters
const string = "otorrinolaringologo";

// Con sort y join. Para todo mayusculas o todo minuscula
function sortCharacters (stri) {
    return Array.from(string).sort().join("");;
}

console.log("La palabra es " + string);
console.log("Ordenada alfabeticamente");
console.log(sortCharacters(string));