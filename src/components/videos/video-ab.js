import React from 'react'
import Video from '../common/video'

function VideoAB(props) {
  return (
    <Video
      style={{
        marginTop: ' 3rem',
        width: '80%',
        alignSelf: 'center',
      }}
      y={[-10, 10]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+02.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+02.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAB
