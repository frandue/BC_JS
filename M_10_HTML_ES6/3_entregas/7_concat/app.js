// concat
const words = ["Aguacate", "libro", "arbol", "anchoa", "lechuga", "Aceituna" ];

// Con join, uno todas las palabras con "|"
function concat(array) {
    const joinWith = array.join("|");
    return joinWith;
}

console.log("Todas las palabras:" + " " + words);
console.log("Las palabras unidas con | :");
console.log(concat(words));

