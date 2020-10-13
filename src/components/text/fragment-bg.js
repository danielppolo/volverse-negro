import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 50%;
`

function FragmentBG() {
  return (
    <Fragment pos="gg">
      <ImageStyled
        src="https://volverse-negro.s3.us-east-2.amazonaws.com/text-images/image2.jpg"
        alt="Señora de la abejas"
      />
    </Fragment>
  )
}


export default FragmentBG
