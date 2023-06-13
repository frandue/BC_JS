// swapFirstToLast
const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];

// Con destructuring y rest
function swapFirstToLast(aaaa) {
    const [ firts, second, third, fourth, fifth ] = aaaa;
    return [ fifth, second, third, fourth, firts ];
};
console.log("Original:" + " " + teachers);
console.log("El primero por el ultimo y viceversa:");
console.log(swapFirstToLast(teachers));

