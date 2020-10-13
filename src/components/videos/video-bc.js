import React from 'react'
import Video from '../common/video'


function VideoBC(props) {
  return (
    <Video
      style={{
        marginTop: '2em',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+27.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+27.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoBC
