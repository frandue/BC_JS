
import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    message: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
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
