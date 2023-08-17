
import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ]
  }
};

export const formValidation = createFormValidation(validationSchema);
