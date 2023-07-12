//Utilizo la API en el fichero principal
import { getMovementsList } from "./movements.api";

//Import el metodo account-helper que me añade la fila
import { addMovementRows } from "./movements.helpers";

import { mapMovementListFromApiToViewModel } from './movements.mapper';


//Como es un metodo asincrono tiene su promesa
getMovementsList().then(movementList => {
    const viewModelMovementList = mapMovementListFromApiToViewModel(movementList);
    //console.log({accountList});   //ASi me sale el nombre de lo que estoy pintando
//Añado la fila de la lista que me obtiene del servidor
    addMovementRows(viewModelMovementList);
    
//Usamos el elemento onUpdateField
    viewModelMovementList.forEach(movement => {
        onUpdateField(`select-${movement.id}` , event => {
            const route = event.target.value;
            history.push(route);
        });
    });
});