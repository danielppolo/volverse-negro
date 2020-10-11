import React, { useEffect, useState } from 'react'
import CursorClass from '../../utils/cursor'

function Cursor() {
  const [cursor, setCursor] = useState(null)

  useEffect(() => {
    const c = new CursorClass(document.querySelector('.cursor'))
    document.addEventListener('click', () => {
      setCursor(c)
      c.emit('click')
    })

    Array.from(document.querySelectorAll('.interact')).forEach((el) => {
      el.addEventListener('mouseenter', () => c.emit('enter'))
      el.addEventListener('mouseleave', () => c.emit('leave'))
    })
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
      <circle className="cursor__inner" cx="110" cy="110" r="60" />
    </svg>
  )
}


export default Cursor
