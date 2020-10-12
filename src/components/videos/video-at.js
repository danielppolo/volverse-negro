import React from 'react'
import Video from '../common/video'


function VideoAT(props) {
  return (
    <Video
      style={{
        marginTop: '6rem',
        alignSelf: 'flex-end',
        width: '70%',
      }}
      y={[-30, 30]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310410/volverse_negro/video/volversenegro_19.compressed_1.compressed_jqsa3e.mp4"
      {...props}
    />
  )
}


export default VideoAT
