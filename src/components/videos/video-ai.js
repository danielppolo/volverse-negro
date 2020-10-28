import React from 'react'
import Video from '../common/video'


function VideoAI(props) {
  return (
    <Video
      style={{
        marginTop: '10rem',
        alignSelf: 'center',
        width: '80%',
      }}
      y={[-40, 40]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-8.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-8.mp4"
      {...props}
    />
  )
}


export default VideoAI
