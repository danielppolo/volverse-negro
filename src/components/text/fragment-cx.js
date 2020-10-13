import React from 'react'
import Fragment from '../common/fragment'


function FragmentCX(props) {
  return (
    <Fragment pos="xxx" {...props}>
      <p>
      Todo es propiedad privada, incluso la muerte.
      </p>
    </Fragment>
  )
}


export default FragmentCX
