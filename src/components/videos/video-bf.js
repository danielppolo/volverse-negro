import React from 'react'
import Video from '../common/video'


function VideoBF(props) {
  return (
    <Video
      style={{
        marginTop: '18em',
        alignSelf: 'flex-start',
      }}
      y={[-30, 30]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-29.5.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-29.5.mp4"
      {...props}
    />
  )
}


export default VideoBF
