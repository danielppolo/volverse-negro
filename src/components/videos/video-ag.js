import React from 'react'
import Video from '../common/video'


function VideoAG(props) {
  return (
    <Video
      style={{
        marginTop: '5rem',
        width: '80%',
        alignSelf: 'flex-end',
      }}
      y={[-30, 30]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-6.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-6.mp4"
      {...props}
    />
  )
}


export default VideoAG
