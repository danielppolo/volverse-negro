import React from 'react'
import Video from '../common/video'


function VideoAL(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'flex-end',
        width: '90%',
      }}
      y={[-30, 30]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310348/volverse_negro/video/volversenegro_11.compressed_1.compressed_oalqho.mp4"
      {...props}
    />
  )
}


export default VideoAL
