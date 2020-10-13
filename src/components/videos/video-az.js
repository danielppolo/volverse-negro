import React from 'react'
import Video from '../common/video'


function VideoAZ(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'center',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+24.1.compressed_1.compressed.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+24.1.compressed_1.compressed.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAZ
