import React from 'react'
import Video from '../common/video'

function VideoAB(props) {
  return (
    <Video
      style={{
        marginTop: ' 3rem',
        width: '80%',
        alignSelf: 'center',
      }}
      y={[-80, 80]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310534/volverse_negro/video/volversenegro_02.compressed_1.compressed_yh5ctu.mp4"
      {...props}
    />
  )
}


export default VideoAB
