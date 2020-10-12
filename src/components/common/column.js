import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
  flex-basis: ${({ width }) => width}%;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export default Column
