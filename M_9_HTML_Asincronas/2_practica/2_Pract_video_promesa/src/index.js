const myPromise = new Promise((resolve, reject) => {
        //Podemos hacer todos los calculos que queramos en el cuerpo de la promesa
        //el resolve son los datos a lo que vamos cuando se resuelve la promesa
        //reject cuando se produce un error o queremos devolver un error 
    setTimeout(function () {
        //resolve -> the  n
        //reject -> catch

        reject("Hola, esto es la respuesta incorrecta de la promesa ;)");
    },3000);
    // Me devuleve el resultado a los 3 segundos
});

myPromise
//Si se ejecuta el resolve(line 6)
.then(result => {
     alert(result);
    //Nos crea un alert donde su contenido es el resultado de la funcion
})
//Si se ejecuta el reject(line 6)
.catch(error => {
    alert("Se ha producido un error dentro de la promesa XXX; " + error)
});
