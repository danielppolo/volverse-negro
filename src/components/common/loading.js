import React, { useEffect, useState } from 'react'

function Loading({ done, onClick }) {
  const [next, setNext] = useState(false)
  const handleClick = (event) => {
    const { target } = event
    target.classList.add('transition')
    setTimeout(() => {
      target.classList.add('hide')
      onClick()
    }, 1000)
  }
  useEffect(() => {
    if (done) {
      setTimeout(() => {
        setNext(true)
      }, 2000)
    }
  }, [done])
  return (
    <div className="Loading" onClick={handleClick}>
      {
         next ? 'Da click para continuar' : 'loading'
       }
    </div>
  )
}


export default Loading
