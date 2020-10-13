import React from 'react'
import styled from 'styled-components'
import Container from './container'
import Logotypes from './logotypes'

const CreditsStyled = styled.div`
  .legend {
    font-size: 0.8rem;
    span {
      position: relative;
    }
    span[data-line]:before { 
      position: absolute;
      left: -5px;
      transform: translate(-100%, 0);
      content: attr(data-line); /* no quotes around attribute name! */
    }
  }
`

function Credits() {
  return (
    <CreditsStyled>
      <Container>
        <p>
          <strong>VOLVERSE NEGRO</strong>
          <br />
          Curaduría y coordinación general:
          {' '}
          <i>Lourdes González</i>
          <br />
          Obra artística de Teatro Ojo:
          {' '}
          <i>
          Héctor Bourges*,  Karla Rodríguez**,  Laura Furlan,  Patricio
          Villarreal***,  Fernanda Villegas****,  Alonso Arrieta  y  María López.
          </i>
          <br />
          <br />
          Con la colaboración de :
          <br />
          Escritura dramatúrgica:
          {' '}
          <i>Rodrigo Parrini</i>
          <br />
          Ilustración y Escultura neumática:
          {' '}
          <i>Iker Vicente</i>
          <br />
          Música y Diseño sonoro:
          {' '}
          <i>Enrique Mendoza</i>
          <br />
          Ceriescultura:
          {' '}
          <i>Juan Carlos Salgado</i>
          <br />
          Apicultura:
          {' '}
          <i>Manuel Guerrero</i>
          <br />
          Diseño gráfico:
          {' '}
          <i>Jota Izquierdo</i>
          <br />
          Programación y Diseño web:
          {' '}
          <i>Daniel Polo</i>
          <br />
          Transmisión en vivo:
          <i>Webcams de México</i>
          <br />
          <br />

          Participación especial de la
          {' '}
          <i>Banda Sinfónica de Salamanca</i>
          {' '}
          del programa Vientos Musicales del
          {' '}
          <i> Instituto Estatal de la Cultura de Guanajuato</i>
          <br />
          <br />
          Personal de apoyo en el Centro de las Artes de Guanajuato:
          {' '}
          <i>
          Armando Moreno, Francisco
          Balboa, Marisol Padilla, Pablo Ayala, Christian Magaña, Arnold Nieto, Manuel Luna, Arturo
          Quezadas, Indra Ortiz.
          </i>
          <br />
          <br />
          Este proyecto es producto del programa de residencias de creación del Centro de las Artes de
          Guanajuato.
          <br />
          <br />
        </p>
        <p className="legend">
          <span data-line="*">Beneficiario del Sistema Nacional de Creadores de Arte 2017 del Fonca</span>
          <br />
          <span data-line="**">Beneficiaria del Sistema Nacional de Creadores de Arte 2018 del Fonca</span>
          <br />
          <span data-line="***">Beneficiario del Programa Creadores Escénicos 2018 del Fonca</span>
          <br />
          <span data-line="****">Beneficiaria del Programa Creadores Escénicos 2019 del Fonca</span>
        </p>
        <Logotypes />
      </Container>
    </CreditsStyled>
  )
}


export default Credits
