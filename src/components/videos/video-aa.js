import React from 'react'
import Video from '../common/video'


function VideoAA(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-1.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-1.mp4"
      {...props}
    />
  )
}


export default VideoAA
