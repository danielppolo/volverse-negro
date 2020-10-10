import React from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  max-width: 90%;
  margin: 0 auto;
`

function Container({ children }) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}


export default Container
