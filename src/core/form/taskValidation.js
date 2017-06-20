import { createValidator, required } from '../../utils';

export const taskValidation = createValidator({
  title: [required],
})