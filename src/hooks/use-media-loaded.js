import useVideoLoaded from './use-video-loaded'
import useImageLoaded from './use-image-loaded'
import useFontLoaded from './use-font-loaded'

const useMediaLoaded = () => {
  const video = useVideoLoaded()
  const image = useImageLoaded()
  const font = useFontLoaded()

  return (video && image && font)
}

export default useMediaLoaded
