import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 50%;
`

function FragmentBG() {
  return (
    <Fragment pos="gg">
      <ImageStyled src="https://res.cloudinary.com/teatroojo/image/upload/v1602443867/volverse_negro/images-text/image2_g4qrfk.jpg" alt="Señora de la abejas" />
    </Fragment>
  )
}


export default FragmentBG
