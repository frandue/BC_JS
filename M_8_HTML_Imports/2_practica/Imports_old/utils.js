//    function hello() {
//        return "Hola! :)" ;
//    }
//    function bye() {
//       return "Adios"
//    }

// Esto mejor no hacerlo asi
//           window.App = {
//               hello,
//               bye
//            }
// Mejor funciones autoinvocadas
(function(App) {
    App.hello = function () {
        return "Hola! :X"
    }
})(window.App || (window.App = {}));
// Pongo para que empieze en App pero en caso de que no exista
// Lo creo con un objeto vacio
// Podriamos dar un nombre a la funcion y luego llamarla
// EL ORDEN SIGUE IMPORTANDO
// De aqui se paso al uso de librerias