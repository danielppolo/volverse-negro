import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

function Loading({ done, onClick }) {
  const [next, setNext] = useState(false)
  const { number } = useSpring({
    number: 100,
    from: { number: 0 },
    config: {
      // friction: 99,
      tension: next ? 170 : 5,
    },
  })

  const handleClick = (event) => {
    const { target } = event
    if (done && next) {
      target.classList.add('transition')
      setTimeout(() => {
        target.classList.add('hide')
        onClick()
      }, 1000)
    }
  }
  useEffect(() => {
    if (done) {
      setTimeout(() => {
        setNext(true)
      }, 1000)
    }
  }, [done])

  console.log('Done')
  return (
    <div className="Loading" onClick={handleClick}>
      <animated.span>{number.interpolate(number => number.toFixed())}</animated.span>
      {
         next ? 'Da click para continuar' : 'loading'
       }
    </div>
  )
}


export default Loading
