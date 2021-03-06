import React from 'react'
import Video from '../common/video'


function VideoBA(props) {
  return (
    <Video
      style={{
        alignSelf: 'flex-start',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+25.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+25.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoBA
