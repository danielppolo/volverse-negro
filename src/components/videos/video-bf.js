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
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+29.1+(bueno).compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+29.1+(bueno).compressed.mp4"
      {...props}
    />
  )
}


export default VideoBF
