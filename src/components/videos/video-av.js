import React from 'react'
import Video from '../common/video'


function VideoAV(props) {
  return (
    <Video
      style={{
        marginTop: '6rem',
        alignSelf: 'flex-end',
        width: '90%',
      }}
      y={[0, 50]}
      poster="https://volverse-negro-daniel.s3.amazonaws.com/stills/video-31.jpg"
      src="https://volverse-negro-daniel.s3.amazonaws.com/videos/video-31.mp4"
      {...props}
    />
  )
}


export default VideoAV
