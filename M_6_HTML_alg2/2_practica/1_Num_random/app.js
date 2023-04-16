console.log("Módulo 6 - Algoritmos II");

//Random() genera números decimales aleatorios entre [0,1), el 1 no est incluido.
// Es un numero pseudo aleatorio, sin seguridad criptografica.
// No se puede usar para algo relaccionado con la seguridad.
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//Generacion binaria (50% cada probabilidad)

//Probabilidad de que el resultado sea <= 0,5 --> 50%
//Probabilidad de que el resultado sea >= 0,5 --> 50%
var getRandom = (a,b) =>{
 if ( Math.random() < 0.5){
  return a;
 } else {
  return b;
 }
};
console.log(getRandom("rojo","negro"));
console.log(getRandom("rojo","negro"));
console.log(getRandom("rojo","negro"));
console.log(getRandom("rojo","negro"));
console.log(getRandom("rojo","negro"));

//Ahora con un ternario
var getRandomTern = (a,b) => Math.random() < 0.5 ? a : b ;
console.log(getRandomTern("niño","niña"));
console.log(getRandomTern("niño","niña"));
console.log(getRandomTern("niño","niña"));
console.log(getRandomTern("niño","niña"));

//Ahora con un ternario, hago un redondeo. Esto es una expresion Boleana, 0 -> Es un false y 1 -> Es un true 
var getRandomTernRed = (a,b) => math.round(Math.random()) < 0.5 ? a : b ;

//Ejemplo de Math.Round
console.log(Math.round(0.45));
console.log(Math.round(0.4999999));
console.log(Math.round(0.500000000001));
console.log(Math.round(0.9));

//Multiples Opciones
//1 - caso sencillo:
// Math.floor, entero mas sencillo por la izquierda. Math.ceil entero mas sencillo hacia la derecha.

var getRandNumb = () => Math.floor(Math.random() * 10);

//Escojer un numero entero entre 50 y 100

// EJE  var range = 100 - 50 + 1;  // 51 numeros a escoger
// EJE  Math.floor(Math.random() * range + 50 ); // Resultados = enteros entre [50, 100)]

var max = 100, min = 50;
var range = max - min + 1;
var getRand = () => Math.floor(Math.random() * range + min ) // aleatorios entre [min,max)

// ALgoritmos de busquedas

var array = [1, 3, 4, 5, 2, 9, 6, 7, 8];
var search = (array, target) => {
  for ( var i =0; i < array.length; i++) {
    if ( array[i] === target) return i ; // Solo te devuelve el valor de la primmera vez que aparece
  }
  return -1;
}
console.log(search(array, 11));


// Otra forma de hacerlo mas rapido

var arrayY = [1, 3, 4, 5, 2, 5, 6, 7, 8];

console.log(arrayY.indexOf(5));// Pero solo te devuelve el valor de la primmera vez que aparece


// Busqueda binaria, tiene que estar ordenada
var binarySearch = (arrayB,target) => {
  var min = 0;
  var max = arrayB.length - 1;
  while (min <= max) {
    var mid = Math.floor((max - min) / 2) + min;
    if (arrayB[mid] === target) return mid;
    else if (arrayB[mid] < target) min = mid + 1;
    else max = mid - 1;
  }
  return -1
} 
var sortedArray = [11, 15, 32, 34, 36, 37, 75, 79, 80, 89];
console.log(binarySearch(sortedArray,34))

//Algoritmos de ordenacion.

var arrayB = [3, 5, 1, 8, 7, 2];

//ordenacion por burbuja de menos a mayor Bubble sort
console.log(arrayB);
//EJP
  // Orig: [3, 5, 1, 8, 7, 2];
  // 1era: [3, 1, 5, 8, 7, 2];
  // 2nda: [3, 1, 5, 7, 8, 2];
  // 3era: [3, 1, 5, 7, 2, 8];  
  // 4rta: [1, 3, 5, 7, 2, 8]; 
  // 5nta: [1, 3, 5, 2, 7, 8];
  // 6nta: [1, 3, 2, 5, 7, 8]; 
  // 7nta: [1, 2, 3, 5, 7, 8];

  var swap = (array,a ,b ) => {
    var temp = array [a];
    array[a] = array[b]
    array[b] = temp; 
  }
  var bubbleSort = array => {
    var size = array.length;
    for (var index = 1 ; index < size; index ++) {
      //console.log("Iteracion: ", index);    // Pare ver las iteraciones
      for (var left = 0; left < size - index; left++){
        var right = left + 1;
        if (array[left] > array[right]){
          swap(array, left, right);
        //  console.log("Array: ", array);    // Pare ver las iteraciones
        }
      }
    }
    return array
  }
  console.log(bubbleSort(arrayB));

  //Algoritmo de ordenacion: Selection sort

  var arraySS = [3, 5, 1, 8, 7, 2];

  var selectionSort = array => {
    var size = array.length;
    var minIndex;

    for (var sIndex = 0; sIndex < size; sIndex ++) {
      //s  => seleccion
      minIndex = sIndex

      //bucle interno
      for(var index = sIndex + 1 ; index < size ; index ++) {
        if (array[index] < array [minIndex]) minIndex = index;
      }
      swap(array, minIndex, sIndex);
    }
    return array;
  }

  console.log(selectionSort(arraySS));
