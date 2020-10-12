import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  mix-blend-mode: multiply;
  margin-left: 10%;
  width: 60%;
`

function FragmentDQ() {
  return (
    <Fragment pos="qqqq">
      <ImageStyled src="https://res.cloudinary.com/teatroojo/image/upload/v1602443868/volverse_negro/images-text/image10_wpw9er.jpg" alt="Tabla de pigmentos negros" />
    </Fragment>
  )
}


export default FragmentDQ
