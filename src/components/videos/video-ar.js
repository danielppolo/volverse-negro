import React from 'react'
import Video from '../common/video'


function VideoAR(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'center',
      }}
      y={[-10, 10]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+17.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+17.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAR
