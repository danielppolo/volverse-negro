import React from 'react'
import Video from '../common/video'


function VideoAZ(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'center',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-24.5.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-24.5.mp4"
      {...props}
    />
  )
}


export default VideoAZ
