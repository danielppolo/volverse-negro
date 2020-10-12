import React from 'react'
import styled from 'styled-components'
import Fragment from '../common/fragment'

const Text = styled.p`
  word-break: break-all; 
`

function FragmentDM() {
  return (
    <Fragment pos="mmmm">
      <Text>
      negrosobrenegrosobrenegrosobrenegrosobrenegrosobrenegro
      </Text>
    </Fragment>
  )
}


export default FragmentDM
