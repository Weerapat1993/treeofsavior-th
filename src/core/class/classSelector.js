import { Classes } from '../model'

export const getNormalClass = (state) => {
  const data = state.class.data
  const NormalClass = Classes(data).where('name','!=','Shinobi')
                          .where('name','!=','Rune Caster')
                          .where('name','!=','Chaplain')
                          .where('name','!=','Miko')
                          .get()
  return NormalClass
} 