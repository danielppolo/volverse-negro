import React from 'react'
import Video from '../common/video'


function VideoAC(props) {
  return (
    <Video
      style={{
        marginTop: '2rem',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-3.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-3.mp4"
      {...props}
    />
  )
}


export default VideoAC
