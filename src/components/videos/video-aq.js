import React from 'react'
import Video from '../common/video'


function VideoAQ(props) {
  return (
    <Video
      style={{
        marginTop: '6rem',
        alignSelf: 'center',
        width: '70%',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-16.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-16.mp4"
      {...props}
    />
  )
}


export default VideoAQ
