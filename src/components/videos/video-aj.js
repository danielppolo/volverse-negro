import React from 'react'
import Video from '../common/video'


function VideoAJ(props) {
  return (
    <Video
      style={{
        marginTop: '10rem',
        alignSelf: 'flex-start',
        width: '80%',
      }}
      y={[-20, 20]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310396/volverse_negro/video/volversenegro_09.compressed_1.compressed_otlypg.mp4"
      {...props}
    />
  )
}


export default VideoAJ
