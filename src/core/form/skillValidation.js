import { createValidator, required } from '../../utils';

export const skillValidation = createValidator({
  name: [required],
  description: [required],
})
