import React from 'react'
import Video from '../common/video'


function VideoBG(props) {
  return (
    <Video
      style={{
        marginTop: '10em',
        alignSelf: 'flex-end',
        width: '80%',
      }}
      y={[0, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-30.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-30.mp4"
      {...props}
    />
  )
}


export default VideoBG
