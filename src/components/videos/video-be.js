import React from 'react'
import Video from '../common/video'


function VideoBE(props) {
  return (
    <Video
      style={{
        marginTop: '2em',
        width: '80%',
        alignSelf: 'flex-end',
      }}
      y={[-5, 30]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-29.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-29.mp4"
      {...props}
    />
  )
}


export default VideoBE
