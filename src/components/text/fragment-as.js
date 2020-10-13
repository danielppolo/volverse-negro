import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  mix-blend-mode: multiply;
`

function FragmentAS() {
  return (
    <Fragment pos="s">
      <ImageStyled src="https://volverse-negro.s3.us-east-2.amazonaws.com/text-images/image1.png" alt="Gráfica de Valle Inquietante" />
    </Fragment>
  )
}


export default FragmentAS
