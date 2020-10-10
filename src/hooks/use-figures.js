import React, { useEffect, useState, useMemo } from 'react'
import Figure from '../components/common/figure'
import sources from '../data/figures'

const useFigures = () => {
  useEffect(() => {
    document.addEventListener('click', (event) => {
      const figures = Array.from(document.querySelectorAll('.Figure'))
      const selected = figures[Math.floor(Math.random() * sources.length)]
      selected.classList.toggle('active')
      selected.style.left = `${event.x}px`
      selected.style.top = `${event.y}px`
    })
  }, [])
}

export default useFigures
