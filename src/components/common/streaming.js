import React, { useEffect, useState } from 'react'


function Streaming({ autoplay, videoId }) {
  const [player, setPlayer] = useState(null)
  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      const p = new YT.Player('player', {
        height: '390',
        width: '640',
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
