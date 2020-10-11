import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import Reveal from './reveal'

const LocationStyled = styled.p`
  align-self: flex-end;
  font-size: 4.8rem;
  padding-left: 50%;
  p {
    text-align: right;
  }
  .coordinates {
    font-size: 4.8rem;
  }
`

function Location({ props }) {
  return (
    <Parallax
      y={[-50, 50]}
    >
      <LocationStyled>
        <Reveal
          after="Centro de las Artes de Guanajuato"
        >
        Calle Revolución 204, Centro, Salamanca, Gto.
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
