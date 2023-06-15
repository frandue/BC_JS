// multArray
const numbers = [333, 123, 111, 234, 432, 348 ];
const mult = 2;

// Con map, mutlplico todo el array "numbers" por "mult"
function multArray(array) {
    const multiplyAll = array.map(number => number*mult);
    return multiplyAll;
}

console.log("Todos los números:" + " " + numbers);
console.log("Todos los número multiplicados por " + mult + " son: ");
console.log(multArray(numbers));

