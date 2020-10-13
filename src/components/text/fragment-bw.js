import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 80%;
  mix-blend-mode: multiply;
`


function FragmentBW(props) {
  return (
    <Fragment pos="ww" {...props}>
      <ImageStyled
        src="https://volverse-negro.s3.us-east-2.amazonaws.com/text-images/image4.png"
        alt="Cuadrado negro sobre fondo blanco"
      />
    </Fragment>
  )
}


export default FragmentBW
