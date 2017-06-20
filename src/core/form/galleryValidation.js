import { createValidator, required, minLength } from '../../utils';

export const galleryValidation = createValidator({
  name: [required, minLength(3)],
  url: [required, minLength(6)],
})
