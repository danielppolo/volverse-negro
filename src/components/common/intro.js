import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import styled from 'styled-components'

const IntroStyled = styled.div`
  height: 100vh;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  width: 60%;
  @media (max-width: 720px) {
    width: 100%;
  }
  .que {
    font-size: 1.5rem;
  }

  .interactive:hover {
    font-style: italic;
  }
`

function Intro({ props }) {
  return (
    <Parallax
      y={[-20, 20]}
    >
      <IntroStyled>
        <p>
       Escena:
          <br />
        Un niño contempla un paisaje, toma aire y sopla, su aliento hace sonar una flauta.
        </p>
        <br />
        <p className="que">
       ¿Qué mira?
        </p>
        <br />
        <p className="interact interactive" id="anchor-zoom-a">
       Entre la refinería y él se extiende la ciudad, Salamanca; un niño sentado en la cornisa superior del Centro de las Artes de Guanajuato, ahí a la intemperie, día y noche, es testigo del paso del tiempo y la vida. Toma aire -aire de Salamanca- y su aliento hace sonar una flauta.
        </p>
        <br />
        <p>
        El niño es un respirador.
          <br />
        El niño es un re-sonador.
          <br />
        El niño es un testigo.
        </p>
        <br />
        <p>
        Quizás las abejas comiencen a llevarse la cera hasta sus panales y el muñeco se deshaga en las praderas.
        </p>
      </IntroStyled>
    </Parallax>
  )
}


export default Intro
