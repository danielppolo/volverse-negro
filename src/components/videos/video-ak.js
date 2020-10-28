import React from 'react'
import Video from '../common/video'


function VideoAK(props) {
  return (
    <Video
      style={{
        marginTop: '6rem',
        alignSelf: 'center',
        width: '70%',
      }}
      y={[-50, 50]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-10.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-10.mp4"
      {...props}
    />
  )
}


export default VideoAK
