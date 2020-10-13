import React from 'react'
import Video from '../common/video'


function VideoAK(props) {
  return (
    <Video
      style={{
        marginTop: '6rem',
        alignSelf: 'center',
        width: '70%',
      }}
      y={[-50, 50]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+10.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+10.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAK
