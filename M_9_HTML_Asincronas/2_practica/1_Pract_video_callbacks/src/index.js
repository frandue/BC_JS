// Con funcion estandar
const myCallback = function() {
    alert("Hola despues de 3 segundos");
};
setTimeout(myCallback, 3000);        //Recibe la funcion como callback, Numero de milisegundos que van a pasar para que se ejecute

// Con Arow function
const myCallbacKKK = () => {
    alert("Hola despues de 6 segundos");
};
setTimeout(myCallbacKKK, 6000);        //Recibe la funcion como callback, Numero de milisegundos que van a pasar para que se ejecute

// OJO con anidar muchos callback -> callbacks hell