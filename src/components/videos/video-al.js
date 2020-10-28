import React from 'react'
import Video from '../common/video'


function VideoAL(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'flex-end',
        width: '90%',
      }}
      y={[-30, 30]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-11.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-11.mp4"
      {...props}
    />
  )
}


export default VideoAL
