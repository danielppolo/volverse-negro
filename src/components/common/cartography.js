import React from 'react'
import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'

const MapStyled = styled(ParallaxBanner)`
  max-width: 100%;
  margin: 100px 0;
`

const Cartography = ({ props }) => (
  <MapStyled
    layers={[
      {
        image: 'https://res.cloudinary.com/teatroojo/image/upload/v1602304897/volverse_negro/images/cartography_ftmbdn.jpg',
        amount: 0.2,
      },
    ]}
    style={{
      height: '100vh',
    }}
  />
)


export default Cartography
