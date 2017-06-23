

import React from 'react'
import ${name_pascal}Item from './${name_pascal}Item'

export const ${name_pascal}List = ({ data, edit, delete${name_pascal} }) => {
  return(
    <div>
      {
        data.map((item, i) => (
          <${name_pascal}Item 
            key={i} 
            data={item} 
            edit={edit}  
            delete${name_pascal}={delete${name_pascal}} 
          />
        ))
      }
    </div>
  )
}

export default ${name_pascal}List