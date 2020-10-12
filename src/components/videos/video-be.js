import React from 'react'
import Video from '../common/video'


function VideoBE(props) {
  return (
    <Video
      style={{
        marginTop: '2em',
        width: '80%',
        alignSelf: 'flex-end',
      }}
      y={[-5, 30]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310460/volverse_negro/video/volversenegro_29.compressed_1.compressed_sqpcjf.mp4"
      {...props}
    />
  )
}


export default VideoBE
