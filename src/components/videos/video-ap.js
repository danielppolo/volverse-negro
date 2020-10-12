import React from 'react'
import Video from '../common/video'


function VideoAP(props) {
  return (
    <Video
      style={{
        marginTop: '30rem',
        alignSelf: 'flex-end',
        width: '90%',
      }}
      y={[-10, 10]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310564/volverse_negro/video/volversenegro_15.compressed_1.compressed_jhb5q3.mp4"
      {...props}
    />
  )
}


export default VideoAP
