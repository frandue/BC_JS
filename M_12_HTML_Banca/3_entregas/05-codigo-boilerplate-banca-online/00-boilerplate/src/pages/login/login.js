import { onUpdateField, onSubmitForm  } from '../../common/helpers';                   //Añado desde donde quiero que me importe la informacion ES6 element.helperrs.js linia 1
import { isValidLogin } from './login.api';

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
});
onUpdateField('password', event => {
     const value = event.target.value;         //target es un objeto que tiene la propiedad value
    // login.password = value 
     login = {     // De esta forma cada vez que introduzco un usuario nuevo se actualiza
         ...login,
         password: value,      
    };   
});

onSubmitForm('login-button', () => {
    isValidLogin(login).then(isValid => {
      console.log({ isValid });
    });
});