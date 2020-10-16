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
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/31.+Nuevo+(1)_1.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/31.+Nuevo+(1).mp4"
      {...props}
    />
  )
}


export default VideoAV
