import React from 'react'
import Video from '../common/video'


function VideoBE(props) {
  return (
    <Video
      style={{
        marginTop: '2em',
        width: '80%',
        alignSelf: 'flex-end',
      }}
      y={[-5, 30]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+29.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+29.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoBE
