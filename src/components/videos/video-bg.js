import React from 'react'
import Video from '../common/video'


function VideoBG(props) {
  return (
    <Video
      style={{
        alignSelf: 'flex-end',
        width: '80%',
      }}
      y={[-40, 20]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310465/volverse_negro/video/volversenegro_30.compressed_1.compressed_fqdm5q.mp4"
      {...props}
    />
  )
}


export default VideoBG
