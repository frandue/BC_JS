// Objetivo 1 [Datos del hotel]
//var hotel = {
// name: "Mencey",
//  location: "Tenerife",
//  img:
//    "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
//};
//document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
//document.getElementById("location-hotel").innerHTML =
//  "Ubicado en " + hotel.location;
//document.getElementById("img-hotel").src = hotel.img;

var hoteles = {
  Mencey: {
    name: "Mencey",
    location: "Tenerife",
    img:
      "imag/iberostar-grand-mencey.jpg",
  },
  Lani: {
    name: "Lani's Suites Deluxe",
    location: "Lanzarote",
    img:
      "imag/lani-s-suites-deluxe.jpg",
  },
  Occidental: {
    name: "Occidental",
    location: "Isla Cristina",
    img:
      "imag/OISLA_POOL_05.jpg",
},
};

var selectedHotel = prompt(
  "Indique hotel sobre el que quiere hacer la reseña: Mencey , Lani o Occidental",
);
// diff
document.getElementById("name-hotel").innerHTML =
  "Hotel " + hoteles[selectedHotel].name;

document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hoteles[selectedHotel].location;

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;
// diff

// Objetivo 2 [Puntuación del hotel]
//var rating = prompt("Puntuación: del 1 al 5");
//document.getElementById("rating").innerHTML = rating + " estrellas";

var stars = {
  una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
// diff
document.getElementById("rating").innerHTML = stars[rating];

// Objetivo 3 [Usuario anónimo]
var anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;



