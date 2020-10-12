import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  /* position: absolute; */
  transform: rotate(10deg);
  margin-left: 50%;
  mix-blend-mode: multiply;
`

function FragmentDA() {
  return (
    <Fragment pos="aaaa">
      <ImageStyled src="https://res.cloudinary.com/teatroojo/image/upload/v1602443867/volverse_negro/images-text/image9_cuk0ky.jpg" alt="Aire de Paris, Duchamp" />
    </Fragment>
  )
}


export default FragmentDA
