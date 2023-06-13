// hasId
const user = {
        id: 23452345,
        name: "Javi",
        surname: "Calzado",
        age: 36,
    };

// Con destructuring
function hasId(user) {
  const { id } = user;
  return typeof id !== "undefined";
};
console.log(hasId(user));


  