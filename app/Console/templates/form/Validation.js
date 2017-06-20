import { createValidator, required, email, minLength } from '../../utils';

export const ${name}Validation = createValidator({
  email: [required, email, minLength(6)],
  password: [required, minLength(6)],
})