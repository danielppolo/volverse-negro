import React, { useEffect, useRef, useState } from 'react'
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
    const videoElement = video.current
    const anchor = document.querySelector(selector)
    const handleAnchorEnter = () => {
      videoElement.style.transform = `rotate(${(Math.floor(Math.random() * 20)) * (Math.random() > 0.5 ? -1 : 1)}deg) translate(-50%, -50%)`
      videoElement.classList.add('show')
      videoElement.play()
    }
    const handleAnchorExit = () => {
      videoElement.classList.remove('show')
      videoElement.pause()
    }
    const handleVideoEnter = () => {
      videoElement.classList.add('show')
      videoElement.play()
    }
    const handleVideoExit = () => {
      videoElement.classList.remove('show')
      videoElement.pause()
    }
    if (anchor) {
      anchor.addEventListener('mouseenter', handleAnchorEnter)
      anchor.addEventListener('mouseleave', handleAnchorExit)
    }
    if (videoElement) {
      videoElement.addEventListener('mouseenter', handleVideoEnter)
      videoElement.addEventListener('mouseleave', handleVideoExit)
    }
    return () => {
      if (anchor) {
        anchor.removeEventListener('mouseenter', handleAnchorEnter)
        anchor.removeEventListener('mouseleave', handleAnchorExit)
      }
      if (videoElement) {
        videoElement.removeEventListener('mouseenter', handleVideoEnter)
        videoElement.removeEventListener('mouseleave', handleVideoExit)
      }
    }
  }, [])
  return (
    <ZoomStyled src={src} ref={video} />
  )
}


export default Zoom
