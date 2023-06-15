// firstEqual
const words1 = "Aguacate";
const words2 = "olmeja";
const letter = "a"

// Con rest,every, palabras que empieza con "A" o "a"
function firstEqual(letter,...strings) {
    return strings.every((string) => string.toLowerCase().startsWith(letter));;
}

console.log("Todas las palabras son:" + " " + words1 + " y " + words2);
console.log("Empiezan con: " + letter);
console.log(firstEqual(letter,words1,words2));

