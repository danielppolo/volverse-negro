import React from 'react'
import Video from '../common/video'


function VideoAH(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
      }}
      y={[-40, 40]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-7.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-7.mp4"
      {...props}
    />
  )
}


export default VideoAH
