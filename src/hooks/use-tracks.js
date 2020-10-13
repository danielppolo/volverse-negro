import { useCallback, useEffect, useState } from 'react'

function useTracks() {
  const [current, setCurrent] = useState(null)
  const [tracks, setTracks] = useState([])
  const [active, setActive] = useState(false)
  const sources = [
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-1-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-2-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-3-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-1-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-2-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-3-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-1-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-2-Narracion-MASTER.mp3',
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
