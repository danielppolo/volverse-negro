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
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+13.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+13.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAN
