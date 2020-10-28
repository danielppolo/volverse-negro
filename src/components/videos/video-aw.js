import React from 'react'
import Video from '../common/video'


function VideoAW(props) {
  return (
    <Video
      style={{
        marginTop: '10rem',
        alignSelf: 'center',
        width: '80%',
      }}
      y={[-30, 50]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-22.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-22.mp4"
      {...props}
    />
  )
}


export default VideoAW
