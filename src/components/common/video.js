import React, { useRef } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

const Placeholder = styled.div`
  width: 720px;
  height: 440px;
  background-color: gray;
  border: 1px solid black;
  z-index: 3;
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
    <Parallax
      className="custom-class"
      y={[-20, 20]}
      tagOuter="div"
    >
      <video
        src={src}
        preload="metadata"
        ref={video}
        className=".interact"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* <Placeholder
        className=".interact"
        onMouseEnter={() => { onPlay() }}
        onMouseLeave={() => { onPause() }}
      /> */}
    </Parallax>
  )
}


export default Video
