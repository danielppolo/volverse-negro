import React from 'react'
import Video from '../common/video'


function VideoBA(props) {
  return (
    <Video
      style={{
        alignSelf: 'flex-start',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-25.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-25.mp4"
      {...props}
    />
  )
}


export default VideoBA
