import React from 'react'
import styled from 'styled-components'

const IntroStyled = styled.div`
  height: 80vh;
  width: 100%;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2.4rem;

  .que {
    font-size: 3.2rem;
  }
  .interactive {
    font-size: 2.8rem;
  }
  .interactive:hover {
    font-style: italic;
  }
`

function Intro({ props }) {
  return (
    <IntroStyled>
      <p>
       Escena:
        Un niño contempla un paisaje, toma aire y sopla, su aliento hace sonar una flauta.
      </p>
      <br />
      <p className="que">
       ¿Qué mira?
      </p>
      <br />
      <p>
       Entre la refinería y él se extiende la ciudad, Salamanca; un niño sentado en la cornisa superior del Centro de las Artes de Guanajuato, ahí a la intemperie, día y noche, es testigo del paso del tiempo y la vida. Toma aire -aire de Salamanca- y su aliento hace sonar una flauta.
      </p>
      <br />
      <p className="interact interactive" id="anchor-zoom-a">
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
  )
}


export default Intro
