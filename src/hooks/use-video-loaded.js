const { useEffect, useState } = require('react')

const useVideoLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const videos = Array.from(document.querySelectorAll('video'))
    const promises = videos.map(video => new Promise((resolve, reject) => {
      video.addEventListener('loadedmetadata', (event) => {
        console.log('Video loadedmetadata')
        resolve(true)
      })
    }))
    Promise.all(promises).then((value) => {
      console.log('Videos loaded 🎉', value)
      setLoaded(true)
    })
  }, [])

  return loaded
}

export default useVideoLoaded
