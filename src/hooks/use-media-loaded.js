import useVideoLoaded from './use-video-loaded'
import useImageLoaded from './use-image-loaded'

const useMediaLoaded = () => {
  const video = useVideoLoaded()
  const image = useImageLoaded()

  return (video && image)
}

export default useMediaLoaded
