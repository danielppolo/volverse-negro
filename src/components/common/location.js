import React from 'react'
import Italic from './italic'


function Location({ props }) {
  return (
    <div>
      <p>Calle Revolución 204, Centro, 37000 Salamanca, Gto.</p>
      <p>
        <Italic>20.567414, -101.197618</Italic>
      </p>
    </div>
  )
}


export default Location
