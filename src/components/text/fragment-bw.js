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
        src="https://volverse-negro.s3.us-east-2.amazonaws.com/text-images/image4.jpg"
        alt="Cuadrado negro sobre fondo blanco"
      />
    </Fragment>
  )
}


export default FragmentBW
