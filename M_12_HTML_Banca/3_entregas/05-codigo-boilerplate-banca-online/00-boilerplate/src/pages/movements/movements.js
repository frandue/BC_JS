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
  getAccount(params.id).then(apiAccount => {
    account = mapAccountFromApiToViewModel(apiAccount);
    onSetValues(account);
  });

  getAccountMovements(params.id).then(movements => {
    const mappedMovements = mapMovementListFromApiToViewModel(movements);
    addMovementRows(mappedMovements);
  });
} else {
  getMovementsList().then(movements => {
    const mappedMovements = mapMovementListFromApiToViewModel(movements);
    addMovementRows(mappedMovements);
  });
}

