import React from 'react'
import Video from '../common/video'


function VideoAY(props) {
  return (
    <Video
      style={{
        marginTop: '3rem',
      }}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-24.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-24.mp4"
      {...props}
    />
  )
}


export default VideoAY
