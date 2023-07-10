// calcMult
const numbers1 = [2, 3, 17];

// Con map, mutlplico todo el array "numbers1" por "numbers2"
function calcMult(...nums) {
    return nums.reduce((acc, num) => acc * num, 1);
  }


console.log("Todos los números:" + " " + numbers1);
console.log("El producto entre todos ellos: ");
console.log(calcMult(...numbers1));

