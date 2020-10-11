import React from 'react'
import styled from 'styled-components'

const StreamingStyled = styled.div`
margin: 30vh 0;
`

function Streaming({ id }) {
  return (
    <StreamingStyled id={id} />
  )
}


export default Streaming
