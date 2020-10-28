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
        src="https://volverse-negro-daniel.s3.amazonaws.com/images/image4.png"
        alt="Cuadrado negro sobre fondo blanco"
      />
    </Fragment>
  )
}


export default FragmentBW
