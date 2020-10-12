const { useEffect, useState } = require('react')
const imagesLoaded = require('imagesloaded')

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const preloadImages = () => new Promise((resolve, reject) => {
      imagesLoaded(document.querySelectorAll('img'), { background: true }, resolve)
    })
    preloadImages().then((value) => {
      console.log('Images loaded 🎉')
      setLoaded(true)
    })
  }, [])

  return loaded
}

export default useImageLoaded
