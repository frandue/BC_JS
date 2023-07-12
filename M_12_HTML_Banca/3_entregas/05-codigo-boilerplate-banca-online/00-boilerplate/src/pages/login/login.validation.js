import  {Validators, createFormValidation } from '@lemoncode/fonk' ;
// importa lo validadores de la libreria y la cretea un nuevo formulario de validacion.

const validationSchema = {
  field: {
    user: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
  ],
    password: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
  },
};

export const formValidarion = createFormValidation(validationSchema);