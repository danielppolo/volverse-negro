import React from 'react'
import Video from '../common/video'


function VideoAR(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'center',
      }}
      y={[-10, 10]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310369/volverse_negro/video/volversenegro_17.compressed_1.compressed_xbrgva.mp4"
      {...props}
    />
  )
}


export default VideoAR
