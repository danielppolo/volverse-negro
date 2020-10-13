import React from 'react'
import Video from '../common/video'


function VideoAW(props) {
  return (
    <Video
      style={{
        marginTop: '10rem',
        alignSelf: 'center',
        width: '80%',
      }}
      y={[-30, 50]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+22.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+22.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAW
