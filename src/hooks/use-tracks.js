import { useCallback, useEffect, useState } from 'react'

function useTracks() {
  const [current, setCurrent] = useState(null)
  const [tracks, setTracks] = useState([])
  const [active, setActive] = useState(false)
  const sources = [
    'https://res.cloudinary.com/teatroojo/video/upload/v1602531617/volverse_negro/audio/Isla-1-Narracion-MASTER_r9eiyn.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602531619/volverse_negro/audio/Isla-2-Narracion-MASTER_jk9h5j.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602531617/volverse_negro/audio/Isla-3-Narracion-MASTER_fqcaco.mp3',
    // PENDING
    'https://res.cloudinary.com/teatroojo/video/upload/v1602531617/volverse_negro/audio/Isla-1-Narracion-MASTER_r9eiyn.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602531619/volverse_negro/audio/Isla-2-Narracion-MASTER_jk9h5j.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602531617/volverse_negro/audio/Isla-3-Narracion-MASTER_fqcaco.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602531617/volverse_negro/audio/Isla-1-Narracion-MASTER_r9eiyn.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602531619/volverse_negro/audio/Isla-2-Narracion-MASTER_jk9h5j.mp3',
  ]
  useEffect(() => {
    if (typeof Audio !== 'undefined') {
      setTracks(sources.map(src => new Audio(src)))
    }
  }, [])

  const next = () => {}
  const previous = () => {}
  const playback = useCallback(
    (num) => {
      if (num) {
        setCurrent(num - 1)
        if (!current) tracks[num - 1].play()
      }

      if (current) {
        if (tracks[current].paused) {
          tracks[current].play()
          setActive(true)
        } else {
          tracks[current].pause()
          setActive(false)
        }
      }
    },
    [current, tracks],
  )

  return {
    current, next, previous, playback,
  }
}

export default useTracks
