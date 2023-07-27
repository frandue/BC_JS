
import { Validators, createFormValidation } from '@lemoncode/fonk';

import { iban } from '@lemoncode/fonk-iban-validator';

import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';

import { laterDate } from '@lemoncode/fonk-later-date-validator';

// importa lo validadores de la libreria y la cretea un nuevo formulario de validacion.

//// VALORES DE LA FECHA DE HOY

const todayDate = new Date();

const todayDay = todayDate.getDate();

const todayMonth = todayDate.getMonth() + 1;

const todayYear = todayDate.getFullYear();

/////
const validationSchema = {
  field: {
    accountId: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: iban.validator,
        message: 'iban no válido',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Introduce un número correcto. Ejp: 123.45',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    day: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    month: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    year: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    date: [
      {
        validator: laterDate.validator,
        message: 'Fecha no valida',
        customArgs: { date: new Date() },
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],
  }
};

export const formValidation = createFormValidation(validationSchema);
