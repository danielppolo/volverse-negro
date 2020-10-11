import React from 'react'
import styled from 'styled-components'

const Text = styled.span`
  &:after{
    content: '${({ text }) => text}';
    font-size: inherit;
  }
  &:hover&:after{
    content: '${({ after }) => after}';
  }
`

function Reveal({ children, after }) {
  return (
    <Text
      className="interact"
      text={children}
      after={after}
    />
  )
}


export default Reveal
