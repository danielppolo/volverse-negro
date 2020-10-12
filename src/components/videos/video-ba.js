import React from 'react'
import Video from '../common/video'


function VideoBA(props) {
  return (
    <Video
      style={{
        alignSelf: 'flex-start',
      }}
      y={[-20, 20]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310441/volverse_negro/video/volversenegro_25.compressed_1.compressed_bkdxij.mp4"
      {...props}
    />
  )
}


export default VideoBA
