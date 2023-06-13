// head
const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];

// Con destructuring
function head(aaaa) {
    const [first] = aaaa;
    return first;
};
console.log("Original:" + " " + teachers);
console.log("Solo el prmiero:");
console.log(head(teachers));
