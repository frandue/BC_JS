// Objetivo 1 [Datos del hotel]
var hotel = {
  name: "Mencey",
  location: "Tenerife",
  img:
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
};
document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hotel.location;
document.getElementById("img-hotel").src = hotel.img;