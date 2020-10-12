import React from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  max-width: 85%;
  margin: 120px auto;
`

function Container({ children }) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}


export default Container
