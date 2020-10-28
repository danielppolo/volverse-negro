import React from 'react'
import Video from '../common/video'


function VideoAU(props) {
  return (
    <Video
      y={[0, 30]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-20.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-20.mp4"
      {...props}
    />
  )
}


export default VideoAU
