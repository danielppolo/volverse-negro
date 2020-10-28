import React from 'react'
import Video from '../common/video'


function VideoAF(props) {
  return (
    <Video
      style={{
        marginTop: '8rem',
        alignSelf: 'flex-end',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-5.5.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-5.5.mp4"
      {...props}
    />
  )
}


export default VideoAF
