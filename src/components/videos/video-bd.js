import React from 'react'
import Video from '../common/video'


function VideoBD(props) {
  return (
    <Video
      style={{
        marginTop: '2em',
        width: '70%',
        alignSelf: 'center',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+28.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+28.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoBD
