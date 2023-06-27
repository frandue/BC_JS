// swapFirstToLast
const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];

// Con destructuring y rest
function swapFirstToLast(aaaa) {
    const [ first, ...rest ] = aaaa;    //ctrl d
    return [ ...rest, first ];
};
console.log("Original:" + " " + teachers);
console.log("El primero por el ultimo y viceversa:");
console.log(swapFirstToLast(teachers));

