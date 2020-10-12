import React from 'react'
import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'

const MapStyled = styled(ParallaxBanner)`
  max-width: 100%;
  margin: 100px 0;
`

const Cartography = () => (
  <MapStyled
    data-cursor="estampa"
    className="cartography"
    layers={[
      {
        image: 'https://res.cloudinary.com/teatroojo/image/upload/v1602487386/volverse_negro/images/cartography_bvgtoi.jpg',
        amount: 0.2,
        props: {
          id: 'cartography',
        },
      },
    ]}
    style={{
      height: '100vw',
    }}
  />
)


export default Cartography
