// excludeId
const user = {
    name: "Javi",
    id: 23452345,
    surname: "Calzado",
    age: 36,
};

// Con destructuring y rest
function excludeId(aaaa) {
    const { id, ...rest } = aaaa; // Busca la propiedad llamada Id si la hubiera
    return { ...rest }; // todas la propiedades menos Id
};
console.log("Original:" + " " + (user));
console.log("Menos el Id:");
console.log(excludeId(aaaa));

