const { useEffect, useState } = require('react')
const WebFont = (typeof window !== 'undefined') && require('webfontloader')

const useFontLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const fonts = new Promise((resolve, reject) => {
      if (WebFont) {
        WebFont.load({
          google: {
            families: ['Inter', 'EB Garamond'],
          },
          active: resolve,
        })
      } else {
        reject()
      }
    })
    fonts.then(() => {
      console.log('Fonts loaded 🎉')
      setLoaded(true)
    })
  }, [])

  return loaded
}

export default useFontLoaded
