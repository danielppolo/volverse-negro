import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

const ImageStyled = styled.img`
  max-height: 300px;

`

function Image({ src }) {
  return (
    <Parallax
      className="custom-class"
      y={[-20, 20]}
    >
      <ImageStyled src={src} alt="" />
    </Parallax>
  )
}


export default Image
