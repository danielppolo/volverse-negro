import React from 'react'
import Video from '../common/video'


function VideoAF(props) {
  return (
    <Video
      style={{
        marginTop: '8rem',
        alignSelf: 'flex-end',
      }}
      y={[-20, 20]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310536/volverse_negro/video/volversenegro_05.1.compressed_1.compressed_lf6o8p.mp4"
      {...props}
    />
  )
}


export default VideoAF
