import React from 'react'
import Video from '../common/video'


function VideoAU(props) {
  return (
    <Video
      y={[0, 30]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+20.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+20.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAU
