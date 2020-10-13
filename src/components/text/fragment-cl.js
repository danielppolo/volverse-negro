import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 90%;
  mix-blend-mode: multiply;
`


function FragmentCL(props) {
  return (
    <Fragment pos="lll" {...props}>
      <ImageStyled
        src="https://volverse-negro.s3.us-east-2.amazonaws.com/text-images/image6.jpg"
        alt="Camino de terracería"
      />
    </Fragment>
  )
}


export default FragmentCL
