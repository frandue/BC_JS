// shout
const palabras =[ "cierra", "la", "puerta" ];
const palabras2 = [ "por", "favor" ];

// Con map y join. Para todo mayusculas o todo minuscula
function shout (...strings) {
    console.log("numero de elementos que recibe la función:");
    console.log(strings.length);
    return (strings.map(word => {
        console.log("item de esta iteracion:");
        console.log(word);
        return word.toUpperCase();
    }).join(" "))+ "!";
}

console.log("Las palabras sin gritar:");
console.log(palabras, palabras2);

console.log("Las palabras gritadas:");
console.log(shout(...palabras, ...palabras2));