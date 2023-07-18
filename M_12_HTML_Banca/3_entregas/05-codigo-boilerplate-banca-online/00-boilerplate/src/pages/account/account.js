// Tengo que recoger los valores que el usuario ha introducido.

//Para recoger los valores de esos campos y onSubmitForm para recoger los valores tras pulsar el boton
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers';

import { formValidation } from './account.validations';

import { history } from '../../core/router';

import { getAccount, updateAccount, insertAccount  } from './account.api';

import { mapAccountFromApiToViewModel, mapAccountFromViewModelToApi } from './account.mapper';

const params = history.getParams();
const isEditMode = Boolean(params.id); // !! = Boolean

if (isEditMode) {
    getAccount(params.id).then(apiAccount => {
        account = mapAccountFromApiToViewModel(apiAccount);
        onSetValues(account);
    });
}

let account = {     //Solo let no const como dice en el video
    id: '',
    type: '',
    alias: '',
};

onUpdateField('type', event => {
    const value = event.target.value;
    account = {
        ...account,
        type: value,
    };
    formValidation.validateField('type', account.type).then(result => {
        onSetError('type', result);
    });
});

onUpdateField('alias', event => {
    const value = event.target.value;
    account = {
        ...account,
        alias: value,
    };
    formValidation.validateField('alias', account.alias).then(result => {
        onSetError('alias', result);
    });
});

const onSave = () => {
    const apiAccount = mapAccountFromViewModelToApi(account);
    return isEditMode ? updateAccount(account) : insertAccount(apiAccount);
};

onSubmitForm('save-button', () => {
    formValidation.validateForm(account).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            onSave().then(apiAccount => {
                history.back();
            });
        }
    });      
});