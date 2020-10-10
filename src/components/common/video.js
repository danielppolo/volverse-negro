import React, { useRef } from 'react'
import styled from 'styled-components'

const Placeholder = styled.div`
  width: 720px;
  height: 440px;
  background-color: gray;
  border: 1px solid black;
`

function Video({ src, onPlay, onPause }) {
  const video = useRef(null)
  const handleMouseEnter = () => {
    video.current.play()
    onPlay()
  }
  const handleMouseLeave = () => {
    video.current.pause()
    onPause()
  }
  return (
    <video
      src={src}
      preload="metadata"
      ref={video}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
    // <Placeholder
    //   className="video"
    //   onMouseEnter={() => { onPlay() }}
    //   onMouseLeave={() => { onPause() }}
    // />
  )
}


export default Video
