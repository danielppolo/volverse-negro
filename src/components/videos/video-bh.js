import React from 'react'
import Video from '../common/video'


function VideoBG(props) {
  return (
    <Video
      style={{
        alignSelf: 'flex-end',
        width: '80%',
      }}
      y={[-40, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-32.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-32.mp4"
      {...props}
    />
  )
}


export default VideoBG
