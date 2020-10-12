import React from 'react'
import Video from '../common/video'


function VideoAX(props) {
  return (
    <Video
      style={{
        marginTop: '24rem',
        alignSelf: 'center',
        width: '80%',
      }}
      y={[-30, 0]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310424/volverse_negro/video/volversenegro_23.compressed_1.compressed_zdc0bx.mp4"
      {...props}
    />
  )
}


export default VideoAX
