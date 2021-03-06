import React from 'react'
import Video from '../common/video'


function VideoAO(props) {
  return (
    <Video
      style={{
        marginTop: '8rem',
        alignSelf: 'flex-end',
        width: '80%',
      }}
      y={[-30, 30]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+14.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+14.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAO
