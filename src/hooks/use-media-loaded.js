import useVideoLoaded from './use-video-loaded'
import useImageLoaded from './use-image-loaded'
import useFontLoaded from './use-font-loaded'

const useMediaLoaded = () => {
  const video = true
  const image = useImageLoaded()
  const font = useFontLoaded()

  return { font, video, image }
}

export default useMediaLoaded
