import { useCallback, useEffect } from 'react'

const useFigures = (ready) => {
  const stamp = useCallback(
    event => selected,
    [],
  )

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.id === 'cartography') return
      if (['IMG', 'VIDEO', 'P'].includes(event.target.tagName)) return
      
      const figures = Array.from(document.querySelectorAll('.Figure.inactive'))
      const i = Math.floor(Math.random() * (figures.length - 1))
      const selected = figures[i]
      selected.classList.toggle('active')
      selected.classList.toggle('inactive')
      const e = (typeof window !== 'undefined' && window.innerWidth > 720) ? 200 : 100
      const size = (Math.floor(Math.random() * e)) + e
      selected.style.width = `${size}px`
      selected.style.transform = `rotate(${(Math.floor(Math.random() * 30)) * (Math.random() > 0.5 ? -1 : 1)}deg) translate(-50%, -50%)`
      selected.style.left = `${event.pageX}px`
      selected.style.top = `${event.pageY}px`

      selected.style.animationName = 'fade'
      selected.style.animationDuration = '3s'
      selected.style.animationDelay = '3s'
      setTimeout(() => {
        selected.classList.toggle('active')
        selected.classList.toggle('inactive')
      }, 6000)
    }

    if (ready) {
      document.querySelector('main').addEventListener('click', handleClick)
    }
    return () => {
      document.querySelector('main').removeEventListener('click', handleClick)
    }
  }, [ready])


  return stamp
}

export default useFigures
