import React, { useRef } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

const VideoStyled = styled.video`
  /* max-width: ${Math.floor(Math.random() * 20) + 80}%; */
  width: 100%;
`

function Video({
  src, onPlay, onPause, width, y, x, style, poster,
}) {
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
      y={y || [-20, 20]}
      x={x}
      // className="overflow-hidden"
      tagOuter="div"
      styleOuter={style}
    >
      <VideoStyled
        src={src}
        preload="none"
        ref={video}
        poster={poster}
        data-cursor="observar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Parallax>
  )
}


export default Video
