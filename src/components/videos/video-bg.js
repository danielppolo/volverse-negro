import React from 'react'
import Video from '../common/video'


function VideoBG(props) {
  return (
    <Video
      style={{
        alignSelf: 'flex-end',
        width: '80%',
      }}
      y={[-40, 20]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+30.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+30.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoBG
