import React from 'react'
import figures from '../../data/figures'
import Figure from './figure'

function Figures() {
  return figures.map(src => <Figure src={src} key={src} />)
}


export default Figures
