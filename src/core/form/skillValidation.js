import { createValidator, required, integer } from '../../utils';

export const skillValidation = createValidator({
  name: [required],
  description: [required],
  circle: [required, integer],
  max_level: [required, integer],
  url: [],
})
