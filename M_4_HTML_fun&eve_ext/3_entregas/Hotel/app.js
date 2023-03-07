// HOTEL

//VARIABLES
var p_t_room = 0; //Precio por noche cada tipo de habitación
var total_p_t_r = 0; // precio de noche por el nº de noches
var n_noc = 10; // valor incial de noches
var p_n_SPA = 0; // Precio habitacion con SPA por noche
var total_p_n_SPA = 0;

//FUNCIONES PROPIEDADES

function T_room () {
    var id_type = document.getElementById("room").value;
    
    if (id_type == "NoRoom" ){
        p_t_room = 0;
    }
    else if (id_type == "Standard" ){
        p_t_room = 100;
    }
    else if (id_type == "Junior Suite" ){
        p_t_room = 120;
    }
    else if (id_type == "Suite" ){
        p_t_room = 150;
    };
    total_p_t_r = p_t_room * n_noc;
};
function SPA_YN () {
    var id_SPA = document.getElementById("SPA").value;
    console.log(id_SPA);
    if (id_SPA == "on"){
        p_n_SPA = 20;
        console.log(p_n_SPA);
    };
    total_p_n_SPA= p_n_SPA*n_noc


}

//RESULT
var SumTotal = () => document.getElementById("ttotal").innerText =
total_p_t_r + total_p_n_SPA;

//EVENT TYPE ROOM
document.getElementById("room").addEventListener("change",T_room);
//EVENT SPA
document.getElementById ("SPA").addEventListener("change",SPA_YN);

//EVENTS TOTAL
document.getElementById("total").addEventListener("click",SumTotal);













