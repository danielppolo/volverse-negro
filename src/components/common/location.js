import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import Reveal from './reveal'

const LocationStyled = styled.p`
  align-self: flex-end;
  font-size: 2.4rem;
  padding-left: 50%;
  p {
    text-align: right;
  }
  .coordinates {
    font-size: 2.4rem;
  }
`

function Location({ props }) {
  return (
    <Parallax
      y={[-20, 20]}
    >
      <LocationStyled>
        <Reveal
          after="Calle Revolución 204, Centro, Salamanca, Gto."
        >
        Centro de las Artes de Guanajuato
        </Reveal>
        <br />
        <i className="coordinates">
        20.567414,-101.197618
        </i>
      </LocationStyled>
    </Parallax>
  )
}


export default Location
