// swapFirstSecond
const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];

// Con destructuring y rest
function swapFirstToLast(array) {
    const [ first, second, ...rest ] = array;
    return [ second, first, ...rest ];
};
console.log("Original:" + " " + teachers);
console.log("El primero por el ultimo y viceversa:");
console.log(swapFirstToLast(teachers));

