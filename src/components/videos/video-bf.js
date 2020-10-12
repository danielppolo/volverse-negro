import React from 'react'
import Video from '../common/video'


function VideoBF(props) {
  return (
    <Video
      style={{
        marginTop: '18em',
        alignSelf: 'flex-start',
      }}
      y={[-30, 30]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602363408/volverse_negro/video/volversenegro_29.1_bueno_.compressed_azimls.mp4"
      {...props}
    />
  )
}


export default VideoBF
