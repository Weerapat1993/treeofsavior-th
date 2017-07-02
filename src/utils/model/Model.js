import { randStr } from '../random'

export class Fillable {
  constructor(data) {
    this.data = data
  }

  increment(field) {
    const data = this.data
    this.data = Object.assign({}, data, { [field]: `${field}:${randStr(50)}`})
    return this
  }

  file(field) {
    const data = this.data
    this.data = Object.assign({}, data, { [field]: data[field][0]})
    return this
  }

  string(field) {
    const data = this.data
    this.data = Object.assign({}, data, { [field]: data[field]})
    return this
  }

  integer(field) {
    const data = this.data
    this.data = Object.assign({}, data, { [field]: +data[field]})
    return this
  }

  get() {
    return this.data
  }
}