import React from 'react'
import Video from '../common/video'


function VideoAQ(props) {
  return (
    <Video
      style={{
        marginTop: '6rem',
        alignSelf: 'center',
        width: '70%',
      }}
      y={[-20, 20]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+16.compressed_1.compressed.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+16.compressed_1.compressed.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAQ
