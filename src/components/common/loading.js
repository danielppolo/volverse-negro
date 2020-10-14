import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

function Loading({ done, fontReady, onClick }) {
  const [next, setNext] = useState(false)
  const { number } = useSpring({
    number: 100,
    opacity: 1,
    from: {
      number: 0,
      opacity: 0,
    },
    config: {
      // friction: 99,
      tension: next ? 170 : 5,
    },
  })

  const handleClick = (event) => {
    const { currentTarget } = event
    if (done && next) {
      currentTarget.classList.add('transition')
      setTimeout(() => {
        currentTarget.classList.add('hide')
        console.log('Click')
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

  return (
    <div className="Loading" onClick={handleClick}>
      {
        fontReady && (
        <p
          className="welcome interact"
        >
      Volverse negro
        </p>
        )
      }
      <div className="right-bottom">
        {
         next ? (
           <span
             onClick={handleClick}
             className="continue"
           >
            Da click para continuar
           </span>
         ) : (
           <animated.span
             className="percentage"
           >
             {number.interpolate(n => n.toFixed())}

           </animated.span>
         )
      }
      </div>
    </div>
  )
}


export default Loading
