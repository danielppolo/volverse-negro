import React from 'react'
import styled from 'styled-components'

const ImageStyled = styled.img`
  max-height: 300px;
`

function Image({ src }) {
  return (
    <ImageStyled src={src} alt="" />
  )
}


export default Image
