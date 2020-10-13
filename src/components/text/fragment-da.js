import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  /* position: absolute; */
  margin-left: 50%;
  mix-blend-mode: multiply;
  @media (max-width: 720px) {
    margin-left: 0;
  }
`

function FragmentDA() {
  return (
    <Fragment pos="aaaa">
      <ImageStyled
        src="https://volverse-negro.s3.us-east-2.amazonaws.com/text-images/image9.jpg"
        alt="Aire de Paris, Duchamp"
      />
    </Fragment>
  )
}


export default FragmentDA
