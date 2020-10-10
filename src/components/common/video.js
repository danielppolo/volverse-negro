import React from 'react'


function Video({ src }) {
  return (
    <video src={src} preload="metadata" />
  )
}


export default Video
