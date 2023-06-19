// longest
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [1, 2, 3, 4, 5];
const array3 = [1, 2, 3, 4];
const array4 = [1, 2, 3];


// Con reduce
function longest (...arrays) {
    return arrays.reduce((a, b) => (a.length > b.length ? a : b));
}

console.log("Todos los array son:" + " " + array1+ "|" + array2+ "|" + array3+ "|" + "|" + array4);
console.log("El mas largo es: ");
console.log(longest(array1,array2,array3,array4));

