import React from 'react'
import Video from '../common/video'


function VideoAA(props) {
  return (
    <Video
      style={{
        marginTop: '8rem',
      }}
      y={[-80, 80]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310486/volverse_negro/video/volversenegro_01.compressed_2.compressed_ygv2y6.mp4"
      {...props}
    />
  )
}


export default VideoAA
