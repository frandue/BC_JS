import { setAccountOptions } from './transfer.helpers';

import { getAccountList } from "./transfer.api";

import { history } from '../../core/router';

import { mapAccountFromApiToViewModel } from './transfer.mapper';

import { getAccount } from '../account/account.api';

import { onSetValues } from '../../common/helpers';

import { onUpdateField } from './transfer.validation';

const params = history.getParams();

const hasId = Boolean(params.id); // !! = Boolean


  getAccountList().then(accountList => {
  setAccountOptions( accountList,params );
  });
  
  onUpdateField('select-account', event = {
    const value = event.target.value;
    tranfer = { ...tranfer, notes: value };
  })
