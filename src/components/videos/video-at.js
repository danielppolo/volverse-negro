import React from 'react'
import Video from '../common/video'


function VideoAT(props) {
  return (
    <Video
      style={{
        marginTop: '6rem',
        alignSelf: 'flex-end',
        width: '70%',
      }}
      y={[-30, 30]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-19.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-19.mp4"
      {...props}
    />
  )
}


export default VideoAT
