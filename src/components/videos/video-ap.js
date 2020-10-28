import React from 'react'
import Video from '../common/video'


function VideoAP(props) {
  return (
    <Video
      style={{
        marginTop: '20rem',
        alignSelf: 'flex-end',
        width: '90%',
      }}
      y={[-10, 10]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-15.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-15.mp4"
      {...props}
    />
  )
}


export default VideoAP
