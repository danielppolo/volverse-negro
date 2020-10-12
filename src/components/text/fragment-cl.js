import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 90%;
  mix-blend-mode: multiply;
`


function FragmentCL() {
  return (
    <Fragment pos="lll">
      <ImageStyled src="https://res.cloudinary.com/teatroojo/image/upload/v1602443867/volverse_negro/images-text/image6_joiplq.jpg" alt="Camino de terracería" />
    </Fragment>
  )
}


export default FragmentCL
