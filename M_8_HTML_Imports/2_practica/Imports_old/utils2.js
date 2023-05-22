//      function hello() {
//          return  "hello en ingles" ;
//      }

// Con una funcion autoinvocada

(function(App) {
    App.helloEnglish = function () {
        return "Hello! :#"
    }
})(window.App || (window.App = {}));