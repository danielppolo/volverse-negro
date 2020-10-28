import React from 'react'
import Video from '../common/video'


function VideoBC(props) {
  return (
    <Video
      style={{
        marginTop: '2em',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-27.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-27.mp4"
      {...props}
    />
  )
}


export default VideoBC
