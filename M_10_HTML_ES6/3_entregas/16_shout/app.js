// shout
const string1 = "cierra";
const string2 = "la ";
const string3 = "puerta";

// Con map y join. Para todo mayusculas o todo minuscula
function shout (...strings) {
    return strings.map(word => word.toUpperCase()).join(" ");
}

console.log("Las palabras sin gritar:");
console.log(shout(string1,string2,string3).toLowerCase());

console.log("Las palabras gritadas:");
console.log(shout(string1,string2,string3)+ "!");