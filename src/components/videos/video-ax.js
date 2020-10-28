import React from 'react'
import Video from '../common/video'


function VideoAX(props) {
  return (
    <Video
      style={{
        marginTop: '24rem',
        alignSelf: 'center',
        width: '80%',
      }}
      y={[-30, 0]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-23.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-23.mp4"
      {...props}
    />
  )
}


export default VideoAX
