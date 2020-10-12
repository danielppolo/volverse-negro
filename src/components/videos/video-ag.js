import React from 'react'
import Video from '../common/video'


function VideoAG(props) {
  return (
    <Video
      style={{
        marginTop: '5rem',
        width: '80%',
        alignSelf: 'flex-end',
      }}
      y={[-30, 30]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310275/volverse_negro/video/volversenegro_06.compressed_1.compressed_aat3vf.mp4"
      {...props}
    />
  )
}


export default VideoAG
