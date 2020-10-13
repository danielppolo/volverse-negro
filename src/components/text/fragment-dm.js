import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const Text = styled.p`
  word-break: break-all; 
`

function FragmentDM(props) {
  return (
    <Fragment pos="mmmm" {...props}>
      <Text>
      negrosobrenegrosobrenegrosobrenegrosobrenegrosobrenegro
      </Text>
    </Fragment>
  )
}


export default FragmentDM
