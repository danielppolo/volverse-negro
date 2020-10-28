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

function FragmentDA(props) {
  return (
    <Fragment pos="aaaa" {...props}>
      <ImageStyled
        src="https://volverse-negro-daniel.s3.amazonaws.com/images/image9.jpg"
        alt="Aire de Paris, Duchamp"
      />
    </Fragment>
  )
}


export default FragmentDA
