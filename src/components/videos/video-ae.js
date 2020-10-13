import React from 'react'
import Video from '../common/video'


function VideoAE(props) {
  return (
    <Video
      style={{
        alignSelf: 'center',
        width: '70%',
        marginTop: '2rem',
      }}
      y={[-10, 10]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+05.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+05.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAE
