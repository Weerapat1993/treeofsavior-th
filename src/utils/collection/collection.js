/**
 * Set Collection for Manage Data
 * @param {array} data 
 */
export const collection = (data) => {
  let array
  return {
    /**
     * Set First Data & Primary Key 
     * @param {string} primaryKey
     */
    set: (primaryKey) => {
      this.primaryKey = primaryKey ? primaryKey : 'id'
      this.data = data ? data : []
      return collection(data)
    },
    /**
     * Get Data to Array
     * @return {array}
     */
    get: () => {
      array = data ? data : []
      return array
    },

    /**
     * Get Data to Object
     * @return {object} 
     */
    firstOrFail: () => {
      try {
        array = data
        return array[0]
      } catch (error) {
        return {}
      }
    },

    /**
     * Find Data in Array
     * @param {string} field
     * @param {string} condition
     * @param {string} key
     * @return {function} collection
     */
    where: (field, condition, key) => {
      switch(condition) {
        case '!=':
        case '!==':
          array = data.filter((item) => key !== item[field])
          break
        case '=':
        case '==':
        case '===':
        default:
          array = data.filter((item) => key === item[field])
          break
      }
      return collection(array)
    },

    /**
     * Find & Update Data in Array
     * @param {object} update
     * @return {array} newArray
     */
    update: (update) => {
      const newData = {
        ...collection(data).firstOrFail(),
        ...update
      }
      let newArray = this.data
      newArray.forEach((item,i) => {
        if(newData[this.primaryKey] === item[this.primaryKey]){
          newArray[i] = newData
        }
      })
      return newArray
    },

    /**
     * Push Data in Array
     * @param {object} insert
     * @return {array} newArray
     */
    insert: (insert) => {
      return [
        ...data,
        insert
      ]
    },

    // find: (key) => {
    //   array = data.filter((item) => key === item[this.primaryKey])
    //   return array[0]
    // }
  }
}