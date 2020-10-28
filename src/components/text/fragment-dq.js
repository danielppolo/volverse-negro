import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  mix-blend-mode: multiply;
  margin-left: 10%;
  width: 60%;
`

function FragmentDQ(props) {
  return (
    <Fragment pos="qqqq" {...props}>
      <ImageStyled
        src="https://volverse-negro-daniel.s3.amazonaws.com/images/image10.jpg"
        alt="Tabla de pigmentos negros"
      />
    </Fragment>
  )
}


export default FragmentDQ
