import React from 'react'
import Video from '../common/video'


function VideoAE(props) {
  return (
    <Video
      y={[-10, 10]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310360/volverse_negro/video/volversenegro_05.compressed_1.compressed_u0azck.mp4"
      {...props}
    />
  )
}


export default VideoAE
