import React from 'react'
import Video from '../common/video'


function VideoAS(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'center',
        width: '90%',
      }}
      y={[-15, 15]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-18.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-18.mp4"
      {...props}
    />
  )
}


export default VideoAS
