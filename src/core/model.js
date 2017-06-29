import Collection from 'array-collection'

const Model = (data, primaryKey) => new Collection(data, primaryKey)

export const Skill = (data) => Model(data, 'id')
export const Classes = (data) => Model(data, 'id')
export const Attribute = (data) => Model(data, 'id')
