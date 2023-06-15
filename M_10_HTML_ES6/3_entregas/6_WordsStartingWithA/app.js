// wordsStartingWithA
const words = ["Aguacate", "libro", "arbol", "anchoa", "lechuga", "Aceituna" ];

// Con filter, palabras que empieza con "A" o "a"
function wordsStartingWithA(array) {
    const startingWithA = array.filter(word => word.toLowerCase().startsWith("a"));
    return startingWithA;
}

console.log("Todas las palabras:" + " " + words);
console.log("Solo las que empiezan con a :");
console.log(wordsStartingWithA(words));

