// HOTEL

//VARIABLES
var N_night = 1; //valor incial de noches
var total_N_night =1; //valor de noches totales

var p_room = 0; //Precio por noche cada tipo de habitación
var total_p_room = 0; // precio de noche por el nº de noches

var p_n_SPA = 0; // Precio habitacion con SPA por noche
var total_p_SPA = 0;

var p_ocup = 1; //Precio habitacion por ocupacion
var total_p_ocup = 1; //Precio habitacion por ocupacion por el nº de noches

var NP_night = 0; //Número de noches por defecto
var total_NP_night = 0; //Precio total de las noches
var PP_night = 10; //Precio noche parking 

//FUNCIONES PROPIEDADES
//0_NIGHTS
function N_room () {
    var id_numN = document.getElementById("noches").value;;
    if (id_numN > 1 ){
        N_night = id_numN;
    }
    else {
        N_night = 1;
    };
    total_N_night = N_night;
    console.log(N_night);
};

//1_TYPE ROOM
function T_room () {
    var id_type = document.getElementById("room").value;
    
    if (id_type == "NoRoom" ){
        p_room = 0;
    }
    else if (id_type == "Standard" ){
        p_room = 100;
    }
    else if (id_type == "Junior Suite" ){
        p_room = 120;
    }
    else if (id_type == "Suite" ){
        p_room = 150;
    };
    total_p_room = p_room * N_night;
    console.log(total_p_room);
};
//2_SPA OR NOT
function SPA_YN () {
    var id_SPA = document.getElementById("SPA").value;
    if (id_SPA == "on"){
        p_n_SPA = 20;
    };
    total_p_SPA= p_n_SPA * N_night;
    console.log(total_p_SPA);
};
//3_OCUPATION ROOM
function O_room () {
    var id_ocup = document.getElementById("ocupa").value;
    console.log (id_ocup);
    if (id_ocup == "NoOcu" ){
        p_ocup = 1.00;
    }
    else if (id_ocup == "Individual" ){
        p_ocup = 0.75;
    }
    else if (id_ocup == "Doble" ){
        p_ocup = 1.00;
    }
    else if (id_ocup == "Triple" ){
        p_ocup = 1.25;
    };
    total_p_ocup = p_ocup ;
    console.log (total_p_ocup);
};
//4_PARKING NIGHT
function N_park () {
    var id_park = document.getElementById("parking").value;
    console.log (id_park);
    if (id_park >= 1 ){
        NP_night = id_park;
    };
    total_NP_night = NP_night * PP_night;
    console.log (total_NP_night);
};
//RESULT
var SumTotal = () => document.getElementById("ttotal").innerText =
((total_p_room + total_p_SPA) * total_p_ocup) + total_NP_night;

//EVENT TYPE ROOM
document.getElementById("room").addEventListener("change",T_room);

//EVENT SPA
document.getElementById ("SPA").addEventListener("change",SPA_YN);

//EVENT OCUPATION
document.getElementById ("ocupa").addEventListener("change",O_room);

//EVENT NIGHT
document.getElementById ("noches").addEventListener("change",N_room);
document.getElementById ("noches").addEventListener("change",T_room);
document.getElementById ("noches").addEventListener("change",SPA_YN);
document.getElementById ("noches").addEventListener("change",O_room);

//EVENT PARKING
document.getElementById ("parking").addEventListener("change",N_park);

//EVENTS TOTAL
document.getElementById("total").addEventListener("click",SumTotal);