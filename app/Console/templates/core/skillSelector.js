import { ${name_pascal} } from '../model'

export const keywordFilter = (keyword) => {
  return keyword && keyword.toString().toLowerCase()
}

export const ${name}Selector = (data, keyword) => {
  if(keyword && !!data && Array.isArray(data)) {
    const key = keywordFilter(keyword)
    return data.filter((item) => item.name.toLowerCase().indexOf(key) !== -1 )
  }
  const ${name}s = ${name_pascal}(data).orderBy('id','asc').get()
  return ${name}s
}