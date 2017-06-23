// Class Collection
export class Collection {
  /**
   * Build Array Collection
   * ```javascript
   * const Collection = new Collection([], 'primaryKey')
   * ```
   * @param {[]} data
   * @param {'String'} primaryKey
   */
  constructor(data, primaryKey) {
    this.primaryKey = primaryKey ? primaryKey : 'id'
    this.data = data ? data : []
  }

  /**
   * Get Data to Array
   * @return {[]} data
   */
  get() {
    return this.data
  }

  /**
   * Get Data to Object
   * @return {object} 
   */
  firstOrFail() {
    return this.data[0]
  }

  /**
   * Find Data in Array
   * ```javascript
   * @condition [ === , !== , < , > , <= , >= ]
   * Collection.where('id','=','1')
   * ```
   * @param {'field'} field
   * @param {'condtion'} condition
   * @param {'key'} key
   * @return {this} collection
   */
  where(field, condition, key) {
    switch(condition) {
      case '!=':
      case '!==':
        this.data = this.data.filter((item) => item[field] !== key)
        break
      case '<':
        this.data = this.data.filter((item) => item[field] < key)
        break
      case '>':
        this.data = this.data.filter((item) => item[field] > key)
        break
      case '>=':
        this.data = this.data.filter((item) => item[field] >= key)
        break
      case '<=':
        this.data = this.data.filter((item) => item[field] <= key)
        break
      case '=':
      case '==':
      case '===':
      default:
        this.data = this.data.filter((item) => key === item[field])
        break
    }
    return this
  }

  /**
   * Find Data in Array by []
   * ```javascript
   * @condition [ === , !== ]
   * Collection.whereIn('id',[1,2])
   * ```
   * @param {'field'} field
   * @param {[*]} keyArray
   * @return {this} collection
   * 
   */
  whereIn(field, keyArray) {
    let collect = []
    let array
    keyArray.map((key) => {
      array = this.data.filter((item) => item[field] === key)
      array.map(obj => {
        collect.push(obj)
      })
    })
    this.data = collect
    return this
  }

  /**
   * Find & Update Data in Array
   * ```javascript
   * Collection.update({
   *  id: 1,
   *  name: 'newString'
   * })
   * ```
   * @param {object} update
   * @return {[]} newArray
   */
  update(update) {
    const data = this.data
    const PK = this.primaryKey
    if(this.firstOrFail() === {}) return data
    const newData = {
      ...this.firstOrFail(),
      ...update
    }
    let newArray = data
    newArray.forEach((item,i) => {
      if(newData[PK] === item[PK]){
        newArray[i] = newData
      }
    })
    return newArray
  }

  /**
   * Push Data in Array
   * ```javascript
   * Collection.insert({
   *  id: 1,
   *  name: 'String'
   * })
   * ```
   * @param {object} insert
   * @return {[]} newArray
   */
  insert(insert) {
    return [
      ...this.data,
      insert
    ]
  }

  /**
   * Order By field in Array
   * @property orderBy - ['asc', 'desc']
   * @param {string} field
   * @param {string} orderBy
   * @return {array} newArray
   */
  orderBy(field, orderBy) {
    const type = typeof this.data[0][field]
    if(type === 'number') {
      // sort by value
      switch(orderBy) {
        case 'desc':
          this.data = this.data.sort((a, b) => b[field] - a[field])
          break
        case 'asc': 
        default:
          this.data = this.data.sort((a, b) => a[field] - b[field])
          break
      }
    } else if(type === 'string') {
      // sort by name
      switch(orderBy) {
        case 'desc':
          this.data = this.data.sort((a, b) => {
            const nameA = a[field].toUpperCase(); // ignore upper and lowercase
            const nameB = b[field].toUpperCase(); // ignore upper and lowercase
            if(nameB < nameA) return -1;
            if(nameB > nameA) return 1;
            return 0;
          })
          break
        case 'asc': 
        default:
          this.data = this.data.sort((a, b) => {
            const nameA = a[field].toUpperCase(); // ignore upper and lowercase
            const nameB = b[field].toUpperCase(); // ignore upper and lowercase
            if(nameA < nameB) return -1;
            if(nameA > nameB) return 1;
            return 0;
          })
          break
      }
    }
    return this
  }
}