import {
  useEffect, useState,
} from 'react'

const useAmbientSound = (secondary) => {
  const [track] = useState((typeof Audio !== 'undefined') && new Audio('https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Paisaje-Sonoro_Automata_Enrique-Mendoza_MASTER.mp3'))
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
      track.volume = 0.2
      track.play()
    }
  }, [interacted])

  useEffect(() => {
    if (track) {
      track.volume = secondary ? 0.1 : 0.2
    }
  }, [secondary])
}

export default useAmbientSound
