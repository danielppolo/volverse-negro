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
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/31.+Nuevo+(2)_1.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/31.+Nuevo+(2).mp4"
      {...props}
    />
  )
}


export default VideoBG
