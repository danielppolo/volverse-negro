import React from 'react'
import Video from '../common/video'


function VideoAW(props) {
  return (
    <Video
      style={{
        marginTop: '10rem',
        alignSelf: 'center',
        width: '80%',
      }}
      y={[-30, 50]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310438/volverse_negro/video/volversenegro_22.compressed_1.compressed_falzif.mp4"
      {...props}
    />
  )
}


export default VideoAW
