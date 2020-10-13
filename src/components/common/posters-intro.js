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
  padding-bottom: 6rem;

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
        <i>Carteles Volverse negro, en la ciudad.</i>
        <p>
        En los espacios públicos y la barda que rodea a la refinería de Salamanca, están dispuestos una serie de carteles que proponen múltiples tentativas de lectura en torno a la figura de un niño sentado en la cornisa superior del Centro de las Artes de Guanajuato, ante el enigma de su aparición.
        </p>
      </MusiciansIntroStyled>
    </Parallax>
  )
}


export default MusiciansIntro
