import { useCallback, useEffect, useState } from 'react'
import { scroller } from 'react-scroll'

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event

const scrollTo = (num, seconds = 0) => {
  scroller.scrollTo(`track-${num}-${seconds}`, {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: -108,
  })
}


function useTracks() {
  const [current, setCurrent] = useState(null)
  const [tracks, setTracks] = useState([])
  const [section, setSection] = useState(null)
  const [active, setActive] = useState(false)
  const sources = [
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-1-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-2-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-3-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-4-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-5-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-6-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-7-Narracion-MASTER.mp3',
    'https://volverse-negro.s3.us-east-2.amazonaws.com/audio/Isla-8-Narracion-MASTER.mp3',
  ]
  useEffect(() => {
    if (typeof Audio !== 'undefined') {
      const audioTracks = sources.map(src => new Audio(src))

      const handleTrackEnd = (event) => {
        const currentIndex = sources.indexOf(event.currentTarget.src)
        if (currentIndex > -1 && audioTracks[currentIndex + 1]) {
          console.log('Autoplay next audio')
          audioTracks[currentIndex + 1].play()
          scrollTo(currentIndex + 2)
          setCurrent(currentIndex + 1)
        }
      }
      audioTracks.forEach((track) => {
        track.addEventListener('ended', handleTrackEnd)
      })
      setTracks(audioTracks)
      if (window !== 'undefined') {
        const handleWindowScroll = (event) => {
          if (window.scrollY > document.querySelector('.cartography').offsetTop) {
            console.log('Autoplay 🔈')
            audioTracks.forEach((track) => { track.pause() })
            audioTracks[0].play()
            window.removeEventListener('scroll', handleWindowScroll)
          }
        }
        window.addEventListener('scroll', handleWindowScroll)
      }
    }
  }, [])

  console.log('CURRENT TRACK', current)

  const playback = useCallback(
    (num, currentTime = 0) => {
      if ((current !== null) && (num === current + 1) && section === currentTime) {
        console.log(num, current)
        if (tracks[current].paused) {
          tracks[current].play()
          setSection(currentTime)
          setActive(true)
          setCurrent(num - 1)
        } else {
          tracks[current].pause()
          setActive(false)
        }
      } else if (num) {
        console.log(`Playing track ${num - 1}`)
        console.log(current !== null ? `Currently playing ${current}` : 'No current track')
        if (current !== null) tracks[current].pause()
        tracks[num - 1].currentTime = currentTime
        tracks[num - 1].play()
        scrollTo(num, currentTime)
        setSection(currentTime)
        setCurrent(num - 1)
        setActive(true)
      } else if (!current) {
        console.log('Playing track 1')
        tracks[0].play()
        scrollTo(1)
        setCurrent(0)
        setActive(true)
      } else if (tracks[current].paused) {
        console.log(`Continue playing track ${current}`)
        tracks[current].play()
        setSection(currentTime)
        // scrollTo(num)
        setActive(true)
      } else {
        console.log(`Pause track ${current}`)
        tracks[current].pause()
        setActive(false)
      }
    },
    [current, tracks, section],
  )

  return {
    current: current + 1, playback, active,
  }
}

export default useTracks
