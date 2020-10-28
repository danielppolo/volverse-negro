import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const ImageStyled = styled.img`
  width: 50%;
  mix-blend-mode: multiply;
  margin-left: 20%;
`


function FragmentDL(props) {
  return (
    <Fragment pos="llll" {...props}>
      <ImageStyled
        src="https://volverse-negro-daniel.s3.amazonaws.com/images/image8.jpg"
        alt="Pigmento Negro"
      />
    </Fragment>
  )
}


export default FragmentDL
