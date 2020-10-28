import React from 'react'
import Video from '../common/video'


function VideoAD(props) {
  return (
    <Video
      style={{
        marginTop: '2rem',
        width: '80%',
        alignSelf: 'flex-start',
      }}
      y={[0, 20]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-4.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-4.mp4"
      {...props}
    />
  )
}


export default VideoAD
