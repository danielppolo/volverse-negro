import styled from 'styled-components'
import React from 'react'

const FigureStyled = styled.img`
  mix-blend-mode: multiply;
  display: none;
  position: fixed;
  transform: translate(-50%, -50%);
  max-height: 200px;
  z-index: 10;
  &.active {
    display: block;
  }
`

const Figure = ({ src, ...otherProps }) => <FigureStyled className="Figure" src={src} {...otherProps} />


export default Figure
