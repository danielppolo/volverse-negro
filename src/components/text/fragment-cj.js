import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 70%;
  mix-blend-mode: multiply;
`

function FragmentCJ() {
  return (
    <Fragment pos="jjj">
      <ImageStyled src="https://res.cloudinary.com/teatroojo/image/upload/v1602443867/volverse_negro/images-text/image7_xpqf0s.jpg" alt="Propiedad Federal" />
    </Fragment>
  )
}


export default FragmentCJ
