import React from 'react'
import Video from '../common/video'

function VideoAB(props) {
  return (
    <Video
      style={{
        marginTop: '3rem',
        width: '80%',
        alignSelf: 'center',
      }}
      y={[-10, 10]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-2.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-2.mp4"
      {...props}
    />
  )
}


export default VideoAB
