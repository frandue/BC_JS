import { getEquipmentList, getPropertyDetail, makeContact } from './proterty-detail.api';
import { history } from '../../core/router/history';
import { mapDetailFromApiToViewModel, mapContactFromViewModelToApi } from './proterty-detail.mappers';
import { setPropertyValues } from './property-detail.helpers';
import { onUpdateField, onSetError, onSubmitForm, onSetFormErrors } from '../../common/helpers';
import { formValidation } from './property-detail.validation';
import { routes } from '../../core/router/routes';

const params = history.getParams();

Promise.all([getPropertyDetail(params.id), getEquipmentList()])
  .then((values) => {
    const apiDetail = values[0];
    const equipmentList = values[1];
    const detail = mapDetailFromApiToViewModel(apiDetail, equipmentList);
    setPropertyValues(detail);
  }
);

let contactar = {
  email: '',
  message: '',
};

onUpdateField('email', event => {
  const value = event.target.value;
  contactar = {
    ...contactar,
    email: value
  };
  // VALIDADCION    
  formValidation.validateField('email', contactar.email).then(result => {
    onSetError('email', result);
  });
});

onUpdateField('message', event => {
  const value = event.target.value;
  contactar = {
    ...contactar,
    message: value,
  };

// VALIDADCION  
formValidation.validateField('message', contactar.message).then(result => {
  onSetError('message', result);
  });
});


//Export el contacto con el boton
onSubmitForm('contact-button', () => {
  formValidation.validateForm(contactar).then(result => {
      onSetFormErrors(result);
      if (result.succeeded) {
        const apiContact = mapContactFromViewModelToApi(contactar);
        makeContact(apiContact).then((response) => {
          if (response.id) {
            alert("Contacto realizada con éxito");
            history.push(routes.propertyList);
          } else {
            alert("Ha habido un problema. No se ha podido contactar");
          }
        });
      }
  });      
 });








