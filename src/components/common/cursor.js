import React, { useEffect, useState } from 'react'
import { useController } from 'react-scroll-parallax'
import CursorClass from '../../utils/cursor'

function Cursor() {
  const [cursor, setCursor] = useState(null)
  const [label, setLabel] = useState('estampa')
  const { parallaxController } = useController()

  useEffect(() => {
    // Update parallax effect when all elements are mounted.
    parallaxController.update()

    const c = new CursorClass(document.querySelector('.cursor'))
    const interactiveItems = Array.from(document.querySelectorAll('.interact'))
    const items = Array.from(document.querySelectorAll('[data-cursor]'))
    const handleDocumentClick = (event) => {
      setCursor(c)
      c.emit('click')
      setLabel(null)
    }
    const handleInteractEnter = (event) => {
      c.emit('enter')
    }
    const handleInteractLeave = (event) => {
      c.emit('leave')
    }
    const handleItemEnter = (event) => {
      c.emit('enter')
      setLabel(event.currentTarget.dataset.cursor)
    }
    const handleItemLeave = (event) => {
      c.emit('leave')
      setLabel(null)
    }
    document.addEventListener('click', handleDocumentClick)
    interactiveItems.forEach((el) => {
      el.addEventListener('mouseenter', handleInteractEnter)
      el.addEventListener('mouseleave', handleInteractLeave)
    })
    items.forEach((el) => {
      el.addEventListener('mouseenter', handleItemEnter)
      el.addEventListener('mouseleave', handleItemLeave)
    })
    return () => {
      document.removeEventListener('click', handleDocumentClick)
      interactiveItems.forEach((el) => {
        el.removeEventListener('mouseenter', handleInteractEnter)
        el.removeEventListener('mouseleave', handleInteractLeave)
      })
      items.forEach((el) => {
        el.removeEventListener('mouseenter', handleItemEnter)
        el.removeEventListener('mouseleave', handleItemLeave)
      })
    }
  }, [])

  return (
    <svg
      style={{ zIndex: 99 }}
      className="cursor"
      width="220"
      height="220"
      viewBox="0 0 220 220"
    >
      <defs>
        <filter
          id="filter-1"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="1" result="warp" />
          <feOffset dx="-30" result="warpOffset" />
          <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
        </filter>
      </defs>
      <text
        xmlns="http://www.w3.org/2000/svg"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="1rem"
        className="cursor__text"
        fontFamily="'EB Garamond',serif"
      >
        {label}
      </text>
      <circle className="cursor__inner" cx="110" cy="110" r="60" />
    </svg>
  )
}


export default Cursor
