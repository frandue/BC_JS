import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';

const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Nombre descriptivivo requerido, Ejp: "Chalet pareado en alquiler en Avenida de Málaga, 71"',
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'Nota requerida, cuanto mas detalles se den, sera mejor',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Email de contacto requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      }
    ],
    phone: [
      {
        validator: Validators.required,
        message: 'Teléfono de contacto requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^(6|7|9)\d{8}$/ },
        message: 'Teléfono no válido',
      },
    ],
    price: [
      {
        validator: Validators.required,
        message: 'Valor del inmueble requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Introduce un número correcto. Ejp: 123.45',
      },
    ],   
    address: [
      {
        validator: Validators.required,
        message: 'Direccion requerida. Ejp: Avenida de Málaga, XX',
      },
    ],
    city: [
      {
        validator: Validators.required,
        message: 'Ciudad requerida',
      },
    ],
    province: [
      {
        validator: Validators.required,
        message: 'Falta la provincia',
      },
    ],  
    squareMeter: [
      {
        validator: Validators.required,
        message: 'Valor de la superficie del inmueble requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Introduce un número correcto. Ejp: 90',
      },
    ],
    rooms: [
      {
        validator: Validators.required,
        message: 'Número de habitaciones del inmueble requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Número de habitaciones incorrecto. Ejp: 3',
      },
    ],
    bathrooms: [
      {
        validator: Validators.required,
        message: 'Número de cuartos de baños del inmueble requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Número de habitaciones incorrecto. Ejp: 1',
      },
    ],
    locationUrl: [
      {
        validator: Validators.required,
        message: 'Url de google maps requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^https:\/\/www\.google\.com\/maps\/embed\?.*$/ },
        message: 'Url no válido. Ejp: https://www.google.com/maps/embed?...',
      },
    ],
    saleTypes: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1 },
        message: 'Selecciona al menos un tipo',
      },
    ],
     mainFeatures: [
        {
          validator: arrayRequired.validator,
          customArgs: { minLength: 1 },
          message: 'Subir al menos una caracteristica básica',
        },
    ],  
    // ],                
  }
};

export const formValidation = createFormValidation(validationSchema);
