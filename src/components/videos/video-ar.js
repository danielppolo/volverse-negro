import React from 'react'
import Video from '../common/video'


function VideoAR(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'center',
      }}
      volume="0.4"
      y={[-10, 10]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-17.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-17.mp4"
      {...props}
    />
  )
}


export default VideoAR
