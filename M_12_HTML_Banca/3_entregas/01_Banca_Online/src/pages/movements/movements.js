import { onSetValues } from '../../common/helpers';

//Utilizo la API en el fichero principal
import { getAccountMovements, getMovementsList } from "./movements.api";

//Import el metodo account-helper que me añade la fila
import { addMovementRows } from "./movements.helpers";

import { mapAccountFromApiToViewModel, mapMovementListFromApiToViewModel } from './movements.mapper';

import { history } from '../../core/router';

import { getAccount } from '../account/account.api';

let account = {
  id: '',
  alias: '',
  balance: '',
  iban: '',
};

const params = history.getParams();
const hasId = Boolean(params.id); // !! = Boolean

if (hasId) {
//Relleno los valores de account en la pagina de movimientos cuande entro desde mis cuentas.
  getAccount(params.id).then(apiAccount => {
    console.log(apiAccount);
    account = mapAccountFromApiToViewModel(apiAccount);
    onSetValues(account);
  });
  
  getAccountMovements(params.id).then(movements => {
    const mappedMovements = mapMovementListFromApiToViewModel(movements);
    addMovementRows(mappedMovements);
    console.log(params.id);
  
  });

} else {
  getMovementsList().then(movements => {
    const mappedMovements = mapMovementListFromApiToViewModel(movements);
    addMovementRows(mappedMovements);
  });
}