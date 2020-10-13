import React from 'react'
import Video from '../common/video'


function VideoAC(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
      }}
      y={[-30, 30]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+03.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+03.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAC
