import React, { useEffect, useState } from 'react'


function Streaming({ autoplay, videoId }) {
  const [player, setPlayer] = useState(null)
  useEffect(() => {
    const width = window.innerWidth
    window.onYouTubeIframeAPIReady = () => {
      const p = new YT.Player('player', {
        height: width ? width * 0.75 : 800,
        width: width || '100%',
        videoId,
        events: {
          onReady: (event) => {
            setPlayer(event.target)
          },
        },
      })
    }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  }, [])

  useEffect(() => {
    if (autoplay && player) {
      player.playVideo()
      player.mute()
    }
  }, [autoplay, player])
  return (
    <div id="player" />
  )
}


export default Streaming
