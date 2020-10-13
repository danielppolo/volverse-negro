import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 50%;
  mix-blend-mode: multiply;
  margin-left: 20%;
`


function FragmentDL() {
  return (
    <Fragment pos="llll">
      <ImageStyled
        src="https://volverse-negro.s3.us-east-2.amazonaws.com/text-images/image8.jpg"
        alt="Pigmento Negro"
      />
    </Fragment>
  )
}


export default FragmentDL
