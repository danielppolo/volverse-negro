import React from 'react'
import Video from '../common/video'


function VideoAL(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'flex-end',
        width: '90%',
      }}
      y={[-30, 30]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+11.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+11.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAL
