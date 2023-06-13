// tail
const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];

// Con destructuring y rest
function tail(aaaa) {
    const [  , ...rest ] = aaaa;
    return rest;
};
console.log("Original:" + " " + teachers);
console.log("Menos el prmiero:");
console.log(tail(teachers));

