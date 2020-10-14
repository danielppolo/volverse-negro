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
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0)
      }
      currentTarget.classList.add('transition')
      setTimeout(() => {
        currentTarget.classList.add('hide')
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
           <p
             onClick={handleClick}
             className="continue"
           >
            Da click para continuar
           </p>
         ) : (
           <animated.span
             className="percentage"
           >
             {number.interpolate(n => n.toFixed())}

           </animated.span>
         )
      }

        <p className="recommended">Para una mejor experiencia usar Chrome, Firefox o Edge en PC.</p>
      </div>
    </div>
  )
}


export default Loading
