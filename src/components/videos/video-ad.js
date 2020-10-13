import React from 'react'
import Video from '../common/video'


function VideoAD(props) {
  return (
    <Video
      style={{
        width: '80%',
        alignSelf: 'flex-start',
      }}
      y={[-20, 20]}
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+04.compressed_1.compressed.jpg"
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+04.compressed_1.compressed.jpg"
      {...props}
    />
  )
}


export default VideoAD
