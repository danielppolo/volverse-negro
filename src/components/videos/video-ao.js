import React from 'react'
import Video from '../common/video'


function VideoAO(props) {
  return (
    <Video
      style={{
        marginTop: '8rem',
        alignSelf: 'flex-end',
        width: '80%',
      }}
      y={[-30, 30]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-14.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-14.mp4"
      {...props}
    />
  )
}


export default VideoAO
