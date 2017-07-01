import { createValidator, required, integer } from '../../utils';

export const attributeValidation = createValidator({
  att_name: [required],
  att_description: [required],
  att_max_lv: [required, integer],
  class_id: [required, integer],
  skill_id: [required, integer],
})
