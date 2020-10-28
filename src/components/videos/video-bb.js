import React from 'react'
import Video from '../common/video'


function VideoBB(props) {
  return (
    <Video
      y={[-10, 10]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-26.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-26.mp4"
      {...props}
    />
  )
}


export default VideoBB
