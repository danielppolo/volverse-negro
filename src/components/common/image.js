import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
`

function Image({
  src, y, offsetX, style, width, overflow, height, noParallax,
}) {
  if (noParallax) {
    return <ImageStyled src={src} alt="" style={style} width={width} />
  }

  return (
    <Parallax
      className={overflow ? 'overflow-hidden image-container' : 'image-container'}
      tagOuter="div"
      styleOuter={{
        width,
        height,
      }}
      x={offsetX}
      y={y || [-20, 20]}
    >
      <ImageStyled src={src} alt="" style={style} width={width} />
    </Parallax>
  )
}


export default Image
