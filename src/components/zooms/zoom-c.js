import React from 'react'
import Zoom from '../common/zoom'


function ZoomC(props) {
  return (
    <Zoom
      {...props}
      poster="https://volverse-negro.s3.us-east-2.amazonaws.com/posters/Zoom+3.compressed_1.compressed.compressed.jpg"
      src="https://volverse-negro.s3.us-east-2.amazonaws.com/videos/Zoom+3.compressed_1.compressed.compressed.mp4"
    />
  )
}


export default ZoomC
