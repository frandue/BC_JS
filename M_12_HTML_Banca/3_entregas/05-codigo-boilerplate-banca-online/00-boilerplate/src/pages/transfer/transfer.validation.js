import  {Validators, createFormValidation } from '@lemoncode/fonk' ;
// importa lo validadores de la libreria y la cretea un nuevo formulario de validacion.

const validationSchema = {
  field: {
    field: {
        iban: [
          {
            validator: Validators.required,
            message: 'Campo requerido',
          },
          {
            validator: iban.validator,
            message: 'IBAN no válido',
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
            message: 'Introduce un número correcto',
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
          {
            validator: Validators.numeric,
            message: 'Debe ser un número',
          },
        ],
        month: [
          {
            validator: Validators.required,
            message: 'Campo requerido',
          },
          {
            validator: Validators.numeric,
            message: 'Debe ser un número',
          },
        ],
        year: [
          {
            validator: Validators.required,
            message: 'Campo requerido',
          },
          {
            validator: Validators.numeric,
            message: 'Debe ser un número',
          },
        ],
      }
    }
}

export const formValidarion = createFormValidation(validationSchema);