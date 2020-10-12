import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

const ImageStyled = styled.img`
  /* max-height: 300px; */

`

function Image({
  src, offsetY, offsetX, style,
}) {
  return (
    <Parallax
      className="overflow-hidden"
      tagOuter="div"
      x={offsetX}
      y={offsetY || [-20, 20]}
    >
      <ImageStyled src={src} alt="" style={style} />
    </Parallax>
  )
}


export default Image
