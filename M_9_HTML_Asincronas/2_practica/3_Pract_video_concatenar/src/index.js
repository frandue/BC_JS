const myPromise = new Promise((resolve, reject) => {
    const currentDay = (new Date().getDate());

    if (currentDay === 1) {
        reject("Aplicacion dia 1");
    } else if (currentDay < 15) {
        reject("Primera quincena del mes");
    } else {
        resolve ("Segunda quincena del mes");
    }
});

myPromise.then(result => {
    return "La promesa es correcta: " + result;
}).then(result2 => {
    alert(result2);
});

myPromise.catch(error => {
    alert("Error en la promesa: " + error);
});
