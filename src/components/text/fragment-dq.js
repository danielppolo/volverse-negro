import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  mix-blend-mode: multiply;
  margin-left: 10%;
  width: 60%;
`

function FragmentDQ() {
  return (
    <Fragment pos="qqqq">
      <ImageStyled
        src="https://volverse-negro.s3.us-east-2.amazonaws.com/text-images/image10.jpg"
        alt="Tabla de pigmentos negros"
      />
    </Fragment>
  )
}


export default FragmentDQ
