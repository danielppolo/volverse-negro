import React from 'react'
import Video from '../common/video'


function VideoAS(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'center',
        width: '90%',
      }}
      y={[-15, 15]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310377/volverse_negro/video/volversenegro_18.compressed_1.compressed_bsggpj.mp4"
      {...props}
    />
  )
}


export default VideoAS
