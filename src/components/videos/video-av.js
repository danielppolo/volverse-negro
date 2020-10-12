import React from 'react'
import Video from '../common/video'


function VideoAV(props) {
  return (
    <Video
      style={{
        marginTop: '6rem',
        alignSelf: 'flex-end',
        width: '90%',
      }}
      y={[0, 50]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310382/volverse_negro/video/volversenegro_21.compressed_1.compressed_vtbnxn.mp4"
      {...props}
    />
  )
}


export default VideoAV
