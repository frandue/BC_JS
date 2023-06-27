// concat
const words = ["Aguacate", "libro", "arbol", "anchoa", "lechuga", "Aceituna" ];

// Con join, uno todas las palabras con "|"
function contact(array) {
    const joinWith = words.join("|");
    return joinWith;
}

console.log("Todas las palabras:" + " " + words);
console.log("Las palabras unidas con | :");
console.log(contact(words));

