import React from 'react'
import Video from '../common/video'


function VideoAG(props) {
  return (
    <Video
      style={{
        marginTop: '5rem',
        width: '80%',
        alignSelf: 'flex-end',
      }}
      y={[-30, 30]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+06.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+06.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAG
