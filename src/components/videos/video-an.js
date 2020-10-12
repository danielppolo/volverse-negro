import React from 'react'
import Video from '../common/video'


function VideoAN(props) {
  return (
    <Video
      style={{
      // marginTop: '8rem',
        alignSelf: 'flex-start',
        width: '80%',
      }}
      y={[-20, 20]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310368/volverse_negro/video/volversenegro_13.compressed_1.compressed_pxl11o.mp4"
      {...props}
    />
  )
}


export default VideoAN
