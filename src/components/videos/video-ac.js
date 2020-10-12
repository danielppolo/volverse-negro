import React from 'react'
import Video from '../common/video'


function VideoAC(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
      }}
      y={[-30, 30]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310506/volverse_negro/video/volversenegro_03.compressed_1.compressed_wwm6fw.mp4"
      {...props}
    />
  )
}


export default VideoAC
