const { useEffect, useState } = require('react')
const WebFont = require('webfontloader')

const useFontLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const fonts = new Promise((resolve, reject) => {
      WebFont.load({
        google: {
          families: ['Inter', 'EB Garamond'],
        },
        active: resolve,
      })
    })
    fonts.then(() => {
      console.log('Fonts loaded 🎉')
      setLoaded(true)
    })
  }, [])

  return loaded
}

export default useFontLoaded
