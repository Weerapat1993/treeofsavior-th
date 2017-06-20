import { createValidator, required, email, minLength } from '../../utils';

export const registerValidation = createValidator({
  email: [required, email, minLength(6)],
  password: [required, minLength(6)],
  password_confirmation: [required, minLength(6)],
})
