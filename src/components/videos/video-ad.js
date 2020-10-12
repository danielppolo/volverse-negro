import React from 'react'
import Video from '../common/video'


function VideoAD(props) {
  return (
    <Video
      style={{
        marginTop: '2rem',
        width: '80%',
        alignSelf: 'flex-start',
      }}
      y={[-40, 40]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310294/volverse_negro/video/volversenegro_04.compressed_1.compressed_hulnya.mp4"
      {...props}
    />
  )
}


export default VideoAD
