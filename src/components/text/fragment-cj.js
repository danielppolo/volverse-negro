import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 70%;
  mix-blend-mode: multiply;
`

function FragmentCJ() {
  return (
    <Fragment pos="jjj">
      <ImageStyled
        src="https://volverse-negro.s3.us-east-2.amazonaws.com/text-images/image7.jpg"
        alt="Propiedad Federal"
      />
    </Fragment>
  )
}


export default FragmentCJ
