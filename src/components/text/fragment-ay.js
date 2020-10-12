import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 90%;
  mix-blend-mode: multiply;
`

function FragmentAY() {
  return (
    <Fragment pos="y">
      <ImageStyled src="https://res.cloudinary.com/teatroojo/image/upload/v1602443866/volverse_negro/images-text/image3_vacclb.png" alt="Gráfica Valle Inquietante" />
    </Fragment>
  )
}


export default FragmentAY
