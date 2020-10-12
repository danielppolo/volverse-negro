import React from 'react'
import Video from '../common/video'


function VideoBD(props) {
  return (
    <Video
      style={{
        marginTop: '2em',
        width: '70%',
        alignSelf: 'center',
      }}
      y={[-20, 20]}
      src="https://res.cloudinary.com/teatroojo/video/upload/v1602310464/volverse_negro/video/volversenegro_28.compressed_1.compressed_pyqg2w.mp4"
      {...props}
    />
  )
}


export default VideoBD
