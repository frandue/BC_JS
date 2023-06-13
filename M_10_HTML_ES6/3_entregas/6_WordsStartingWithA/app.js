// wordsStartingWithA
const words = ["aguacate", "libro", "arbol", "anchoa", ];

// Con destructuring y rest
function wordsStartingWithA(aaaa) {
    const { id, ...rest } = user; // Busca la propiedad llamada Id si la hubiera
    return { ...rest }; // todas la propiedades menos Id
};
console.log("Todas:" + " " + words);
console.log("Menos el Id:");
console.log(wordsStartingWithA(words));

