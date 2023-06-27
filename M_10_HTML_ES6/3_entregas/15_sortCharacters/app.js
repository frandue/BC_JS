// sortCharacters
const entrada = "otorrinolaringologo";

// Con sort y join. Para todo mayusculas o todo minuscula
function sortCharacters (stri) {
    return Array.from(stri).sort().join("");;
}

console.log("La palabra es " + entrada);
console.log("Ordenada alfabeticamente");
console.log(sortCharacters(entrada));