import React from 'react'
import Video from '../common/video'


function VideoAM(props) {
  return (
    <Video
      style={{
        marginTop: '9rem',
        alignSelf: 'center',
        width: '70%',
      }}
      y={[-10, 10]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-12.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-12.mp4"
      {...props}
    />
  )
}


export default VideoAM
