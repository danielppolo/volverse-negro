import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StreamingStyled = styled.video`
  margin: 30vh 0;
  width: 100vw;
`

function Streaming({ src, play }) {
  const video = useRef(null)
  useEffect(() => {
    if (video && play && video.current.paused) {
      video.current.play()
    }
  }, [play, video])
  return (
    <StreamingStyled
      autoPlay
      ref={video}
      loop
      preload="auto"
      src={`https://volverse-negro-daniel.s3.amazonaws.com/videos/${src}.mp4`}
      poster={`https://volverse-negro-daniel.s3.amazonaws.com/posters/${src}.jpg`}
    />
  )
}


export default Streaming
