import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const ZoomStyled = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70vh;
  max-width: 80%;
  opacity: 0;
  z-index: -1;
  &.show {
    opacity: 1;
    z-index: 10;
  }
`

function Zoom({ selector, src }) {
  const video = useRef(null)
  useEffect(() => {
    const anchor = document.querySelector(selector)
    if (anchor) {
      anchor.addEventListener('mouseenter', () => {
        anchor.style.zIndex = 11
        video.current.classList.add('show')
        video.current.play()
      })
      anchor.addEventListener('mouseleave', () => {
        anchor.style.zIndex = 1
        video.current.classList.remove('show')
        video.current.pause()
      })
    }
  }, [])
  return (
    <ZoomStyled src={src} ref={video} />
  )
}


export default Zoom
