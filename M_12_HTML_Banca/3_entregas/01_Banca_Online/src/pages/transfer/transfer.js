import { setAccountOptions } from './transfer.helpers';

import { getAccountList, makeTransfer } from "./transfer.api";

import { history, routes } from '../../core/router';

import { onUpdateField, onSetError, onSubmitForm, onSetFormErrors } from '../../common/helpers'

import { formValidation } from './transfer.validation';

import { mapTransferFromViewModelToApi } from './transfer.mapper'

const params = history.getParams();

const isAccountSelected = Boolean(params.id); // !! = Boolean
const initialAccountId = isAccountSelected ? params.id : 1;

getAccountList().then(accountList => {
  setAccountOptions(accountList, initialAccountId);
});

// Recojo los datos de transferencias  insertAccount
let valueTransfer = {
  accountId: '',
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  day: '',
  month: '',
  year: '',
  email: '',
};

const currentDate = new Date();
const todayDay = currentDate.getDate();
const todayMonth = currentDate.getMonth() + 1;
const todayYear = currentDate.getFullYear();

onUpdateField('select-account', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    accountId: value,
  };
  //VALIDADCION 
  formValidation.validateField('select-account', valueTransfer.accountId).then(result => {
    onSetError('accountId', result);
  });
});

onUpdateField('iban', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    iban: value,
  };
  //VALIDADCION 
  formValidation.validateField('iban', valueTransfer.iban).then(result => {
    onSetError('iban', result);
  });
});

onUpdateField('name', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    name: value,
  };
  // VALIDADCION  
  formValidation.validateField('name', valueTransfer.name).then(result => {
    onSetError('name', result);
  });
});

onUpdateField('amount', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    amount: value,
  };
  // VALIDADCION    
  formValidation.validateField('amount', valueTransfer.amount).then(result => {
    onSetError('amount', result);
  });
});

onUpdateField('concept', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    concept: value,
  };
  // VALIDADCION    
  formValidation.validateField('concept', valueTransfer.concept).then(result => {
    onSetError('concept', result);
  });
});

//SIN VALIDADCION -> No es necesario
onUpdateField('notes', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    notes: value,
  };
});

onUpdateField('day', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    day: value,
  };
  // VALIDACIONES    
  formValidation.validateField('day', valueTransfer.day).then(result => {
    onSetError('day', result);
  });
  validateDate();
});

onUpdateField('month', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    month: Number(value),
  };
  // VALIDACIONES    
  formValidation.validateField('month', valueTransfer.month).then(result => {
    onSetError('month', result);
  });
  validateDate();
});

onUpdateField('year', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    year: value,
  };
  // VALIDACIONES    
  formValidation.validateField('year', valueTransfer.year).then(result => {
    onSetError('year', result);   
  });
  validateDate();
});

onUpdateField('email', event => {
  const value = event.target.value;
  valueTransfer = {
    ...valueTransfer,
    email: value
  };
  // VALIDADCION    
  formValidation.validateField('email', valueTransfer.email).then(result => {
    onSetError('email', result);
  });
});

const validateDate = () => {
  formValidation.validateField('date', new Date(`${valueTransfer.year}-${valueTransfer.month}-${valueTransfer.day}`)).then(result => {
    onSetError('date', result);
  });
}

//Export la traferencia con el boton
 onSubmitForm('transfer-button', () => {
  formValidation.validateForm(valueTransfer).then(result => {
      onSetFormErrors(result);
      if (result.succeeded) {
        const apiTransfer = mapTransferFromViewModelToApi(valueTransfer);
        makeTransfer(apiTransfer).then((response) => {
          if (response.id) {
            alert("Transferencia realizada con éxito");
            history.push(routes.accountList);
          } else {
            alert("Ha habido un problema. No se ha podido realizar la transferencia");
          }
        });
      }
  });      
 });