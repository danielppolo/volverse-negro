import React from 'react'
import Video from '../common/video'


function VideoAU(props) {
  return (
    <Video
      y={[0, 30]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310379/volverse_negro/video/volversenegro_20.compressed_1.compressed_hcbxjm.mp4"
      {...props}
    />
  )
}


export default VideoAU
