import React from 'react'
import styled from 'styled-components'

const RowStyled = styled.div`
  width: 100%;
  display: flex;
  
  @media (max-width: 720px) {
    flex-direction: column;
  }

`

function Row({ children }) {
  return (
    <RowStyled>
      {children}
    </RowStyled>
  )
}


export default Row
