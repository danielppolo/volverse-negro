import React from 'react'
import Video from '../common/video'


function VideoAN(props) {
  return (
    <Video
      style={{
      // marginTop: '8rem',
        alignSelf: 'flex-start',
        width: '80%',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-13.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-13.mp4"
      {...props}
    />
  )
}


export default VideoAN
