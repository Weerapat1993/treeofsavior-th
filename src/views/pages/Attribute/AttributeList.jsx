

import React from 'react'
import AttributeItem from './AttributeItem'

export const AttributeList = ({ data, edit, deleteAttribute }) => {
  return(
    <div>
      {
        data.map((item, i) => (
          <AttributeItem 
            key={i} 
            data={item} 
            edit={edit}  
            deleteAttribute={deleteAttribute} 
          />
        ))
      }
    </div>
  )
}

export default AttributeList
