import React from 'react'
import Video from '../common/video'


function VideoAQ(props) {
  return (
    <Video
      style={{
        marginTop: '6rem',
        alignSelf: 'center',
        width: '70%',
      }}
      y={[-20, 20]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310573/volverse_negro/video/volversenegro_16.compressed_1.compressed_audleo.mp4"
      {...props}
    />
  )
}


export default VideoAQ
