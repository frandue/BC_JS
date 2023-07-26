import { setAccountOptions } from './transfer.helpers';

import { getAccountList, updateTransfer } from "./transfer.api";

import { history } from '../../core/router';

import { onUpdateField, onSetError, onSubmitForm, onSetFormErrors } from '../../common/helpers'

import { formValidation } from './transfer.validation';

import { mapTransferFromViewModelToApi } from './transfer.mapper'

const params = history.getParams();

const hasId = Boolean(params.id); // !! = Boolean

getAccountList().then(accountList => {
    if (hasId) {
  //Si voy desde mis cuentas el valor origen esta preseleccionado   
     setAccountOptions( accountList,params.id )
  //Si voy directamente a transferencia el valor origen no esta preseleccionado   
    } else {setAccountOptions( accountList,params )}
  });

//Recojo los datos de transferencias  insertAccount
let valueTransfer = {
      selectAccount: '',
      iban: '',
      name: '',
      amount: '',
      concept: '',
      day: '',
      month: '',
      year: '',
      email: '',
  };

/////

// Almacena el valor seleccionado en esta variable
let selectedValue = '';
if (hasId) {
    selectedValue = params.id; // Obtén el valor seleccionado y almacénalo en selectedValue

  getAccountList().then(accountList => {
    const account = accountList.find(account => account.id === selectedValue);
    selectedValue = account.name;
    valueTransfer = {
      ...valueTransfer,
      selectAccount: selectedValue
    };
  })
  //
} else {
// Obtener el elemento <select> con el id "select-account"
const selectAccountElement = document.getElementById('select-account');
// Escuchar el evento "change" en el elemento <select>
selectAccountElement.addEventListener('change', (event) => {
// Obtén el valor seleccionado y almacénalo en selectedValue
  selectedValue = event.target.value; 
getAccountList().then(accountList => {
  const account = accountList.find(account => account.id === selectedValue);
  selectedValue = account.name;
  valueTransfer = {
    ...valueTransfer,
    selectAccount: selectedValue
  };
  })
});
}

/////

/////
const currentDate = new Date();

const todayDay = currentDate.getDate();
console.log(todayDay);

const todayMonth = currentDate.getMonth() + 1;
console.log(todayMonth);

const todayYear = currentDate.getFullYear();
console.log(todayYear);



/////

onUpdateField('iban', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    iban: value
  };
  //VALIDADCION 
  formValidation.validateField('iban', valueTransfer.iban).then(result => {
    onSetError('iban', result);
});
})

onUpdateField('name', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    name: value
  };
// VALIDADCION  
  formValidation.validateField('name', valueTransfer.name).then(result => {
    onSetError('name', result);
});
})

onUpdateField('amount', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    amount: value
  };
// VALIDADCION    
  formValidation.validateField('amount', valueTransfer.amount).then(result => {
    onSetError('amount', result);
});
})

onUpdateField('concept', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    concept: value
  };
// VALIDADCION    
  formValidation.validateField('concept', valueTransfer.concept).then(result => {
    onSetError('concept', result);
});
})

onUpdateField('notes', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    notes: value
  };
})
//SIN VALIDADCION -> No es necesario

onUpdateField('day', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    day: value,
  };
// VALIDADCION    
  formValidation.validateField('day', valueTransfer.day).then(result => {
    //
    onSetError('day', result);
    //
});
})

onUpdateField('month', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    month: value,
  };
// VALIDADCION    
  formValidation.validateField('month', valueTransfer.month).then(result => {
    onSetError('month', result);
});
})

onUpdateField('year', event => {
  const value = event.target.value;
  const year = value;
  let isValidYear = (year > todayYear);
  valueTransfer = {
    ...valueTransfer,
    year: value,
  };
  

// VALIDADCION    
    //result.succeeded = true
  formValidation.validateField('year', valueTransfer.year).then(result => {
    console.log(result);
    onSetError('year', result);
    if(year>=todayYear){
      {result.succeeded = true}
    } else {
      {result.succeeded = false}
    };
    console.log(result);
});
})

onUpdateField('email', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    email: value
  };
  console.log(valueTransfer);
// VALIDADCION    
  formValidation.validateField('email', valueTransfer.email).then(result => {
    onSetError('email', result);
});
})

//Export la traferencia con el boton
 onSubmitForm('transfer-button', () => {
  const apiTransfer = mapTransferFromViewModelToApi( valueTransfer);
  formValidation.validateForm(apiTransfer).then(result => {
      onSetFormErrors(result);

      if (result.succeeded) {
        updateTransfer(apiTransfer).then(() => { history.back });
      }
  });      
 });