import React from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  max-width: 85%;
  margin: 5rem auto;
  @media (max-width: 720px) {
    margin: 2rem auto;
  }
`

function Container({ children }) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}


export default Container
