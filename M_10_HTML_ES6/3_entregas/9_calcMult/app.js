// calcMult
const numbers1 = [333, 123, 111, 234, 432, 348 ];
const numbers2 = [1, 2, 3, 4, 5, 6 ];

// Con map, mutlplico todo el array "numbers1" por "numbers2"
function multArray(array1,array2) {
    const multiplyAll = array1.map((number, index) => number * array2[index]);
    return multiplyAll;
}

console.log("Todos los números:" + " " + numbers1 + " " + numbers2);
console.log("El producto entre todos ellos: ");
console.log(multArray(numbers1,numbers2));

