import React from 'react'
import Video from '../common/video'


function VideoBB(props) {
  return (
    <Video
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/volversenegro+26.compressed_1.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/volversenegro+26.compressed_1.compressed.mp4"
      {...props}
    />
  )
}


export default VideoBB
