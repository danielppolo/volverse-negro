import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  mix-blend-mode: multiply;
`

function FragmentAS() {
  return (
    <Fragment pos="s">
      <ImageStyled src="https://res.cloudinary.com/teatroojo/image/upload/v1602443867/volverse_negro/images-text/image1_mkbhft.png" alt="Gráfica de Valle Inquietante" />
    </Fragment>
  )
}


export default FragmentAS
