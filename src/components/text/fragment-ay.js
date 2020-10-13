import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 90%;
  mix-blend-mode: multiply;
`

function FragmentAY(props) {
  return (
    <Fragment pos="y" {...props}>
      <ImageStyled
        src="https://volverse-negro.s3.us-east-2.amazonaws.com/text-images/image3.png"
        alt="Gráfica Valle Inquietante"
      />
    </Fragment>
  )
}


export default FragmentAY
