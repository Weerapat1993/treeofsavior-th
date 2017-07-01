import Collection from 'array-collection'
import { Fillable } from '../utils'

const Model = (data, primaryKey) => new Collection(data, primaryKey)

// Models
export const Skill = (data) => Model(data, 'id')
export const Classes = (data) => Model(data, 'id')
export const Attribute = (data) => Model(data, 'id')

export const SkillFillable = (value) => new Fillable(value)
  .string('name')
  .string('description')
  .string('url')
  .integer('max_level')
  .integer('circle')
  .integer('class_id')
  .get()

export const AttributeFillable = (value) => new Fillable(value)
  .string('att_name')
  .string('att_description')
  .integer('att_max_lv')
  .integer('class_id')
  .integer('skill_id')
  .get()

