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
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+21.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+21.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAV
