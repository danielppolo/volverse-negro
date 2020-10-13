import React from 'react'
import Video from '../common/video'


function VideoAA(props) {
  return (
    <Video
      style={{
        marginTop: '8rem',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+01.compressed_2.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+01.compressed_2.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAA
