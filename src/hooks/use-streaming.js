import { useEffect, useState } from 'react'

const useStreaming = (videoId, elements, ready) => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const width = window.innerWidth
    window.onYouTubeIframeAPIReady = () => {
      elements.forEach((id) => {
        const p = new YT.Player(id, {
          height: window.innerHeight || 600,
          width: width || '100%',
          videoId,
          events: {
            onReady: (event) => {
              console.log('Youtube API is ready.')
              players.push(event.target)
            },
          },
        })
      })
    }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  }, [])

  useEffect(() => {
    if (ready && players) {
      console.log('Streaming started playing...')
      players.forEach((player) => {
        player.playVideo()
        player.mute()
      })
    }
  }, [ready, players])
}

export default useStreaming
