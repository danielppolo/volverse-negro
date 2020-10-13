import React from 'react'
import styled from 'styled-components'

const MapStyled = styled.div`
  max-width: 100%;
  margin: 100px 0;
  height: 100vw;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .map-overlay {
    mix-blend-mode: multiply;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Cartography = () => (
  <MapStyled
    data-cursor="estampa"
    className="cartography"
  >
    <img
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/images/cartography.jpg"
      alt="Cartografía"
    />
    <img
      className="map-overlay"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/images/cartography-overlay.jpg"
      alt="Cartografía"
    />
  </MapStyled>
)


export default Cartography
