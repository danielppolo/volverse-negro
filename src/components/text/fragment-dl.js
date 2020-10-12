import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 50%;
  mix-blend-mode: multiply;
  margin-left: 20%;
`


function FragmentDL() {
  return (
    <Fragment pos="llll">
      <ImageStyled src="https://res.cloudinary.com/teatroojo/image/upload/v1602443867/volverse_negro/images-text/image8_gfpfe8.jpg" alt="Pigmento Negro" />
    </Fragment>
  )
}


export default FragmentDL
