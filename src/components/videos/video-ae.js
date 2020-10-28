import React from 'react'
import Video from '../common/video'


function VideoAE(props) {
  return (
    <Video
      style={{
        alignSelf: 'center',
        width: '70%',
        marginTop: '2rem',
      }}
      y={[-10, 10]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-5.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-5.mp4"
      {...props}
    />
  )
}


export default VideoAE
