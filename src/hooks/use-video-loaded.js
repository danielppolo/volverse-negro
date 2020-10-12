const { useEffect, useState } = require('react')

const useVideoLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const videos = document.querySelectorAll('video')
    const promises = Array.from(videos).map(video => new Promise((resolve, reject) => {
      video.addEventListener('loadeddata', (event) => {
        resolve(true)
      })
    }))
    Promise.all(promises).then((value) => {
      console.log('Video loaded 🎉')
      setLoaded(true)
    })
  }, [])

  return loaded
}

export default useVideoLoaded
