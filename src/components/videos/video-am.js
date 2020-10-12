import React from 'react'
import Video from '../common/video'


function VideoAM(props) {
  return (
    <Video
      style={{
        marginTop: '9rem',
        alignSelf: 'center',
        width: '70%',
      }}
      y={[-10, 10]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310348/volverse_negro/video/volversenegro_12.compressed_1.compressed_h86v1l.mp4"
      {...props}
    />
  )
}


export default VideoAM
