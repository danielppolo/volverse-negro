import React from 'react'
import Video from '../common/video'


function VideoBD(props) {
  return (
    <Video
      style={{
        marginTop: '2em',
        width: '70%',
        alignSelf: 'center',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-28.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-28.mp4"
      {...props}
    />
  )
}


export default VideoBD
