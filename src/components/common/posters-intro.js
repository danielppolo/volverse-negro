import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import styled from 'styled-components'

const MusiciansIntroStyled = styled.div`
  height: 60vh;
  width: 100%;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1.2rem;
  padding-bottom: 3rem;

  .que {
    font-size: 1.5rem;
  }

  .interactive:hover {
    font-style: italic;
  }
  @media (max-width: 720px) {
    height: 50vh;
  }
`

function MusiciansIntro({ props }) {
  return (
    <Parallax
      y={[-10, 20]}
    >
      <MusiciansIntroStyled>
      Especulación gráfica sobre la aparición de un niño sentado sobre la cornisa superior del Centro de las Artes de Guanajuato. Carteles colocados en la barda perimetral de la Refinería Ing. Antonio M. Amor y en espacios públicos de Salamanca y Guanajuato, Gto.
      </MusiciansIntroStyled>
    </Parallax>
  )
}


export default MusiciansIntro
