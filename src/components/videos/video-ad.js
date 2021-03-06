import React from 'react'
import Video from '../common/video'


function VideoAD(props) {
  return (
    <Video
      style={{
        marginTop: '2rem',
        width: '80%',
        alignSelf: 'flex-start',
      }}
      y={[0, 20]}
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+04.compressed_1.compressed.mp4"
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+04.compressed_1.compressed.jpg"
      {...props}
    />
  )
}


export default VideoAD
