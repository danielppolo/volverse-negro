import React from 'react'
import Video from '../common/video'


function VideoAI(props) {
  return (
    <Video
      style={{
        marginTop: '10rem',
        alignSelf: 'center',
        width: '80%',
      }}
      y={[-40, 40]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310295/volverse_negro/video/volversenegro_08.compressed_1.compressed_zrakjy.mp4"
      {...props}
    />
  )
}


export default VideoAI
