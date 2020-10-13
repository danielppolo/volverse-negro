import React from 'react'
import Video from '../common/video'


function VideoAP(props) {
  return (
    <Video
      style={{
        marginTop: '30rem',
        alignSelf: 'flex-end',
        width: '90%',
      }}
      y={[-10, 10]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+15.compressed_1.compressed.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+15.compressed_1.compressed.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAP
