import React from 'react'
import Video from '../common/video'


function VideoAX(props) {
  return (
    <Video
      style={{
        marginTop: '24rem',
        alignSelf: 'center',
        width: '80%',
      }}
      y={[-30, 0]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+23.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+23.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAX
