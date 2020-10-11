import { useCallback, useEffect, useState } from 'react'

function useTracks() {
  const [current, setCurrent] = useState(null)
  const [tracks, setTracks] = useState([])
  const [active, setActive] = useState(false)
  const sources = [
    'https://res.cloudinary.com/teatroojo/video/upload/v1602388770/volverse_negro/audio%20%28test%29/Chad_Crouch_-_01_-_Headwaters_Instrumental_n6b0jt.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602388771/volverse_negro/audio%20%28test%29/Blue_Dot_Sessions_-_Detailing_kigzaj.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602388770/volverse_negro/audio%20%28test%29/Blue_Dot_Sessions_-_I_Recall_rjtwta.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602388768/volverse_negro/audio%20%28test%29/Chad_Crouch_-_Algorithms_xv5fum.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602388767/volverse_negro/audio%20%28test%29/Blue_Dot_Sessions_-_Night_Watch_l6xo2r.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602388762/volverse_negro/audio%20%28test%29/Blue_Dot_Sessions_-_Speaker_Joy_by6mmw.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602388761/volverse_negro/audio%20%28test%29/Blue_Dot_Sessions_-_In_The_Box_o63w8b.mp3',
    'https://res.cloudinary.com/teatroojo/video/upload/v1602388756/volverse_negro/audio%20%28test%29/Blue_Dot_Sessions_-_Highride_kcd30k.mp3',
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
