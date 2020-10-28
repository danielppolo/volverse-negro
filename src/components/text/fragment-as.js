import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  mix-blend-mode: multiply;
`

function FragmentAS(props) {
  return (
    <Fragment pos="s" {...props}>
      <ImageStyled src="https://volverse-negro-daniel.s3.amazonaws.com/images/image1.png" alt="Gráfica de Valle Inquietante" />
    </Fragment>
  )
}


export default FragmentAS
