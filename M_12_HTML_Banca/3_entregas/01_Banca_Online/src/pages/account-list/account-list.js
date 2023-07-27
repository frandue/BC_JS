//Para comprobar que estamos en la pagina correcta      getAccountList
//console.log('account-list page');  // Dentro de la consola la veriasmos

//Utilizo la API en el fichero principal
import { getAccountList } from "./account-list.api";

//Import el metodo account-helper que me añade la fila
import { addAccountRows } from "./account-list.helpers";

import { mapAccountListFromApiToViewModel } from './account-list.mappers';

//Untilizamos el metodo de actualizar campo
import { onUpdateField } from '../../common/helpers';

//Necesitamos tambien poder navegar
import { history } from "../../core/router";




//Como es un metodo asincrono tiene su promesa      
getAccountList().then(accountList => {
    const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
    //console.log({accountList});   //ASi me sale el nombre de lo que estoy pintando
//Añado la fila de la lista que me obtiene del servidor
    addAccountRows(viewModelAccountList);

    
//Usamos el elemento onUpdateField
    viewModelAccountList.forEach(account => {
        onUpdateField(`select-${account.id}` , event => {
            const route = event.target.value;
            //console.log(route);
            history.push(route);
        });
    });
});
 