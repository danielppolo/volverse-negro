import styled from 'styled-components'
import React from 'react'

const FigureStyled = styled.img`
  mix-blend-mode: multiply;
  display: none;
  position: absolute;
  transform: translate(-50%, -50%);
  max-height: 300px;
  max-width: 300px;
  z-index: 2;
  &.active {
    display: block;
  }
`

const Figure = ({ src, ...otherProps }) => <FigureStyled className="Figure inactive" src={src} {...otherProps} />


export default Figure
