const myPromise = new Promise((resolve, reject)=>{
    //Podemos hacer todos los calculos que queramos en el cuerpo de la promesa
    resolve("Hola, esto es la respuesta correcta de la promesa ;)");
});
myPromise.then(function(result) {
    alert(result);
});

//# sourceMappingURL=index.ec3e5046.js.map
