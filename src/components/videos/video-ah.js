import React from 'react'
import Video from '../common/video'


function VideoAH(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
      }}
      y={[-40, 40]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310287/volverse_negro/video/volversenegro_07.compressed_1.compressed_sngjt2.mp4"
      {...props}
    />
  )
}


export default VideoAH
