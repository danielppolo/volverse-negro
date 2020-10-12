import React from 'react'
import Video from '../common/video'


function VideoAK(props) {
  return (
    <Video
      style={{
        marginTop: '6rem',
        alignSelf: 'center',
        width: '70%',
      }}
      y={[-50, 50]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310352/volverse_negro/video/volversenegro_10.compressed_1.compressed_dpuwcm.mp4"
      {...props}
    />
  )
}


export default VideoAK
