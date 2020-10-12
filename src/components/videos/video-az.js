import React from 'react'
import Video from '../common/video'


function VideoAZ(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'center',
      }}
      y={[-20, 20]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310568/volverse_negro/video/volversenegro_24.1.compressed_1.compressed_o3ldjo.mp4"
      {...props}
    />
  )
}


export default VideoAZ
