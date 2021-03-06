import React from 'react'
import Video from '../common/video'


function VideoAY(props) {
  return (
    <Video
      style={{
        marginTop: '3rem',
      }}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+24.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+24.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAY
