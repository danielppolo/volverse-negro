import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 50%;
`

function FragmentBG(props) {
  return (
    <Fragment pos="gg" {...props}>
      <ImageStyled
        src="https://volverse-negro-daniel.s3.amazonaws.com/images/image2.jpg"
        alt="Señora de la abejas"
      />
    </Fragment>
  )
}


export default FragmentBG
