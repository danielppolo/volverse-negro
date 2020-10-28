import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 70%;
  mix-blend-mode: multiply;
`

function FragmentCJ(props) {
  return (
    <Fragment pos="jjj" {...props}>
      <ImageStyled
        src="https://volverse-negro-daniel.s3.amazonaws.com/images/image7.jpg"
        alt="Propiedad Federal"
      />
    </Fragment>
  )
}


export default FragmentCJ
