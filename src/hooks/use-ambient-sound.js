import {
  useEffect, useState,
} from 'react'

const useAmbientSound = (secondary) => {
  const [track] = useState((typeof Audio !== 'undefined') && new Audio('https://res.cloudinary.com/teatroojo/video/upload/v1602274769/volverse_negro/audio/Paisaje-Sonoro_Automata_Enrique-Mendoza_MASTER_bkqzw4.mp3'))
  const [interacted, setInteracted] = useState(false)

  useEffect(() => {
    const handleOnClick = () => {
      setInteracted(true)
      document.removeEventListener('click', handleOnClick)
    }
    document.addEventListener('click', handleOnClick)

    return () => {
      document.removeEventListener('click', handleOnClick)
    }
  }, [])

  useEffect(() => {
    if (interacted && track) {
      track.loop = true
      track.volume = 0.1
      track.play()
    }
  }, [interacted])

  useEffect(() => {
    if (track) {
      track.volume = secondary ? 0 : 0.1
    }
  }, [secondary])
}

export default useAmbientSound
