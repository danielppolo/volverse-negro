import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 80%;
  mix-blend-mode: multiply;
`


function FragmentBW() {
  return (
    <Fragment pos="ww">
      <ImageStyled
        src="https://res.cloudinary.com/teatroojo/image/upload/v1602443867/volverse_negro/images-text/image4_tliava.png"
        alt="Cuadrado negro sobre fondo blanco"
      />
    </Fragment>
  )
}


export default FragmentBW
