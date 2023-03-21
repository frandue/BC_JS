// HOTEL

//3_OCUPATION ROOM
function getOcupRoom () {
    var id_ocup = document.getElementById("ocupa").value;
    console.log (id_ocup);
    if (id_ocup == "Individual" ){
        return 0.75;
    }
    else if (id_ocup == "Doble" ){
        return 1.00;
    }
    else if (id_ocup == "Triple" ){
        return 1.25;
    };
};

//1_TYPE ROOM....
function getRoomPricePerNight () {
    var isSpaChecked = document.getElementById("SPA").checked;
    var id_type = document.getElementById("room").value;
    var pricePerNight = 0;

    if (id_type == "Standard" ){
        pricePerNight = 100;
    }
    else if (id_type == "Junior Suite" ){
        pricePerNight = 120;
    }
    else if (id_type == "Suite" ){
        pricePerNight = 120;
    };
    if (isSpaChecked){
        pricePerNight = pricePerNight + 20;
    };
    return pricePerNight*getOcupRoom();
};

function calculatePrice () {
console.log(document.getElementById("noches").value);
    priceRoom = document.getElementById("noches").value * getRoomPricePerNight() ;

    priceParking = document.getElementById("parking").value * 10;

    totalPrice = priceRoom + priceParking;

    document.getElementById("ttotal").innerText = totalPrice;

};

document.getElementById("total").addEventListener("click",calculatePrice);
