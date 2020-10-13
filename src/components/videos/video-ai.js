import React from 'react'
import Video from '../common/video'


function VideoAI(props) {
  return (
    <Video
      style={{
        marginTop: '10rem',
        alignSelf: 'center',
        width: '80%',
      }}
      y={[-40, 40]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+08.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+08.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAI
