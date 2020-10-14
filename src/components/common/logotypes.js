import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
  > img {
    max-width: 80%;
    max-height: 50px;
    margin-right: 2rem;
    filter: grayscale(100%);
  }
  @media (max-width: 720px) {
    flex-wrap: wrap;
    align-items: flex-start;
    img {
      margin-bottom: 2rem;
    }
  }
`
function Logotypes() {
  return (
    <Container>
      <img src="https://volverse-negro.s3.us-east-2.amazonaws.com/logotypes/logos+SecretariaCultura_Fonca-1.png" alt="FONCA" />
      <img src="https://volverse-negro.s3.us-east-2.amazonaws.com/logotypes/FIC2020.png" alt="FIC" />
      <img src="https://volverse-negro.s3.us-east-2.amazonaws.com/logotypes/LOGO+GTO+IEC.png" alt="Instituto Estatal de Cultura" />
      <img src="https://volverse-negro.s3.us-east-2.amazonaws.com/logotypes/logo+CEARG+.png" alt="CEARG" />
      <img style={{ mixBlendMode: 'multiply' }} src="https://volverse-negro.s3.us-east-2.amazonaws.com/logotypes/logo+tojo2-2.jpg" alt="Teatro Ojo" />
    </Container>
  )
}


export default Logotypes
