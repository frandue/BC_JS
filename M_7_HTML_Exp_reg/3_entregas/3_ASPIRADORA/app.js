// Extraer imágenes de un fichero HTML

// Seleccionar todas las etiquetas img
var imagenes = document.getElementsByTagName('img');

// Iterar sobre cada imagen y obtener la URL
for (var i = 0; i < imagenes.length; i++) {
  var url = imagenes[i].getAttribute('src');
  console.log(url);
}
