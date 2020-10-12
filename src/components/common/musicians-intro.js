import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import styled from 'styled-components'

const MusiciansIntroStyled = styled.div`
  height: 70vh;
  width: 100%;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1.2rem;

  .que {
    font-size: 1.5rem;
  }

  .interactive:hover {
    font-style: italic;
  }
`

function MusiciansIntro({ props }) {
  return (
    <Parallax
      y={[-20, 20]}
    >
      <MusiciansIntroStyled>
        <p>
        Cada día a las 18:00hrs, integrantes de la Banda Sinfónica de Salamanca salen a sus azoteas, patios o ventanas, toman aire y soplan, su aliento hace sonar un instrumento musical.
        </p>
      </MusiciansIntroStyled>
    </Parallax>
  )
}


export default MusiciansIntro
