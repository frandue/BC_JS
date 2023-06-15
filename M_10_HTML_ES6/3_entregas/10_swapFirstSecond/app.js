// swapFirstSecond
const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];

// Con destructuring y rest
function swapFirstToLast(array) {
    const [ first, second, third, fourth, fifth ] = array;
    return [ second, first, third, fourth, fifth ];
};
console.log("Original:" + " " + teachers);
console.log("El primero por el ultimo y viceversa:");
console.log(swapFirstToLast(teachers));

