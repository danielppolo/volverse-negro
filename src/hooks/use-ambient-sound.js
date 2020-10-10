import {
  useEffect, useState,
} from 'react'

const useAmbientSound = (secondary) => {
  const [track] = useState(new Audio('https://res.cloudinary.com/teatroojo/video/upload/v1602274769/volverse_negro/audio/Paisaje-Sonoro_Automata_Enrique-Mendoza_MASTER_bkqzw4.mp3'))
  const [interacted, setInteracted] = useState(false)

  useEffect(() => {
    const handleOnClick = () => {
      setInteracted(true)
      document.removeEventListener('click', handleOnClick)
    }
    document.addEventListener('click', handleOnClick)
  }, [])

  useEffect(() => {
    if (interacted) {
      track.loop = true
      track.volume = 1
      // track.play()
    }
  }, [interacted])

  useEffect(() => {
    track.volume = secondary ? 0.5 : 1
  }, [secondary])
}

export default useAmbientSound
