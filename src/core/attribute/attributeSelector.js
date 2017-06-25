import { Attribute } from '../model'

export const keywordFilter = (keyword) => {
  return keyword && keyword.toString().toLowerCase()
}

export const attributeSelector = (data, keyword) => {
  if(keyword && !!data && Array.isArray(data)) {
    const key = keywordFilter(keyword)
    return data.filter((item) => item.name.toLowerCase().indexOf(key) !== -1 )
  }
  const attributes = Attribute(data).orderBy('id','asc').get()
  return attributes
}