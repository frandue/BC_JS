// Datos de partida
// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];
// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true)
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true)
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true)
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true)
  },
];
//Generador aleatorio de siponiblidad
for(var i = 0; i < myTeam.length; i++) {    //Recorro a todos los participante del equipo
  console.log("La disponibilidad de "+ myTeam[i].name);
  for(var j = 0; j < WORK_HOURS.length; j++) {    //Recorro todas las horas con cada miembro
    var randomAvailability = Math.random() < 0.5 ? "Si" : "No" ;    // Genero de forma aleatoria la disponibilidad
    myTeam[i].availability[j] = randomAvailability;   // Almaceno la disponibilidad
    console.log("   "+ WORK_HOURS[j]+"  "+randomAvailability);
  }
}
//Busqueda de hueco libre
var personsFree = new Array(WORK_HOURS.length).fill(0);   // Inicializamos el array con ceros, la longitud es el numero de horas
for (var i = 0; i < myTeam.length; i++) {                 // Voy recorriendo cada persona del equipo
  for (var j = 0; j < WORK_HOURS.length; j++) {           //Voy recorriendo cada hora
    if (myTeam[i].availability[j] == "Si") {
      personsFree[j] += 1;                                // Incrementamos el valor de personsFree para el índice j
    }
  }
}
var index = parseInt(personsFree.indexOf(4));
if (index != -1) {
  console.log("Hueco encontrado en el horario " + WORK_HOURS[index]);
} else {
  console.log("Lo siento. No hay hueco disponible en el equipo.");  
}