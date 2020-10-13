import React from 'react'
import Video from '../common/video'


function VideoAS(props) {
  return (
    <Video
      style={{
        marginTop: '4rem',
        alignSelf: 'center',
        width: '90%',
      }}
      y={[-15, 15]}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+18.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+18.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoAS
