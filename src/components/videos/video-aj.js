import React from 'react'
import Video from '../common/video'


function VideoAJ(props) {
  return (
    <Video
      style={{
        marginTop: '10rem',
        alignSelf: 'flex-start',
        width: '80%',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-9.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-9.mp4"
      {...props}
    />
  )
}


export default VideoAJ
