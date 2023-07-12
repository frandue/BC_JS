import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';                   //Añado desde donde quiero que me importe la informacion ES6 element.helperrs.js linia 1
import { isValidLogin } from './login.api';
import { formValidarion } from './login.validation';
import { history, routes } from '../../core/router'

let login = {
    user: '',
    password: '',
};

onUpdateField('user', event => {
    const value = event.target.value;         //target es un objeto que tiene la propiedad value
    // login.user = value
    login = {     // De esta forma cada vez que introduzco un usuario nuevo se actualiza
      ...login,
      user: value,     
    };

    formValidarion.validateField('user', login.user).then(result => {
      onSetError('user', result);
    })
});
onUpdateField('password', event => {
     const value = event.target.value;         //target es un objeto que tiene la propiedad value
    // login.password = value 
     login = {     // De esta forma cada vez que introduzco un usuario nuevo se actualiza
         ...login,
         password: value,      
    };  
    
    formValidarion.validateField('password', login.password).then(result => {
      onSetError('pasword', result);
    })
});

const onNavigate = isValid => { 
   if (isValid) {
    history.push(routes.accountList);
  } else {
    alert('Usuario y/o contraseña no válidos');
  }
};

//Para validar al apretar el boton de enviar
onSubmitForm('login-button', () => {
  formValidarion.validateForm(login).then(result => {
    onSetFormErrors(result);
    if (result.succeeded) {
      isValidLogin(login).then(isValid => {
       onNavigate(isValid);
      });
    }
  });
});