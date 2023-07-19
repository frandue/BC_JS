import { setAccountOptions } from './transfer.helpers';

import { getAccountList } from "./transfer.api";

import { history } from '../../core/router';

import { onUpdateField } from '../../common/helpers'

const params = history.getParams();

const hasId = Boolean(params.id); // !! = Boolean

getAccountList().then(accountList => {
    if (hasId) {
  //Si voy desde mis cuentas el valor origen esta preseleccionado   
     setAccountOptions( accountList,params.id )
  //Si voy directamente a transferencia el valor origen no esta preseleccionado   
    } else {setAccountOptions( accountList,params )}
  });

//Recojo los datos de transferencias
let valueTransfer = {
      iban: '',
      name: '',
      amount: '',
      concept: '',
      day: '',
      month: '',
      year: '',
      email: '',
  };

//Almaceno los parametros. Uso onUpdateFiel(id de lo que quiero almacenar, evento de teclear)
//Cuando se pulse una tecla en el input

onUpdateField('iban', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    iban: value
  };
})
