import React, { useEffect, useState, useMemo } from 'react'
import Figure from '../components/figure'
import sources from '../data/figures'

const useFigures = () => {
  const [figures, setFigures] = useState([])
  const getFigures = () => figures


  useEffect(() => {
    document.addEventListener('click', () => {
      setFigures([...getFigures(), <Figure src={sources[Math.floor(Math.random() * sources.length)]} key={Math.random()} />])
    })
  }, [])
  return figures
}

export default useFigures
